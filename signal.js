/* The two restoration channels share the music clock, including seeks and replay. */
(() => {
  'use strict';
  const clamp = n => Math.max(0, Math.min(1, Number(n) || 0));
  const smooth = n => (n=clamp(n), n*n*(3-2*n));
  class TapeSignalAutomation {
    constructor(config = {}) {
      this.config=config; this.enabled=true; this.lastTime=-1;
      this.values={tracking:1, restoration:1}; this.manual={...this.values};
    }
    envelope(points,t) {
      if(!points?.length)return {tracking:1,restoration:1};
      let i=0;while(i+1<points.length&&points[i+1].t<=t)i++;
      const a=points[i],b=points[i+1]||a;
      const p=b.t>a.t?smooth((t-a.t)/(b.t-a.t)):0;
      return {tracking:clamp(a.tracking+(b.tracking-a.tracking)*p),restoration:clamp(a.restoration+(b.restoration-a.restoration)*p)};
    }
    recorded(t) {
      const intro=this.config.intro||[],outro=this.config.outro||[];
      if(intro.length&&t<=intro.at(-1).t)return this.envelope(intro,t);
      if(outro.length&&t>=outro[0].t)return this.envelope(outro,t);
      return this.config.sustain||this.envelope(intro,t);
    }
    read(t) {
      const cues=this.config.rearmTimes||[this.config.outro?.[0]?.t??Infinity];
      if(cues.some(start=>t>=start&&this.lastTime<start))this.enabled=true;
      this.lastTime=t;
      this.values=this.enabled?this.recorded(t):{...this.manual};
      return {...this.values,automatic:this.enabled};
    }
    hold(channel,value) {
      this.manual={...this.values,[channel]:clamp(value)};
      this.enabled=false;this.values={...this.manual};
    }
    follow(t) {this.enabled=true;this.lastTime=t;return this.read(t);}
    toggle(t) {if(this.enabled){this.manual={...this.values};this.enabled=false;return this.read(t);}return this.follow(t);}
  }

  class AnalogueDisplay {
    constructor(canvas,picture) {
      this.canvas=canvas;this.picture=picture;this.ctx=canvas.getContext('2d');
      this.tick=-1;this.value=-1;this.needsPaint=true;
      this.reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.resize();
    }
    resize() {
      const w=480,h=Math.max(96,Math.round(w*(this.picture.clientHeight||500)/(this.picture.clientWidth||1180)));
      if(this.canvas.width!==w||this.canvas.height!==h){this.canvas.width=w;this.canvas.height=h;this.pixels=this.ctx.createImageData(w,h);this.needsPaint=true;}
    }
    render(time,tracking,visualTime=time) {
      this.resize();const wet=1-clamp(tracking),tick=this.reducedMotion?0:Math.floor(visualTime*20);
      if(tick===this.tick&&Math.abs(wet-this.value)<.001&&!this.needsPaint)return;
      this.tick=tick;this.value=wet;this.needsPaint=false;
      this.picture.style.setProperty('--signal-loss',String(wet));
      this.picture.dataset.signal=wet>.7?'lost':wet>.2?'tracking':'locked';
      const {ctx,canvas,pixels}=this;ctx.clearRect(0,0,canvas.width,canvas.height);
      if(wet<.003)return;
      let seed=(Math.imul(tick+7,747796405)^0x51af38d1)>>>0;
      const random=()=>{seed^=seed<<13;seed^=seed>>>17;seed^=seed<<5;return(seed>>>0)/4294967296;};
      const d=pixels.data,opacity=Math.pow(wet,1.65);
      for(let i=0;i<d.length;i+=4){const n=random(),luma=24+Math.floor(n*n*205);d[i]=luma;d[i+1]=luma+2;d[i+2]=Math.min(255,luma+6);d[i+3]=Math.round(opacity*255);}
      ctx.putImageData(pixels,0,0);
      if(!this.reducedMotion){
        const y=((visualTime*.19)%1)*canvas.height;
        ctx.fillStyle=`rgba(210,215,218,${wet*.13})`;ctx.fillRect(0,y,canvas.width,Math.max(1,wet*9));
        ctx.fillStyle=`rgba(7,9,15,${wet*.22})`;ctx.fillRect(0,(y+11)%canvas.height,canvas.width,Math.max(1,wet*4));
      }
    }
  }
  window.TapeSignalAutomation=TapeSignalAutomation;
  window.AnalogueDisplay=AnalogueDisplay;
})();
