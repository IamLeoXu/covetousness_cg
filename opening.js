/* One workbench, one real deck: insert the loose tape, close its door, then move the camera. */
(() => {
  'use strict';
  class TapeLoadingScene {
    constructor({ root, game, target, config, unlock, sound }) {
      this.root=root; this.game=game; this.target=target; this.config=config||{}; this.unlock=unlock;
      this.loaded=false; this.loading=false;
      this.ejected=false; this.ejecting=false; this.deckMotion=0; this.deckAnimations=new Set();
      this.hatch=document.getElementById('deckHatch'); this.door=document.getElementById('deckDoor');
      this.sound=sound||(()=>{});
      this.button=document.getElementById('enter'); this.scene=document.getElementById('loadScene');
      this.world=document.getElementById('workbenchWorld'); this.status=document.getElementById('loadStatus');
      this.cameraMoving=false;this.cameraScale=1;
      this.hatch.dataset.state='empty';this.door.style.transform='rotateX(-64deg)';this.target.style.opacity='0';
      this.game.inert=true;
    }

    resize(width,height) {
      const close=Math.min(width/1600,height/900);
      this.playPose={x:(width-1600*close)/2-300*close,y:(height-900*close)/2-175*close,scale:close};
      if(!this.loaded){
        const world=this.world.getBoundingClientRect(),bay=this.target.getBoundingClientRect();
        const scale=world.width/2200||1,w=bay.width/scale,h=bay.height/scale;
        const cx=(bay.left+bay.width/2-world.left)/scale,cy=(bay.top+bay.height/2-world.top)/scale;
        const detail=Math.min(width*.36/w,height*.42/h);
        // Begin with a large loose cassette on the left and the real deck's open slot on the right.
        this.detailPose={x:width*.72-cx*detail,y:height*.5-cy*detail,scale:detail};
        const left=cx-w*1.65;
        Object.assign(this.button.style,{left:left+'px',top:(cy-h*.25)+'px',width:(w*1.05)+'px'});
        Object.assign(document.querySelector('.loading-title').style,{left:left+'px',top:(cy-h*.95)+'px'});
        Object.assign(this.status.style,{left:left+'px',top:(cy+h*1.05)+'px'});
      }
      if(!this.cameraMoving){const pose=this.loaded?this.playPose:this.detailPose;this.cameraScale=pose.scale;this.world.style.transform=this.cameraTransform(pose);this.world.style.visibility='visible';}
    }

    cameraTransform(pose) {return `translate(${pose.x}px,${pose.y}px) scale(${pose.scale})`;}

    async animate(element, frames, duration, easing='cubic-bezier(.22,.72,.2,1)') {
      if (typeof element.animate !== 'function' || duration <= 0) {
        Object.assign(element.style, frames[frames.length-1]); return;
      }
      const animation=element.animate(frames,{duration,easing,fill:'forwards'});
      await animation.finished.catch(()=>{});
      for(const [key,value]of Object.entries(frames.at(-1)))if(key!=='offset')element.style[key]=value;
      animation.cancel();
    }

    async insert() {
      if (this.loaded || this.loading) return false;
      this.loading=true; this.button.disabled=true;
      this.root.dataset.step='inserting'; this.status.textContent='INSERTING TAPE';
      // Resume the audio context in the original click; the song itself waits for the pullback.
      const unlocked=Promise.resolve(this.unlock()).catch(()=>{});
      const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
      const speed=reduced ? 0 : 1;
      const source=document.getElementById('handCassette').getBoundingClientRect();
      const bay=this.target.getBoundingClientRect(),scale=this.cameraScale;
      this.button.style.transformOrigin=`${source.width/scale/2}px ${source.height/scale/2}px`;
      const dx=(bay.left+bay.width/2-source.left-source.width/2)/scale, dy=(bay.top+bay.height/2-source.top-source.height/2)/scale;
      const ratio=bay.width/source.width;
      await this.animate(this.button,[{transform:'translate(0,0) scale(1)'},{transform:`translate(${dx}px,${dy}px) scale(${ratio})`}],(this.config.insertMs??850)*speed);
      this.sound('insert');
      this.target.style.opacity='1';
      this.root.dataset.step='closing'; this.status.textContent='CLOSING HATCH';
      await this.animate(this.door,[
        {transform:'rotateX(-64deg)',offset:0},{transform:'rotateX(1deg)',offset:.92},{transform:'rotateX(0deg)',offset:1}
      ],(this.config.closeMs??680)*speed);
      this.sound('latch');
      await new Promise(resolve=>setTimeout(resolve,(this.config.settleMs??160)*speed));
      this.hatch.dataset.state='loaded';this.root.dataset.step='framing';this.status.textContent='SIGNAL ACQUIRED';
      this.cameraMoving=true;
      await this.animate(this.world,[{transform:this.cameraTransform(this.detailPose)},{transform:this.cameraTransform(this.playPose)}],(this.config.pullbackMs??1500)*speed,'cubic-bezier(.42,0,.22,1)');
      await unlocked;
      this.loaded=true; this.loading=false; this.root.hidden=true; this.game.inert=false;
      this.cameraMoving=false;this.resize(document.getElementById('viewport').clientWidth,document.getElementById('viewport').clientHeight);
      document.getElementById('play').focus?.({preventScroll:true});
      return true;
    }

    cancelDeckMotion() {
      this.deckMotion++;
      for(const animation of this.deckAnimations)animation.cancel();
      this.deckAnimations.clear();
      this.ejecting=false;
    }

    async animateDeck(element,frames,duration,token) {
      if(token!==this.deckMotion)return false;
      if(typeof element.animate!=='function'||duration<=0){Object.assign(element.style,frames.at(-1));return true;}
      const animation=element.animate(frames,{duration,easing:'cubic-bezier(.22,.72,.2,1)',fill:'forwards'});
      this.deckAnimations.add(animation);
      let finished=true;try{await animation.finished;}catch{finished=false;}
      if(finished&&token===this.deckMotion)Object.assign(element.style,frames.at(-1));
      animation.cancel();this.deckAnimations.delete(animation);
      return finished&&token===this.deckMotion;
    }

    restoreDeck() {
      if(!this.ejected&&!this.ejecting&&this.hatch.dataset.state==='loaded')return;
      this.cancelDeckMotion();this.ejected=false;this.loading=false;
      this.door.style.transform='rotateX(0deg)';
      this.target.style.transform='translate3d(0,0,0) rotate(0deg)';
      this.hatch.dataset.state='loaded';this.onDeckState?.();
    }

    async eject() {
      if(!this.loaded||this.ejected||this.ejecting)return false;
      this.cancelDeckMotion();const token=this.deckMotion;this.ejecting=true;
      const speed=matchMedia('(prefers-reduced-motion: reduce)').matches?0:1;
      this.hatch.dataset.state='stopping';
      await new Promise(resolve=>setTimeout(resolve,180*speed));
      if(token!==this.deckMotion)return false;
      this.hatch.dataset.state='opening';this.sound('unlatch');
      if(!(await this.animateDeck(this.door,[{transform:'rotateX(0deg)'},{transform:'rotateX(-64deg)'}],580*speed,token)))return false;
      this.hatch.dataset.state='ejecting';this.sound('eject');
      if(!(await this.animateDeck(this.target,[
        {transform:'translate3d(0,0,0) rotate(0deg)'},
        {transform:'translate3d(0,-24px,18px) rotate(-3deg)',offset:.78},
        {transform:'translate3d(0,-21px,18px) rotate(-3deg)'}
      ],420*speed,token)))return false;
      this.ejecting=false;this.ejected=true;this.hatch.dataset.state='ejected';this.onDeckState?.();
      return true;
    }

    async reload() {
      if(!this.ejected&&!this.ejecting)return true;
      this.cancelDeckMotion();const token=this.deckMotion;this.loading=true;
      const speed=matchMedia('(prefers-reduced-motion: reduce)').matches?0:1;
      this.door.style.transform='rotateX(-64deg)';this.hatch.dataset.state='inserting';
      if(!(await this.animateDeck(this.target,[
        {transform:'translate3d(0,-21px,18px) rotate(-3deg)'},{transform:'translate3d(0,0,0) rotate(0deg)'}
      ],340*speed,token)))return false;
      this.sound('insert');this.hatch.dataset.state='closing';
      if(!(await this.animateDeck(this.door,[{transform:'rotateX(-64deg)'},{transform:'rotateX(0deg)'}],480*speed,token)))return false;
      this.sound('latch');this.loading=false;this.ejected=false;this.hatch.dataset.state='loaded';this.onDeckState?.();
      return true;
    }
  }
  window.TapeLoadingScene=TapeLoadingScene;
})();
