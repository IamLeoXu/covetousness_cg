/* One coordinate system for shell, circular packs, hubs and the tape at the head. */
(() => {
  'use strict';
  const clip = n => Math.max(0, Math.min(1, Number(n) || 0));
  const escaped = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));

  class CharacterCassette {
    static geometry(fraction, duration = 213.68) {
      const f = clip(fraction), max = 40, min = 27, area = max * max - min * min;
      const left = Math.sqrt(max * max - f * area), right = Math.sqrt(min * min + f * area);
      const rollerRadius = 6, rollerY = 176;
      // External common tangents touch the reel AND the round guide roller.
      const tangent = (cx, radius, gx, side) => {
        const dx = gx - cx, dy = rollerY - 107, length = Math.hypot(dx, dy);
        const along = (radius - rollerRadius) / length, across = Math.sqrt(1 - along * along);
        const nx = dx / length * along - dy / length * across * side;
        const ny = dy / length * along + dx / length * across * side;
        return { pack: { x: cx + nx * radius, y: 107 + ny * radius },
          guide: { x: gx + nx * rollerRadius, y: rollerY + ny * rollerRadius } };
      };
      const supply = tangent(100, left, 43, 1), takeup = tangent(220, right, 277, -1);
      const a = supply.pack, b = takeup.pack;
      const n = value => value.toFixed(3);
      const path = `M ${n(a.x)} ${n(a.y)} L ${n(supply.guide.x)} ${n(supply.guide.y)} A 6 6 0 0 0 43 182 L 277 182 A 6 6 0 0 0 ${n(takeup.guide.x)} ${n(takeup.guide.y)} L ${n(b.x)} ${n(b.y)}`;
      const rotation = 72 * duration * 2 / area * 180 / Math.PI;
      return { left, right, leftCenter: { x: 100, y: 107 }, rightCenter: { x: 220, y: 107 },
        a, b, path, supplyGuide: supply.guide, takeupGuide: takeup.guide,
        guideRadius: rollerRadius, guideY: rollerY,
        angleLeft: -rotation * (max - left), angleRight: -rotation * (right - min) };
    }

    static markup(id, config = {}) {
      const prefix = 'tape-' + id.replace(/[^a-z0-9-]/gi, '');
      const title = escaped(config.title || 'KOHARU'), subtitle = escaped(config.subtitle || 'FALLING FLOWERS');
      const decal = escaped(config.decal || 'assets/ui/koharu-tape-decal.png');
      const pack = (side, cx) => `<g data-pack="${side}"><circle data-coil="${side}" cx="${cx}" cy="107" r="40" fill="#30212a" stroke="#887064" stroke-width=".8"/>${Array.from({length:12},(_,i)=>`<circle data-ring="${side}" data-ring-index="${i+1}" cx="${cx}" cy="107" r="${21+i}" fill="none" stroke="#7c5b55" stroke-width=".55"/>`).join('')}</g>`;
      const hub = (side,cx) => `<g data-hub="${side}"><circle cx="${cx}" cy="107" r="19" fill="#ddc9b9" stroke="#15121a" stroke-width="2.5"/>${Array.from({length:6},(_,i)=>`<path d="M ${cx-3} 89 H ${cx+3} L ${cx+2} 98 H ${cx-2} Z" transform="rotate(${i*60} ${cx} 107)" fill="#271c27"/>`).join('')}<circle cx="${cx}" cy="107" r="7" fill="#17131b" stroke="#94777b" stroke-width="1.4"/></g>`;
      return `<svg xmlns="http://www.w3.org/2000/svg" class="character-tape" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Koharu's cassette, rose shell with an envelope and ribbon label">
        <defs><linearGradient id="${prefix}-shell" x2="0" y2="1"><stop stop-color="#684552"/><stop offset=".48" stop-color="#4b313e"/><stop offset="1" stop-color="#2c202c"/></linearGradient><clipPath id="${prefix}-window"><rect x="35" y="72" width="250" height="80" rx="9"/></clipPath></defs>
        <path d="M 12 3 H 308 Q 317 3 317 12 V 186 Q 317 197 306 197 H 14 Q 3 197 3 186 V 12 Q 3 3 12 3 Z" fill="url(#${prefix}-shell)" stroke="#15121b" stroke-width="5"/>
        <path d="M 14 10 H 305 V 185 M 15 11 V 185 H 305" fill="none" stroke="#ad7b87" stroke-width="1.3"/>
        <rect x="35" y="72" width="250" height="80" rx="9" fill="#131019" stroke="#956a79" stroke-width="2"/>
        <path d="M 49 170 H 271 L 281 195 H 39 Z" fill="#3d2935" stroke="#ac7a88" stroke-width="1"/>
        <g fill="#b89a8b" stroke="#1b151f" stroke-width="1"><circle cx="43" cy="176" r="6"/><circle cx="277" cy="176" r="6"/><circle cx="43" cy="176" r="1.8" fill="#35232e"/><circle cx="277" cy="176" r="1.8" fill="#35232e"/></g>
        <path d="M 143 174 H 177 V 197 H 143 Z" fill="#17131b" stroke="#80646e" stroke-width="1"/>
        <rect x="151" y="177" width="18" height="4.5" rx=".8" fill="#bba58f"/>
        <path data-ribbon="" d="" fill="none" stroke="#bb8f73" stroke-width=".65" vector-effect="non-scaling-stroke"/>
        <g data-reel-layer="" clip-path="url(#${prefix}-window)">${pack('left',100)}${pack('right',220)}${hub('left',100)}${hub('right',220)}</g>
        <rect x="35" y="72" width="250" height="80" rx="9" fill="none" stroke="#b58b96" stroke-width="1.5"/>
        <g data-front-label="">
          <path d="M 22 17 H 298 V 63 H 22 Z" fill="#eddbc4" stroke="#211922" stroke-width="2"/>
          <path d="M 23 63 H 297 V 68 H 23 Z" fill="#b56e83"/>
          <text x="31" y="36" fill="#382334" font-family="Arial,sans-serif" font-weight="800" font-size="18" letter-spacing="1.8">${title}</text>
          <text x="31" y="53" fill="#775260" font-family="Arial,sans-serif" font-size="9.8" letter-spacing="1.1">${subtitle}</text>
          <image href="${decal}" x="204" y="9" width="92" height="59" preserveAspectRatio="xMidYMid meet"/>
        </g>
        <text x="159" y="165" text-anchor="middle" fill="#c7a5a4" font-family="monospace" font-size="7" letter-spacing="2">SIDE A · 03:33</text>
        <g fill="#c8a8a1" stroke="#1b151f" stroke-width="1.5">${[[15,15],[305,15],[15,184],[305,184]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3.2"/><path d="M ${x-1.5} ${y+1.5} L ${x+1.5} ${y-1.5}"/>`).join('')}</g>
      </svg>`;
    }

    constructor(element, id, config = {}) {
      this.element = element; this.duration = config.duration || 213.68;
      element.innerHTML = CharacterCassette.markup(id, config);
      this.packs = ['left','right'].map(side => ({
        circle: element.querySelector(`[data-coil="${side}"]`),
        rings: [...element.querySelectorAll(`[data-ring="${side}"]`)],
        hub: element.querySelector(`[data-hub="${side}"]`),
      }));
      this.ribbon = element.querySelector('[data-ribbon]'); this.update(0);
    }

    update(fraction) {
      const g = CharacterCassette.geometry(fraction, this.duration);
      for (const [i,radius] of [g.left,g.right].entries()) {
        const pack = this.packs[i], cx = i ? 220 : 100;
        pack.circle.setAttribute('r', radius.toFixed(3));
        pack.rings.forEach((ring,j) => ring.setAttribute('r', (20 + (radius-20)*(j+1)/12).toFixed(3)));
        pack.hub.setAttribute('transform', `rotate(${i?g.angleRight:g.angleLeft} ${cx} 107)`);
      }
      this.ribbon.setAttribute('d',g.path);
    }
  }
  window.CharacterCassette = CharacterCassette;
})();
