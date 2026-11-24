/* Three physical tone controls; drag, scroll or use the native range keyboard controls. */
(() => {
  'use strict';
  class ToneControls {
    constructor(signal,defaults={}){
      this.signal=signal;this.inputs={};
      for(const band of ['hi','mid','lo']){
        const name=band[0].toUpperCase()+band.slice(1),input=document.getElementById('eq'+name);
        const dial=document.getElementById('dial'+name),label=document.getElementById('eq'+name+'Label');
        this.inputs[band]=input;
        const update=value=>{
          const db=Math.max(-12,Math.min(12,Math.round((Number(value)||0)*2)/2));
          input.value=String(db);signal.setTone(band,db);
          dial.style.setProperty('--turn',(db/12*135)+'deg');
          label.value=(db>0?'+':'')+db.toFixed(1)+' dB';
          input.setAttribute('aria-valuetext',label.value);
          return db;
        };
        update(defaults[band]??0);
        input.oninput=()=>update(input.value);
        let drag=null;
        input.addEventListener('pointerdown',event=>{
          if(event.button!==undefined&&event.button!==0)return;
          event.preventDefault();input.focus();input.setPointerCapture?.(event.pointerId);
          drag={id:event.pointerId,x:event.clientX,y:event.clientY,value:Number(input.value)};
          signal.mechanical('fader');
        });
        input.addEventListener('pointermove',event=>{
          if(!drag||event.pointerId!==drag.id)return;
          const scale=event.shiftKey ? .035 : .13;
          update(drag.value+(drag.y-event.clientY+event.clientX-drag.x)*scale);
        });
        const release=event=>{if(drag&&event.pointerId===drag.id)drag=null;};
        input.addEventListener('pointerup',release);input.addEventListener('pointercancel',release);
        input.addEventListener('lostpointercapture',()=>{drag=null;});
        input.addEventListener('wheel',event=>{
          event.preventDefault();update(Number(input.value)+(event.deltaY<0 ? .5 : -.5));
        },{passive:false});
        input.addEventListener('dblclick',()=>{update(0);signal.mechanical('switch');});
        input.addEventListener('keydown',event=>{if(event.key==='0'){event.preventDefault();update(0);}});
      }
    }
  }
  window.ToneControls=ToneControls;
  class FaderDetents {
    constructor(signal){
      for(const id of ['volume','trackingFx','restorationFx']){
        const input=document.getElementById(id);let dragging=false,last=Number(input.value),travel=0;
        input.addEventListener('pointerdown',event=>{
          if(event.button!==undefined&&event.button!==0)return;
          dragging=true;last=Number(input.value);travel=0;
        });
        const release=()=>{dragging=false;travel=0;};
        input.addEventListener('pointerup',release);input.addEventListener('pointercancel',release);
        input.addEventListener('lostpointercapture',release);document.addEventListener('pointerup',release);
        input.addEventListener('keydown',()=>{last=Number(input.value);});
        input.addEventListener('input',()=>{
          const value=Number(input.value),distance=Math.abs(value-last);last=value;
          if(distance<.001)return;
          if(!dragging){signal.faderStep(1);return;}
          travel+=distance;const steps=Math.floor(travel/3);travel-=steps*3;
          if(steps)signal.faderStep(steps);
        });
      }
    }
  }
  window.FaderDetents=FaderDetents;
})();
