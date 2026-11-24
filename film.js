/* Layered memory collage. Every moving element is driven by the song clock. */
(() => {
  'use strict';
  const clamp = (n, a = 0, b = 1) => Math.max(a, Math.min(b, n));
  const smooth = n => { n = clamp(n); return n * n * (3 - 2 * n); };
  const mix = (a, b, n) => a + (b - a) * n;
  const fract = n => n - Math.floor(n);
  const fill = (ctx, w, h, color) => { ctx.fillStyle = color; ctx.fillRect(0, 0, w, h); };

  class ExecutionFilm {
    constructor(data) {
      this.data = data;
      this.picture = document.getElementById('picture');
      this.canvas = document.getElementById('scenery');
      this.ctx = this.canvas.getContext('2d', { alpha: false });
      this.next = document.createElement('canvas');
      this.nextCtx = this.next.getContext('2d', { alpha: false });
      this.expressionLayer = document.createElement('canvas');
      this.expressionShadow = document.createElement('canvas');
      this.flashbackSurface = document.createElement('canvas');
      this.lyric = document.getElementById('lyric');
      this.lines = ['lyricOne', 'lyricTwo'].map(id => document.getElementById(id));
      this.reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.needsPaint = true;
      this.assetCache = new Map();
      this.art = this.loadGroup(data.art);
      this.props = this.loadGroup(data.props);
      this.portraits = this.loadGroup(data.portraits);
      this.fullPortraits = this.loadGroup({
        ...(data.seatedSprites || {}),
        ...(data.standingSprite ? { stand: data.standingSprite } : {}),
      });
      this.hdPortraits = this.loadGroup(data.hdSprites);
      this.animations = this.loadAnimations(data.animations);
      this.silhouettes = new Map();
      this.resize();
    }

    loadGroup(group) {
      return Object.fromEntries(Object.entries(group || {}).map(([key, src]) => {
        if(this.assetCache.has(src))return [key,this.assetCache.get(src)];
        const image = new Image();
        const asset = { image, ready: false, src };
        this.assetCache.set(src,asset);
        image.onload = () => { asset.ready = true; this.needsPaint = true; };
        image.onerror = () => { asset.failed=true; this.needsPaint=true; };
        image.decoding = 'async'; image.src = src;
        return [key, asset];
      }));
    }

    loadAnimations(group) {
      return Object.fromEntries(Object.entries(group || {}).map(([name, config]) => {
        const paths = Array.isArray(config.frames) ? config.frames : Array.from(
          { length: Math.max(0, Math.floor(config.frameCount || 0)) },
          (_, index) => config.src.replace('{frame}', String(index).padStart(config.digits ?? 3, '0')),
        );
        const frames=paths.map((src,index)=>({src,index,image:null,ready:false}));
        const clip={frames,fps:Math.max(.01,Number(config.fps)||24),loop:config.loop!==false,
          posterIndex:clamp(Math.floor(config.posterFrame||0),0,Math.max(0,frames.length-1))};
        this.warmAnimation(clip,0);
        return [name,clip];
      }));
    }

    warmAnimation(clip,index) {
      // Keep a small decoded window, rather than retaining hundreds of HD alpha frames.
      const keep=new Set([clip.posterIndex,0]);
      for(let i=Math.max(0,index-2);i<=Math.min(clip.frames.length-1,index+4);i++)keep.add(i);
      for(const frame of clip.frames){
        if(!keep.has(frame.index)&&frame.image){
          frame.image.onload=frame.image.onerror=null;frame.image=null;frame.ready=false;
        }
      }
      for(const i of keep){
        const frame=clip.frames[i];if(!frame||frame.image)continue;
        const image=new Image();frame.image=image;
        image.onload=()=>{if(frame.image!==image)return;frame.ready=true;this.needsPaint=true;};
        image.onerror=()=>{if(frame.image!==image)return;frame.failed=true;this.needsPaint=true;};
        image.decoding='async';image.src=frame.src;
      }
    }

    animationFrame(shot, t) {
      const animation = this.animations[shot.pose];
      if (!animation?.frames.length) return 0;
      if(this.reducedMotion)return animation.posterIndex;
      const origin=Number(shot.animationTimeStart??shot.t??0);
      if(Number.isFinite(shot.animationEndTime)&&shot.animationEndTime>origin){
        const first=clamp(Math.floor((shot.animationStart??0)*animation.fps),0,animation.frames.length-1);
        const last=clamp(shot.animationEndFrame??animation.frames.length-1,first,animation.frames.length-1);
        const duration=shot.animationEndTime-origin,elapsed=clamp(t-origin,0,duration);
        const fps=Number(shot.animationFps);
        // Hold retimed poses at the requested cadence while preserving the exact final frame.
        const sampled=Number.isFinite(fps)&&fps>0&&elapsed<duration
          ? Math.floor(elapsed*fps+1e-7)/fps : elapsed;
        const progress=sampled/duration;
        return Math.min(last,Math.floor(mix(first,last,progress)+1e-7));
      }
      const speed = Math.max(0, Number(shot.animationSpeed ?? 1) || 0);
      const start = Math.max(0, Number(shot.animationStart ?? 0) || 0);
      const elapsed = Math.max(0, t - (shot.animationTimeStart ?? shot.t ?? 0)) * speed + start;
      // The epsilon keeps exact frame boundaries stable despite floating-point song times.
      const index = Math.floor(elapsed * animation.fps + 1e-7);
      return (shot.animationLoop ?? animation.loop) === false ? Math.min(index, animation.frames.length - 1) : index % animation.frames.length;
    }

    resize() {
      const w = this.picture.clientWidth || 1242, h = this.picture.clientHeight || 556;
      const ratio = clamp(window.devicePixelRatio || 1, 1, 2);
      if (w === this.width && h === this.height && ratio === this.pixelRatio) return;
      this.width = w; this.height = h; this.pixelRatio = ratio;
      for (const surface of [this.canvas, this.next, this.flashbackSurface]) {
        surface.width = Math.round(w * ratio); surface.height = Math.round(h * ratio);
        const context = surface.getContext('2d');
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        context.imageSmoothingQuality = 'high';
      }
      this.needsPaint = true;
    }

    getScene(t) {
      let index = 0;
      while (index + 1 < this.data.scenes.length && this.data.scenes[index + 1].t <= t) index++;
      return { scene: this.data.scenes[index], index };
    }

    expressionAt(t, scene) {
      if (!scene.pose) return { pose: null, previous: null, blend: 1 };
      if (scene.followExpressions === false || (this.animations[scene.pose] && scene.followExpressions !== true)) {
        return { pose: scene.pose, previous: null, blend: 1, cueTime:scene.animationTimeStart??scene.t };
      }
      let cue = null, previous = null;
      for (const item of this.data.expressions || []) {
        if (item.t > t) break;
        previous = cue;
        cue = item;
      }
      if (!cue) return { pose: scene.pose, previous: null, blend: 1, cueTime:scene.t };
      const seconds = this.data.settings.expressionTransitionSeconds ?? .2;
      const canBlend = previous && cue.t > scene.t && !this.reducedMotion && scene.treatment !== 'silhouette'
        && !this.animations[cue.pose] && !this.animations[previous.pose]
        && !this.data.shadowSprites?.[cue.pose] && !this.data.shadowSprites?.[previous.pose];
      return {
        pose: cue.pose,
        cueTime: cue.t,
        layout: cue.t >= scene.t ? cue.layout : null,
        previous: canBlend ? previous.pose : null,
        blend: canBlend ? smooth((t - cue.t) / Math.max(.01, seconds)) : 1,
      };
    }

    updateLyrics(t, scene) {
      const cue = scene.hideLyrics ? null : this.data.lyrics.find(line => t >= line.time && t < line.end) || null;
      if (cue !== this.currentLyric) {
        const words = (cue?.text || '').split('\n');
        this.lines[0].textContent = words[0] || '';
        this.lines[1].textContent = words.slice(1).join(' ');
        this.currentLyric = cue;
      }
      this.lyric.dataset.empty = String(!cue);
      this.lyric.dataset.align = scene.subtitleAlign || 'left';
      this.lyric.style.left = this.lyric.style.right = clamp(scene.subtitleX ?? 6, 2, 16) + '%';
      this.lyric.style.bottom = clamp(scene.subtitleY ?? 8, 4, 28) + '%';
      this.lyric.style.opacity = cue ? String(this.reducedMotion ? 1 : Math.min(smooth((t - cue.time) / .17), smooth((cue.end - t) / .16))) : '0';
    }

    render(t) {
      const { scene, index } = this.getScene(t);
      const fade = this.data.settings.transitionSeconds ?? .6;
      const local = t - scene.t;
      if(index>0&&scene.transition==='window-wipe'&&local<(scene.transitionDuration??.72)&&!this.reducedMotion){
        const w=this.width,h=this.height,p=smooth(local/(scene.transitionDuration??.72));
        // The window frame moves across the backgrounds. Render the continuing walk only once.
        this.drawShot(this.ctx,{...this.data.scenes[index-1],pose:null},scene.t-1e-6);
        this.drawShot(this.nextCtx,{...scene,pose:null},t);
        const edge=mix(w*1.12,-w*.12,p),width=w*.12;
        this.ctx.save();this.ctx.beginPath();this.ctx.rect(edge,0,w-edge,h);this.ctx.clip();this.ctx.drawImage(this.next,0,0,w,h);this.ctx.restore();
        const glass=this.ctx.createLinearGradient(edge-width/2,0,edge+width/2,0);
        glass.addColorStop(0,'#0a0f1800');glass.addColorStop(.36,'#090e1cc9');glass.addColorStop(.52,'#151926f2');glass.addColorStop(.66,'#3d33486b');glass.addColorStop(1,'#0a0f1800');
        this.ctx.fillStyle=glass;this.ctx.fillRect(edge-width/2,0,width,h);
        this.portrait(this.ctx,scene,t);
      }else if(index>0&&scene.transition==='light-cut'&&local<(scene.transitionDuration??.32)&&!this.reducedMotion){
        const p=smooth(local/(scene.transitionDuration??.32)),w=this.width,h=this.height;
        this.drawShot(this.ctx,this.data.scenes[index-1],t);
        this.drawShot(this.nextCtx,scene,t);
        const edge=mix(w*1.2,-w*.2,p),slant=w*.075;
        this.ctx.save();this.ctx.beginPath();this.ctx.moveTo(edge+slant,0);this.ctx.lineTo(w,0);this.ctx.lineTo(w,h);this.ctx.lineTo(edge-slant,h);this.ctx.closePath();this.ctx.clip();
        this.ctx.drawImage(this.next,0,0,w,h);this.ctx.restore();
        this.polygon(this.ctx,[[edge/w+.075,0],[edge/w+.095,0],[edge/w-.055,1],[edge/w-.075,1]],'#f6dfbf');
      }else if (index > 0 && local < fade && scene.transition === 'fade' && !this.reducedMotion) {
        const previous = this.data.scenes[index - 1];
        // Hold the outgoing expression before the new cue, including its own layout.
        this.drawShot(this.ctx, previous, Math.max(previous.t, scene.t - 1e-6));
        this.drawShot(this.nextCtx, scene, t);
        this.ctx.save(); this.ctx.globalAlpha = smooth(local / fade);
        this.ctx.drawImage(this.next, 0, 0, this.width, this.height); this.ctx.restore();
      } else this.drawShot(this.ctx, scene, t);
      this.printTransition(this.ctx, t);
      this.updateLyrics(t, scene);
      this.needsPaint = false;
    }

    polygon(ctx, points, color) {
      ctx.beginPath();
      points.forEach(([x, y], i) => i ? ctx.lineTo(x * this.width, y * this.height) : ctx.moveTo(x * this.width, y * this.height));
      ctx.closePath(); ctx.fillStyle = color; ctx.fill();
    }

    cover(ctx, image, x, y, w, h) {
      const s = Math.max(w / image.width, h / image.height);
      const sw = w / s, sh = h / s;
      ctx.drawImage(image, (image.width - sw) / 2, (image.height - sh) / 2, sw, sh, x, y, w, h);
    }

    prop(ctx, name, x, y, height, angle = 0, opacity = 1, ghost = true) {
      const asset = this.props[name];
      if (!asset?.ready || opacity <= 0) return;
      const img = asset.image;
      const h = height * this.height, w = h * img.width / img.height;
      ctx.save(); ctx.translate(x * this.width, y * this.height); ctx.rotate(angle);
      ctx.globalAlpha = opacity; ctx.drawImage(img, -w / 2, -h / 2, w, h); ctx.restore();
    }

    framed(ctx, x, y, height, content, options = {}) {
      const frame = this.props.frame;
      if (!frame?.ready) return;
      const img = frame.image, h = height * this.height, w = h * img.width / img.height;
      const alpha = options.alpha ?? 1, fade = options.fade ?? 1;
      ctx.save(); ctx.translate(x * this.width, y * this.height); ctx.rotate(options.angle || 0);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#20121f';
      const px = -w * .5 + w * .125, py = -h * .5 + h * .16, pw = w * .73, ph = h * .57;
      ctx.fillRect(px, py, pw, ph);
      const photo = this.props[content];
      if (photo?.ready && fade > 0) {
        ctx.save(); ctx.beginPath(); ctx.rect(px, py, pw, ph); ctx.clip();
        ctx.globalAlpha = alpha * fade;
        this.cover(ctx, photo.image, px, py, pw, ph); ctx.restore();
      }
      ctx.globalAlpha = alpha; ctx.drawImage(img, -w * .5, -h * .5, w, h); ctx.restore();
    }

    stickerState(item, scene, t) {
      if (!item || item.visible === false || !item.asset) return null;
      const sceneEnd = this.data.scenes.find(next => next.t > scene.t)?.t ?? this.data.duration;
      const start = Number(item.start ?? scene.t ?? 0), end = Number(item.end ?? sceneEnd);
      // The outgoing scene can retain its last sticker state during a scene dissolve.
      const outgoingEnd = t === sceneEnd && end === sceneEnd && this.getScene(t).scene !== scene;
      if (end <= start || t < start || (t >= end && !outgoingEnd)) return null;
      const motion = item.motion || {};
      const motionStart = Number(motion.startTime ?? start);
      const duration = Math.max(.001, Number(motion.duration ?? (end - motionStart)) || .001);
      let progress = this.reducedMotion ? 0 : clamp((t - motionStart) / duration);
      if (motion.ease === 'smooth') progress = smooth(progress);
      const interpolate = (key, fallback) => {
        const from = Number(item[key] ?? fallback), to = Number(motion[key + 'To'] ?? from);
        return mix(from, to, progress);
      };
      let x = interpolate('x', 50), y = interpolate('y', 50);
      const height = interpolate('height', 25), rotation = interpolate('rotation', 0);
      let opacity = interpolate('opacity', 1);
      // Optional presets preserve the existing flowing frames and accumulating archive.
      if (motion.preset === 'faces') {
        const index = Number(motion.index) || 0, depth = Number(motion.depth) || 1;
        const clock = this.reducedMotion ? 72 : 69 + Math.max(0, t - motionStart);
        const anchor = Number(motion.anchorX ?? mix(-20, 125, fract(index / (motion.count || 4))));
        x += this.facePosition(clock, depth, index, motion.count || 4, motion.speed ?? .14) * 100 - anchor;
      } else if(motion.preset==='passing'){
        const count=Math.max(1,Number(motion.count)||6),index=Number(motion.index)||0;
        const clock=this.reducedMotion?2:Math.max(0,t-motionStart),speed=Number(motion.speed)||.14;
        const phase=fract(index/count-clock*speed*(Number(motion.depth)||1));
        x=mix(-20,125,phase);
      } else if (motion.preset === 'archive') {
        const index = Number(motion.index) || 0;
        const clock = t - motionStart + (Number(motion.offset) || 0);
        opacity *= smooth(smooth(clock / duration) * 1.8 - index * .09);
        if (!this.reducedMotion) y += Math.sin((112 + clock) * .21 + index * 1.3) * 2;
      }
      const fadeIn = Math.max(0, Number(item.fadeIn) || 0), fadeOut = Math.max(0, Number(item.fadeOut) || 0);
      if (fadeIn > 0) opacity *= smooth((t - start) / fadeIn);
      if (fadeOut > 0) opacity *= smooth((end - t) / fadeOut);
      if (height <= 0 || opacity <= 0) return null;
      let contentOpacity = clamp(Number(item.contentOpacity ?? 1));
      if (item.contentFadeOut) {
        const fade = item.contentFadeOut;
        contentOpacity *= 1 - smooth((t - Number(fade.start)) / Math.max(.001, Number(fade.duration) || .001));
      }
      return { asset: item.asset, content: item.content ?? 'faceEmpty', x: x / 100, y: y / 100,
        height: height / 100, angle: rotation * Math.PI / 180, opacity: clamp(opacity),
        contentOpacity, ghost: item.ghost !== false };
    }

    drawStickers(ctx, scene, t, layer = 'back') {
      for (const item of Array.isArray(scene.stickers) ? scene.stickers : []) {
        if ((item.layer === 'front' ? 'front' : 'back') !== layer) continue;
        const state = this.stickerState(item, scene, t);
        if (!state) continue;
        if (state.asset === 'frame') {
          this.framed(ctx, state.x, state.y, state.height, state.content,
            { angle: state.angle, alpha: state.opacity, fade: state.contentOpacity });
        } else this.prop(ctx, state.asset, state.x, state.y, state.height, state.angle, state.opacity, state.ghost);
      }
    }

    portraitAsset(shot) {
      const animation = this.animations[shot.pose];
      if (animation) {
        const index=shot._animationFrame??this.animationFrame(shot,shot.animationTimeStart??shot.t??0);
        this.warmAnimation(animation,index);
        if(animation.frames[index]?.ready)return animation.frames[index];
        return animation.frames.filter(f=>f.ready).sort((a,b)=>Math.abs(a.index-index)-Math.abs(b.index-index))[0]||animation.frames[animation.posterIndex];
      }
      // Complete figures are the default. Old face-anchored crops require an explicit portrait shot.
      if (shot.framing !== 'portrait' && shot.quality !== 'original' && this.data.settings.characterHD !== false) {
        const hd = this.hdPortraits[shot.pose];
        if (hd?.ready) return hd;
      }
      return (shot.framing === 'portrait' ? this.portraits : this.fullPortraits)[shot.pose];
    }

    silhouette(shot, mixed = null) {
      const color = shot.silhouetteColor ?? shot.color ?? '#261522';
      const key = JSON.stringify([shot.framing || 'full', shot.pose, color]);
      const image = mixed || this.portraitAsset(shot).image;
      const cached = mixed ? null : this.silhouettes.get(key);
      if (cached?.image === image) return cached.layer;
      // Reuse one tint surface for an animation instead of retaining a canvas for every frame.
      const layer = mixed ? this.expressionShadow : cached?.layer || document.createElement('canvas');
      if (layer.width !== image.width || layer.height !== image.height) {
        layer.width = image.width; layer.height = image.height;
      }
      const ctx = layer.getContext('2d');
      ctx.globalCompositeOperation = 'source-over'; ctx.clearRect(0, 0, layer.width, layer.height);
      ctx.drawImage(image, 0, 0);
      ctx.globalCompositeOperation = 'source-in'; fill(ctx, layer.width, layer.height, color);
      ctx.globalCompositeOperation = 'source-over';
      if (!mixed) this.silhouettes.set(key, { image, layer });
      return layer;
    }

    portrait(ctx, scene, t, override = {}) {
      const shot = { ...scene, ...override };
      const expression = this.expressionAt(t, shot);
      let mixed = null;
      if (expression.previous && expression.blend < 1) {
        const before = this.portraitAsset({ ...shot, pose: expression.previous });
        const after = this.portraitAsset({ ...shot, pose: expression.pose });
        if (before?.ready && after?.ready) {
          const layer = this.expressionLayer;
          const height = after.image.height;
          const beforeWidth = before.image.width * height / before.image.height;
          const width = Math.ceil(Math.max(beforeWidth, after.image.width));
          if (layer.width !== width || layer.height !== height) {
            layer.width = width; layer.height = height;
          }
          const mixCtx = layer.getContext('2d');
          mixCtx.clearRect(0, 0, layer.width, layer.height);
          mixCtx.globalCompositeOperation = 'source-over';
          mixCtx.globalAlpha = 1 - expression.blend;
          mixCtx.drawImage(before.image, (width - beforeWidth) / 2, 0, beforeWidth, height);
          // Add premultiplied layers so the shared body stays opaque during a face change.
          mixCtx.globalCompositeOperation = 'lighter';
          mixCtx.globalAlpha = expression.blend;
          mixCtx.drawImage(after.image, (width - after.image.width) / 2, 0, after.image.width, height);
          mixCtx.globalAlpha = 1; mixCtx.globalCompositeOperation = 'source-over';
          mixed = layer;
        }
      }
      if (expression.pose) this.portraitLayer(ctx, { ...shot, ...(expression.layout || {}), pose: expression.pose,
        animationTimeStart:expression.cueTime??shot.animationTimeStart??shot.t }, t, mixed);
    }

    portraitLayer(ctx, shot, t, mixed = null) {
      if (this.animations[shot.pose]) shot = { ...shot, _animationFrame: this.animationFrame(shot, t) };
      const asset = this.portraitAsset(shot);
      if (!asset?.ready) return;
      const isSilhouette = shot.treatment === 'silhouette';
      const img = isSilhouette ? this.silhouette(shot) : mixed || asset.image;
      const defaultScale = !this.animations[shot.pose] && shot.framing !== 'portrait' ? .82 : 1;
      const registration=shot.fitVisible&&this.data.animations?.[shot.pose]?.registration;
      const bounds=registration||{x:0,y:0,width:img.width,height:img.height};
      const h = this.height * (shot.scale ?? defaultScale)*img.height/bounds.height, w = h * img.width / img.height;
      const motion = shot.motion ?? this.data.settings.motion ?? 1;
      const drift = this.reducedMotion ? 0 : Math.sin(t * .6) * this.height * .002 * motion;
      // x is the sprite's horizontal centre; y is its bottom's distance above the frame bottom.
      const x = this.width * (shot.x ?? 50) / 100 - (bounds.x+bounds.width/2)/img.width*w;
      const y = this.height * (1 - (shot.y ?? 0) / 100) - (bounds.y+bounds.height)/img.height*h + drift;
      const opacity = shot.opacity ?? 1;
      ctx.save(); ctx.globalAlpha = opacity;
      if(isSilhouette && shot.rimColor){
        ctx.drawImage(this.silhouette({...shot,silhouetteColor:shot.rimColor}),x-2.5,y-1.5,w,h);
      }
      // Hard printed shadow, not an airbrushed halo.
      if (!isSilhouette && shot.printShadow !== false && !this.data.shadowSprites?.[shot.pose]) {
        ctx.drawImage(this.silhouette(shot, mixed), x + 8, y + 4, w, h);
      }
      ctx.globalAlpha = opacity; ctx.drawImage(img, x, y, w, h); ctx.restore();
    }

    backgroundRect(scene, t, image) {
      const motion = scene.backgroundMotion;
      let zoom = Math.max(1, Number(scene.camera) || 1), offsetX = 0, offsetY = 0, progress = 0;
      if (motion && typeof motion === 'object') {
        const start = Number(motion.startTime ?? scene.t ?? 0);
        const end = this.data.scenes.find(item => item.t > (scene.t ?? 0))?.t ?? this.data.duration;
        const duration = Math.max(.001, Number(motion.duration ?? (end - start)) || .001);
        progress = this.reducedMotion ? 0 : clamp((t - start) / duration);
        if (motion.ease === 'smooth') progress = smooth(progress);
        const fromZoom = Math.max(1, Number(motion.zoom ?? scene.camera) || 1);
        zoom = mix(fromZoom, Math.max(1, Number(motion.zoomTo ?? fromZoom) || 1), progress);
        offsetX = this.width * mix(Number(motion.fromX) || 0, Number(motion.toX ?? motion.fromX) || 0, progress) / 100;
        offsetY = -this.height * mix(Number(motion.fromY) || 0, Number(motion.toY ?? motion.fromY) || 0, progress) / 100;
      } else if (scene.stage === 'rain' || scene.stage === 'departure') {
        offsetX = this.reducedMotion ? 0 : -clamp(t / 31) * this.width * (scene.pan ?? .018);
      }
      const scale = Math.max(this.width / image.width, this.height / image.height) * zoom;
      const width = image.width * scale, height = image.height * scale;
      if (motion?.clamp !== false) {
        const extraX = Math.max(0, (width - this.width) / 2), extraY = Math.max(0, (height - this.height) / 2);
        offsetX = clamp(offsetX, -extraX, extraX); offsetY = clamp(offsetY, -extraY, extraY);
      }
      return { x: (this.width - width) / 2 + offsetX, y: (this.height - height) / 2 + offsetY,
        width, height, zoom, progress };
    }

    background(ctx, scene, t, fallback = null) {
      const asset = this.art[scene.background ?? fallback];
      if (!asset?.ready) return false;
      const rect = this.backgroundRect(scene, t, asset.image);
      ctx.drawImage(asset.image, rect.x, rect.y, rect.width, rect.height);
      if (scene.backgroundTint) fill(ctx, this.width, this.height, scene.backgroundTint);
      return true;
    }

    petalField(ctx, scene, t) {
      const field=scene.petals;
      if(!field)return;
      const names=this.data.settings.petalAssets||[],count=field.count??7;
      if(!names.length)return;
      const clock=this.reducedMotion?4:Math.max(0,t-(field.startTime??scene.t));
      const presence=Math.min(smooth((t-(field.startTime??scene.t))/.8),smooth(((field.end??this.data.duration)-t)/1.5));
      for(let i=0;i<count;i++){
        const seed=fract((i+1)*.6180339),life=12+seed*8;
        const p=fract(clock/life+fract(i*.38197));
        const x=.12+fract(i*.7231)*.78+(p-.5)*(field.drift??-.12)+Math.sin(clock*.34+i*2.17)*.022;
        const y=-.08+p*1.16;
        const alpha=presence*Math.min(smooth(p/.12),smooth((1-p)/.18))*(.46+seed*.3);
        const angle=(i*1.7+clock*(i%2?-.18:.13));
        this.prop(ctx,names[i%names.length],x,y,.021+seed*.024,angle,alpha,false);
      }
    }

    rainField(ctx,scene,t,plane='all') {
      if(scene.weather!=='rain')return;
      const clock=this.reducedMotion?3:t,strength=clamp(scene.rainIntensity??1,0,2);
      for(const near of [false,true]){
        if(plane!=='all'&&plane!==(near?'near':'far'))continue;
        const count=near?22:64;
        ctx.save();ctx.lineCap='butt';ctx.strokeStyle=near?'#d0cbd8':'#c0bacd';
        for(let i=0;i<count;i++){
          const seed=fract((i+1+(near?91:0))*.6180339887),depth=fract(i*.381971+.23);
          const phase=fract(clock*(.9+seed*.65)+i*.71213);
          const length=(near?10:5)+depth*(near?12:9),x=fract(seed-phase*.045)*this.width;
          const y=phase*(this.height+length*2)-length;
          ctx.lineWidth=near ? .65+depth*.3 : .4+depth*.25;
          ctx.globalAlpha=strength*(near ? .12+depth*.12 : .055+depth*.1);
          ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-length*.16,y+length);ctx.stroke();
        }
        ctx.restore();
      }
    }

    city(ctx, scene, t) {
      this.background(ctx, scene, t, 'city');
      this.polygon(ctx, [[.48, 0], [1, 0], [1, 1], [.74, 1]], '#30132270');
      this.drawStickers(ctx, scene, t, 'back');
      this.rainField(ctx,scene,t,'far');
      this.portrait(ctx, scene, t);
      this.rainField(ctx,scene,t,'near');
      if (scene.stage === 'departure') {
        const p = smooth((t - 24.5) / 6.5);
        this.polygon(ctx, [[.48, 0], [.54, 0], [.33, .68], [.25, .68]], '#f9dfb0' + Math.round(mix(80, 15, p)).toString(16).padStart(2, '0'));
      }
      this.drawStickers(ctx, scene, t, 'front');
    }

    facePosition(t, depth, i, count = 4, speed = .14) {
      // A quicker, constant conveyor; each frame keeps the same pace through the window wipe.
      const distance = Math.max(0, t - 69) * Math.max(0, Number(speed) || 0);
      const phase = fract(i / count - distance * depth);
      return mix(-.2, 1.25, phase);
    }

    collage(ctx, scene, t) {
      this.background(ctx, scene, t);
      this.drawStickers(ctx, scene, t, 'back');
      this.petalField(ctx,scene,t);
      this.rainField(ctx,scene,t,'far');
      this.portrait(ctx, scene, t);
      this.rainField(ctx,scene,t,'near');
      this.drawStickers(ctx, scene, t, 'front');
    }

    drawShot(ctx, scene, t, nested = false) {
      if(scene.stage==='black'){fill(ctx,this.width,this.height,'#000');return;}
      ctx.save(); fill(ctx, this.width, this.height, '#17131b');
      if (scene.flashbacks?.length && !nested) this.flashback(ctx, scene, t);
      else if (scene.stage === 'rain' || scene.stage === 'departure') this.city(ctx, scene, t);
      else this.collage(ctx, scene, t);
      // A readability wash is composition, not a generated illustration.
      const shade = ctx.createLinearGradient(0, this.height * .7, 0, this.height);
      shade.addColorStop(0, '#17131b00'); shade.addColorStop(1, '#17131b70');
      fill(ctx, this.width, this.height, shade);
      ctx.restore();
    }

    flashbackAt(scene, t) {
      const track = this.reducedMotion ? scene.flashbacks.filter((_,i) => i % 3 === 0) : scene.flashbacks;
      let index=0;
      while (index+1 < track.length && track[index+1].t <= t) index++;
      const cue=track[index], end=track[index+1]?.t ?? this.data.scenes.find(s=>s.t>scene.t)?.t ?? this.data.duration;
      return { cue, end };
    }

    flashbackLayerAllowed(layer) {
      return ![layer.asset,layer.content].some(key=>/^assets\/character\//.test(this.data.props[key]||''));
    }

    flashbackPlate(ctx, scene, cue, end, t) {
      fill(ctx,this.width,this.height,'#17131b');
      const source=this.data.scenes.find(s=>s.id===cue.sourceScene && !s.flashbacks);
      if (source) {
        const sourceTime=(cue.sourceTime??source.t) + (this.reducedMotion?0:Math.max(0,t-cue.t)*(cue.sourceSpeed??.15));
        const overrides=cue.sceneOverrides||{};
        this.drawShot(ctx,{...source,...overrides,pose:null,followExpressions:false,
          stickers:(overrides.stickers||source.stickers||[]).filter(layer=>this.flashbackLayerAllowed(layer))},sourceTime,true);
      } else {
        const shot={...scene,...cue,flashbacks:null,pose:null,stickers:[],t:cue.t};
        this.background(ctx,shot,t);
        for (const layer of cue.layers||[]) {
          if(!this.flashbackLayerAllowed(layer))continue;
          const state=this.stickerState({...layer,start:cue.t,end},scene,t);
          if (!state) continue;
          if (state.asset==='frame') this.framed(ctx,state.x,state.y,state.height,state.content,{angle:state.angle,alpha:state.opacity,fade:state.contentOpacity});
          else this.prop(ctx,state.asset,state.x,state.y,state.height,state.angle,state.opacity,false);
        }
        this.rainField(ctx,shot,t);
      }
    }

    flashbackContact(ctx,cue,t,instant=false) {
      const cells=cue.cells||[],columns=3,rows=Math.ceil(cells.length/columns);
      if(!rows)return;
      const marginX=this.width*.09,marginY=this.height*.1,gap=Math.max(9,this.height*.025);
      const cw=(this.width-marginX*2-gap*(columns-1))/columns,ch=(this.height-marginY*2-gap*(rows-1))/rows;
      for(const[i,name]of cells.entries()){
        const asset=this.props[name];if(!asset?.ready||!this.flashbackLayerAllowed({asset:name}))continue;
        const p=instant||this.reducedMotion?1:smooth((t-cue.t-i*.025)/.24);
        const x=marginX+(i%columns)*(cw+gap),y=marginY+Math.floor(i/columns)*(ch+gap)+(1-p)*ch*.12;
        ctx.save();ctx.globalAlpha=p;ctx.fillStyle=i%2?'#ead9c2':'#c68b9a';ctx.fillRect(x,y,cw,ch);
        ctx.strokeStyle='#36232e';ctx.lineWidth=2;ctx.strokeRect(x+3,y+3,cw-6,ch-6);
        const h=Math.min(ch*.8,cw*.8*asset.image.height/asset.image.width);
        this.prop(ctx,name,(x+cw/2)/this.width,(y+ch/2)/this.height,h/this.height,0,p,false);ctx.restore();
      }
    }

    flashback(ctx, scene, t) {
      const {cue,end}=this.flashbackAt(scene,t),w=this.width,h=this.height,r=this.pixelRatio;
      const surface=this.flashbackSurface,plate=surface.getContext('2d');
      const hard=scene.flashbackStyle==='hard';
      this.flashbackPlate(plate,scene,cue,end,hard?cue.t:t);
      if(hard){
        // Hold each printed composition completely still, then replace it in a single frame.
        if(cue.layout==='strips'){
          for(let i=0;i<4;i++){
            const sh=h/4,offset=(i%2?-1:1)*w*.014;
            ctx.drawImage(surface,0,i*sh*r,w*r,sh*r,offset,i*sh,w,sh+.5);
          }
        }else ctx.drawImage(surface,0,0,w,h);
        if(cue.layout==='contact')this.flashbackContact(ctx,cue,cue.t,true);
        return;
      }
      const local=t-cue.t,enter=this.reducedMotion?1:smooth(local/Math.min(.28,(end-cue.t)*.45));
      ctx.save();
      if(cue.layout==='contact'){
        ctx.drawImage(surface,0,0,w,h);this.flashbackContact(ctx,cue,t);
      }else if(cue.layout==='aperture'&&!this.reducedMotion){
        const width=w*(.05+.95*enter);ctx.beginPath();ctx.rect((w-width)/2,0,width,h);ctx.clip();ctx.drawImage(surface,0,0,w,h);
      }else if(cue.layout==='strips'&&!this.reducedMotion){
        const count=6;for(let i=0;i<count;i++){
          const sh=h/count,offset=(i%2?-1:1)*(1-enter)*w*.045;
          ctx.drawImage(surface,0,i*sh*r,w*r,sh*r,offset,i*sh,w,sh+.5);
        }
      }else if(cue.layout==='split'&&!this.reducedMotion){
        for(let i=0;i<2;i++)ctx.drawImage(surface,i*w*.5*r,0,w*.5*r,h*r,i*w*.5,(i?-1:1)*(1-enter)*h*.065,w*.5,h);
      }else ctx.drawImage(surface,0,0,w,h);
      ctx.restore();
      const length=cue.splice??0;
      const matte=this.props.printShutter;
      if (!this.reducedMotion && length>0 && local<length && matte?.ready) {
        const p=smooth(local/length);ctx.save();ctx.globalAlpha=.7*(1-p);ctx.translate(this.width*p*.12,0);
        this.cover(ctx,matte.image,0,0,this.width,this.height);ctx.restore();
      }
    }

    printTransition(ctx, t) {
      for (const item of this.data.settings.printTransitions || []) {
        const start = Number(item.start) || 0, duration = Math.max(.01, Number(item.duration) || 1);
        if (t < start || t > start + duration) continue;
        const asset = this.props[item.asset || 'printShutter'];
        if (!asset?.ready) continue;
        const p = clamp((t - start) / duration), closing = item.kind === 'close';
        const amount = closing ? smooth(p) : 1 - smooth(p);
        const w = this.width, h = this.height;
        const slip = this.reducedMotion ? 0 : (Math.floor(p * 7) % 2 ? 1 : -1) * w * .009 * amount;
        ctx.save(); ctx.globalAlpha = amount * (item.opacity ?? 1);
        ctx.translate(slip, 0); this.cover(ctx, asset.image, 0, 0, w, h);
        ctx.translate(w - slip * 2, h); ctx.rotate(Math.PI);
        ctx.globalAlpha *= .76; this.cover(ctx, asset.image, 0, 0, w, h); ctx.restore();
        const black = closing ? smooth((p - .68) / .32) : 1 - smooth(p / .35);
        if (black > 0) fill(ctx, w, h, '#17131b' + Math.round(black * 255).toString(16).padStart(2, '0'));
      }
    }
  }
  window.ExecutionFilm = ExecutionFilm;
})();
