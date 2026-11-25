/* The deck and picture share the song clock; edit the performance in timeline.js. */
(() => {
  'use strict';

  const $ = id => document.getElementById(id);
  const data = window.TIMELINE;
  const audio = $('audio');
  const game = $('game');
  const viewport = $('viewport');
  const message = $('message');
  if (!data?.scenes?.length || !data?.lyrics?.length) {
    message.hidden = false;
    message.textContent = 'Timeline unavailable. Check timeline.js.';
    return;
  }

  if (data.music && audio.getAttribute('src') !== data.music) audio.src = data.music;
  const cache = window.AUDIO_ANALYSIS?.music === data.music ? window.AUDIO_ANALYSIS : null;
  const signal = new window.AudioSignal(audio, cache);
  new window.ToneControls(signal,data.settings.eq);
  new window.FaderDetents(signal);
  const automation = new window.TapeSignalAutomation(data.settings.signalAutomation);
  const film = new window.ExecutionFilm(data);
  const screenPower = new window.CRTPower($('picture'),$('scenery'));
  const display = new window.AnalogueDisplay($('signalNoise'), $('picture'));
  const meters = new window.StereoVUMeter($('meterL'), $('meterR'));
  const overview = $('overview');
  const scope = $('scope');
  const scrub = $('seek');
  const start = $('play');
  const phaseScope = $('phaseScope');
  const spectrum = $('spectrum');
  const cassetteConfig = { ...data.cassette, duration: data.duration };
  const tape = new window.CharacterCassette($('cassetteMount'), 'deck', cassetteConfig);
  new window.CharacterCassette($('handCassette'), 'selected', cassetteConfig);
  const loadingScene = new window.TapeLoadingScene({ root: $('opening'), game, target: $('cassetteMount'),
    config: data.settings.intro, unlock: () => signal.unlock(), sound: kind => signal.mechanical(kind) });
  loadingScene.onDeckState=()=>updateState();

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const pad = value => String(value).padStart(2, '0');
  const format = t => `${pad(Math.floor(t / 60))}:${pad(Math.floor(t % 60))}`;
  let duration = data.duration;
  let time = 0;
  let rate = 0;
  let command = 0;
  let entered = false;
  let completed = false;
  let manuallyStopped = false;
  let paintedTime = -1;
  let waveformTime = -1;
  let lastFrame = 0;
  let noiseClock = 0;
  let messageTimer;

  const setVolume = value => {
    signal.setVolume(value / 100);
    $('volume').value = value;
    $('volumeLabel').value = value;
  };
  setVolume(Math.round(clamp(data.settings.volume ?? .75, 0, 1) * 100));
  $('lyric').style.setProperty('--lyric-scale',data.settings.lyricFontScale??1);
  function updateRestoration() {
    const values=automation.read(time);
    for(const name of ['tracking','restoration']){
      const value=Math.round(values[name]*100),input=$(name+'Fx');
      if(Number(input.value)!==value)input.value=String(value);
      $(name+'Label').value=value+'%';
      input.setAttribute('aria-valuetext',`${value}% ${values.automatic?'automatic':'manual'}`);
    }
    $('signalAuto').textContent=values.automatic?'AUTO':'HOLD';
    $('signalAuto').setAttribute('aria-pressed',String(values.automatic));
    const standby=manuallyStopped||completed;
    $('trackingState').textContent=standby?'STANDBY':values.tracking>.94?'SIGNAL LOCK':values.tracking>.25?'TRACKING':'SIGNAL LOST';
    signal.setRestoration(values.restoration);
    const blank=standby||film.getScene(time).scene.stage==='black';
    display.render(time,blank?1:values.tracking,noiseClock);
    $('picture').dataset.transport=manuallyStopped?'stopped':completed?'ended':'source';
    $('picture').dataset.screen=standby?'standby':'source';
  }
  updateRestoration();

  function notify(text) {
    clearTimeout(messageTimer);
    message.textContent = text;
    message.hidden = false;
    messageTimer = setTimeout(() => { message.hidden = true; }, 5000);
  }

  function showFilm() {
    entered = true;
    $('opening').hidden = true;
  }

  function updateState() {
    const playing = rate === 1;
    const state = playing ? 'playing' : rate < 0 ? 'rewinding' : rate > 1 ? 'forwarding' : entered ? 'paused' : 'idle';
    game.classList.remove('idle', 'paused', 'playing', 'rewinding', 'forwarding');
    game.classList.add(state);
    const labels = { playing: 'PLAYING', rewinding: 'REWIND', forwarding: 'FAST FORWARD', paused: 'PAUSED', idle: 'READY' };
    $('deckState').textContent = manuallyStopped ? 'STOPPED' : completed ? (loadingScene.ejected?'TAPE EJECTED':'END OF TAPE') : labels[state];
    $('playIcon').setAttribute('d', playing ? 'M8 3h6v18H8zm11 0h6v18h-6z' : 'M9 2 26 12 9 22z');
    $('playLabel').textContent = playing ? 'PAUSE' : 'PLAY';
    start.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    start.setAttribute('aria-pressed', String(playing));
    $('rew').classList.toggle('selected', rate < 0);
    $('forward').classList.toggle('selected', rate > 1);
    $('stop').classList.toggle('selected',completed||manuallyStopped);
    $('stop').setAttribute('aria-pressed',String(completed||manuallyStopped));
  }

  function syncAudio() {
    if (Number.isFinite(audio.duration)) audio.currentTime = clamp(time, 0, duration);
  }

  function pauseAudio() {
    audio.pause();
    signal.pauseOutput();
  }

  function seek(value, reveal = true) {
    if (!loadingScene.loaded) return;
    screenPower.cancel();
    loadingScene.restoreDeck();
    const stateChanged = completed || manuallyStopped || (reveal && !entered);
    manuallyStopped = false;
    completed = false;
    if (reveal) showFilm();
    time = clamp(Number(value) || 0, 0, duration);
    noiseClock = time;
    signal.setTransport(rate===1?'play':rate<0?'rew':rate>1?'forward':'pause');
    automation.follow(time);
    updateRestoration();
    syncAudio();
    paintedTime = waveformTime = -1;
    if (stateChanged) updateState();
  }

  async function play() {
    if(loadingScene.loading)return;
    const loadedBeforePress=loadingScene.loaded;
    if(loadedBeforePress)signal.mechanical(rate===1?'release':'key');
    if (!loadingScene.loaded && !(await loadingScene.insert())) return;
    if(!loadedBeforePress)signal.mechanical('key');
    if(loadingScene.ejected||loadingScene.ejecting){
      const reloading=++command;
      if(!(await loadingScene.reload())||reloading!==command)return;
    }
    if (rate === 1) {
      command++;
      rate = 0;
      pauseAudio();
      if (!audio.seeking) time = clamp(audio.currentTime, 0, duration);
      updateState();
      return;
    }
    showFilm();
    const operation = ++command;
    screenPower.cancel();
    manuallyStopped = false;
    paintedTime = -1;
    completed = false;
    if (time >= duration - .03) {time = noiseClock = 0;automation.follow(0);}
    updateRestoration();
    syncAudio();
    rate = 1;
    updateState();
    try {
      await signal.unlock();
      if (operation !== command || rate !== 1) return;
      signal.setTransport('play');
      await audio.play();
      if (operation !== command && rate !== 1) pauseAudio();
    } catch {
      if (operation !== command) return;
      rate = 0;
      pauseAudio();
      updateState();
      notify(audio.error ? 'Audio unavailable. Check assets/bgm.mp3.' : 'Press PLAY to continue.');
    }
  }

  function stop() {
    if (!loadingScene.loaded) return;
    signal.mechanical('stop');
    if(completed){pauseAudio();signal.setTransport('stop');film.needsPaint=true;updateRestoration();updateState();return;}
    const collapse=!manuallyStopped;
    command++;
    rate = 0;
    pauseAudio();
    seek(0, false);
    if(collapse)screenPower.shutdown();
    manuallyStopped = true;
    signal.setTransport('stop');
    paintedTime = -1;
    updateRestoration();
    updateState();
  }

  function scan(speed) {
    if (!loadingScene.loaded) return;
    screenPower.cancel();
    loadingScene.restoreDeck();
    signal.mechanical('key');
    showFilm();
    command++;
    pauseAudio();
    completed = false;
    manuallyStopped = false;
    paintedTime = -1;
    rate = rate === speed ? 0 : speed;
    signal.setTransport(rate<0?'rew':rate>1?'forward':'pause');
    signal.unlock();
    updateState();
  }

  function finish() {
    if(completed)return;
    screenPower.shutdown();
    command++;
    rate = 0;
    time = duration;
    pauseAudio();
    completed = true;
    manuallyStopped = false;
    paintedTime = -1;
    signal.setTransport('stop');
    automation.follow(time);
    updateRestoration();
    updateState();
    signal.mechanical('stop');
    loadingScene.eject();
  }

  function resize() {
    loadingScene.resize(viewport.clientWidth,viewport.clientHeight);
    film.resize();
    display.resize();
  }

  function cinema() {
    signal.mechanical('switch');
    game.classList.toggle('cinema');
    resize();
  }

  function fullscreen() {
    signal.mechanical('switch');
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    else viewport.requestFullscreen?.().catch(() => notify("Use your browser's fullscreen shortcut."));
  }

  function showTime() {
    const text = format(time);
    $('time').textContent = text;
    $('counter').textContent = text;
    $('filmTime').textContent = `${text}:${pad(Math.floor(time % 1 * 25))}`;
    scrub.value = String(time);
    scrub.setAttribute('aria-valuetext', `${text} / ${format(duration)}`);
    const fraction = time / duration;
    $('playhead').style.left = `calc(${fraction * 100}% - ${fraction * 2}px)`;
    tape.update(fraction);
  }

  function showSignal(values, delta, audible) {
    meters.update(values.rms, delta);
    signal.drawScope(scope, values);
    signal.drawPhase(phaseScope, values);
    signal.drawSpectrum(spectrum,audible);
    $('signalLamp').classList.toggle('lit', Math.max(...values.rms) > .005);
  }

  function frame(stamp) {
    const delta = lastFrame ? Math.min((stamp - lastFrame) / 1000, .12) : 1 / 60;
    lastFrame = stamp;
    const audible = rate === 1 && !audio.paused && !audio.seeking && audio.readyState >= 2;
    if (audible) time = clamp(audio.currentTime, 0, duration);
    if(rate!==0||completed||!entered)noiseClock+=delta;
    if (rate !== 0 && rate !== 1) {
      time = clamp(time + delta * rate, 0, duration);
      if (time <= 0 || time >= duration) {
        if(time>=duration)finish();
        else {rate=0;signal.setTransport('stop');syncAudio();updateState();}
      }
    }
    if (time !== paintedTime || film.needsPaint) {
      if(manuallyStopped||completed)film.renderStopped();else film.render(time);
      showTime();
      paintedTime = time;
    }
    updateRestoration();
    showSignal(signal.read(time, audible), delta, audible);
    if (waveformTime < 0 || Math.abs(time - waveformTime) > .07) {
      signal.drawOverview(overview, time, duration);
      waveformTime = time;
    }
    if (rate === 1 && time >= duration - .015) finish();
    requestAnimationFrame(frame);
  }

  function updateDuration() {
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;
    duration = audio.duration;
    scrub.max = String(duration);
    $('duration').textContent = '/ ' + format(duration);
    $('endTime').textContent = format(duration);
    waveformTime = -1;
    if (time > 0) syncAudio();
  }

  function toggleMute() {
    signal.mechanical('switch');
    signal.setMuted(!signal.muted);
    const mute = $('mute');
    mute.classList.toggle('muted', signal.muted);
    mute.setAttribute('aria-label', signal.muted ? 'Unmute' : 'Mute');
    mute.setAttribute('aria-pressed', String(signal.muted));
  }

  $('enter').onclick = play;
  start.onclick = play;
  $('stop').onclick = stop;
  $('rew').onclick = () => scan(-3);
  $('forward').onclick = () => scan(2.5);
  scrub.oninput = event => seek(event.target.value);
  $('volume').oninput = event => setVolume(Number(event.target.value));
  for(const name of ['tracking','restoration'])$(name+'Fx').oninput=event=>{
    automation.hold(name,Number(event.target.value)/100);updateRestoration();
  };
  $('signalAuto').onclick=()=>{signal.mechanical('switch');automation.toggle(time);updateRestoration();};
  $('mute').onclick = toggleMute;
  $('cinema').onclick = cinema;
  $('exitCinema').onclick = cinema;
  $('fullscreen').onclick = fullscreen;

  audio.addEventListener('loadedmetadata', updateDuration);
  audio.addEventListener('ended', finish);
  audio.addEventListener('error', () => {
    command++;
    rate = 0;
    signal.pauseOutput();
    updateState();
    notify('Audio unavailable. Check assets/bgm.mp3.');
  });
  audio.addEventListener('waveformready', () => { waveformTime = -1; });
  if (audio.readyState >= 1) updateDuration();

  document.addEventListener('keydown', event => {
    if (event.ctrlKey || event.metaKey || event.altKey || event.target instanceof HTMLInputElement) return;
    const key = event.key.toLowerCase();
    if (!loadingScene.loaded) {
      if (key === ' ' && !(event.target instanceof HTMLButtonElement)) { event.preventDefault(); play(); }
      return;
    }
    if (key === ' ' && !(event.target instanceof HTMLButtonElement)) { event.preventDefault(); play(); }
    else if (key === 'arrowleft') { event.preventDefault(); seek(time - 3); }
    else if (key === 'arrowright') { event.preventDefault(); seek(time + 3); }
    else if (key === 'j') scan(-3);
    else if (key === 'l') scan(2.5);
    else if (key === 'm') toggleMute();
    else if (key === 'c') cinema();
    else if (key === 'f') fullscreen();
    else if (key === 'escape' && game.classList.contains('cinema') && !document.fullscreenElement) cinema();
  });
  window.addEventListener('resize', resize);
  document.addEventListener('fullscreenchange', resize);
  resize();
  updateState();
  requestAnimationFrame(frame);
})();
