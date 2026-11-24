/* 刻度、数字、红区和指针共用同一个极坐标。 */
(() => {
  'use strict';

  const center = { x: 70, y: 92 };
  const scale = [
    { db: -20, angle: -48 }, { db: -10, angle: -28 },
    { db: -5, angle: -5 }, { db: -3, angle: 8 },
    { db: 0, angle: 24 }, { db: 3, angle: 42 },
  ];
  const clamp = (value, low, high) => Math.max(low, Math.min(high, value));

  function angle(db) {
    const value = clamp(db, -20, 3);
    const high = scale.findIndex(stop => stop.db >= value);
    if (high <= 0) return scale[0].angle;
    const before = scale[high - 1];
    const after = scale[high];
    return before.angle + (after.angle - before.angle) * (value - before.db) / (after.db - before.db);
  }

  function point(degrees, radius) {
    const radians = degrees * Math.PI / 180;
    return {
      x: center.x + Math.sin(radians) * radius,
      y: center.y - Math.cos(radians) * radius,
    };
  }

  function arc(from, to, radius) {
    const start = point(from, radius);
    const end = point(to, radius);
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`;
  }

  function markup(channel) {
    const labels = [-20, -10, -5, 0, 3];
    const ticks = [-20, -15, -10, -7, -5, -3, -1, 0, 1, 2, 3];
    const marks = ticks.map(db => {
      const inner = point(angle(db), 52);
      const outer = point(angle(db), labels.includes(db) ? 62 : 59);
      const color = db > 0 ? '#b84b43' : '#454137';
      return `<path d="M ${inner.x} ${inner.y} L ${outer.x} ${outer.y}" stroke="${color}" stroke-width="1"/>`;
    }).join('');
    const numbers = labels.map(db => {
      const position = point(angle(db), 74);
      return `<text x="${position.x}" y="${position.y}" text-anchor="middle" dominant-baseline="middle" font-family="Arial,sans-serif" font-size="10" fill="${db > 0 ? '#ad433b' : '#383b37'}">${db > 0 ? '+' + db : db < 0 ? '\u2212'+Math.abs(db) : db}</text>`;
    }).join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 104" aria-hidden="true">
      <defs><linearGradient id="meter-paper-${channel}" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#d6c6a9"/><stop offset=".5" stop-color="#f0e7d2"/><stop offset="1" stop-color="#d5c5a8"/></linearGradient></defs>
      <rect width="140" height="104" fill="url(#meter-paper-${channel})"/>
      <path d="M 6 97 L 134 97" stroke="#8b7a64" stroke-width=".6"/>
      <path d="${arc(-48, 42, 55)}" fill="none" stroke="#797266" stroke-width="1"/>
      <path d="${arc(angle(0), angle(3), 55)}" fill="none" stroke="#c4594f" stroke-width="3.5"/>
      ${marks}${numbers}
      <text x="70" y="77" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="10" fill="#786e60">VU</text>
      <text x="12" y="92" font-family="Arial,sans-serif" font-size="11" font-weight="700" fill="#373d3b">${channel}</text>
      <g data-needle="" transform="rotate(-48 70 92)">
        <path d="M 70 95 L 70 38" stroke="#ae3f36" stroke-width="1.6" fill="none"/>
      </g>
      <circle cx="70" cy="92" r="3.5" fill="#343a3a"/>
    </svg>`;
  }

  class StereoVUMeter {
    constructor(left, right) {
      this.needles = [left, right].map((mount, index) => {
        mount.innerHTML = markup(index ? 'R' : 'L');
        return mount.querySelector('[data-needle]');
      });
      this.positions = [-48, -48];
    }

    update(rms, delta) {
      rms.forEach((level, channel) => {
        const db = level > 0 ? 20 * Math.log10(level) + 18 : -60;
        const target = angle(db);
        const response = target > this.positions[channel] ? .07 : .24;
        this.positions[channel] += (target - this.positions[channel]) * (1 - Math.exp(-delta / response));
        this.needles[channel].setAttribute('transform', `rotate(${this.positions[channel]} 70 92)`);
      });
    }
  }

  window.VUMeterScale = { angle, point, arc, markup };
  window.StereoVUMeter = StereoVUMeter;
})();
