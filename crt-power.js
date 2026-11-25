(function(){
  'use strict';
  class CRTPower {
    constructor(picture,source){
      this.picture=picture;this.source=source;this.token=0;
      const overlay=document.createElement('div');overlay.id='crtShutdown';overlay.className='crt-shutdown';overlay.hidden=true;overlay.dataset.phase='idle';overlay.setAttribute('aria-hidden','true');
      overlay.innerHTML='<canvas class="crt-shutdown-image"></canvas><i class="crt-shutdown-horizontal"></i><i class="crt-shutdown-vertical"></i><i class="crt-shutdown-point"></i>';
      picture.append(overlay);this.overlay=overlay;this.capture=overlay.querySelector('canvas');
    }
    cancel(){clearTimeout(this.timer);this.token++;this.overlay.hidden=true;this.overlay.dataset.phase='idle';}
    shutdown(){
      this.cancel();if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
      this.capture.width=this.source.width;this.capture.height=this.source.height;
      this.capture.getContext('2d').drawImage(this.source,0,0);
      const token=this.token;this.overlay.hidden=false;void this.overlay.offsetWidth;this.overlay.dataset.phase='collapsing';
      this.timer=setTimeout(()=>{if(token===this.token){this.overlay.hidden=true;this.overlay.dataset.phase='idle';}},520);
    }
  }
  window.CRTPower=CRTPower;
})();
