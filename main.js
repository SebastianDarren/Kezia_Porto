import { dishes, courses, tools, marquee, LINKEDIN, INSTAGRAM, EMAIL } from './data.js';

/* ───────── helpers ───────── */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const src = (n) => `img/${n}.webp`;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeBack = (t) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };

const app = $('#app');
const bar = $('#bar');
let vh = innerHeight;
let vw = innerWidth;

const menuOrder = courses.flatMap((c) => dishes.filter((d) => d.course === c.id));
const numOf = (d) => String(menuOrder.indexOf(d) + 1).padStart(2, '0');

/* ───────── frame loop / teardown ───────── */
let scrubs = [];
let cleanups = [];
let io = null;
const scrub = (fn) => scrubs.push(fn);
const onCleanup = (fn) => cleanups.push(fn);
const listen = (t, ev, fn, o) => { t.addEventListener(ev, fn, o); onCleanup(() => t.removeEventListener(ev, fn, o)); };

let lastY = scrollY;
function frame() {
  const y = scrollY;
  for (const f of scrubs) f(y);
  // header: glass after a little scroll, hides going down, returns going up
  const dy = y - lastY;
  bar.classList.toggle('solid', y > 24);
  if (y > 420 && dy > 6) bar.classList.add('hide');
  else if (dy < -4 || y < 420) bar.classList.remove('hide');
  lastY = y;
  requestAnimationFrame(frame);
}
addEventListener('resize', () => { vh = innerHeight; vw = innerWidth; });

/* ───────── split text + reveal observers ───────── */
function split(el) {
  el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  let i = 0;
  const build = (node) => {
    const frag = document.createDocumentFragment();
    node.childNodes.forEach((n) => {
      if (n.nodeType === 3) {
        n.textContent.split(/(\s+)/).forEach((t) => {
          if (!t) return;
          if (/^\s+$/.test(t)) { frag.append(' '); return; }
          const w = document.createElement('span'); w.className = 'w'; w.setAttribute('aria-hidden', 'true');
          const s = document.createElement('span'); s.style.setProperty('--i', i++); s.textContent = t;
          w.append(s); frag.append(w);
        });
      } else if (n.nodeType === 1) {
        const c = n.cloneNode(false); c.append(build(n)); frag.append(c);
      }
    });
    return frag;
  };
  el.replaceChildren(build(el));
}

function observe() {
  io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
  $$('[data-in],[data-reveal],[data-split]').forEach((el) => io.observe(el));
}

/* ───────── shared scrub effects ───────── */
function words(el) {
  const text = el.textContent.trim();
  el.setAttribute('aria-label', text);
  el.innerHTML = text.split(/\s+/).map((w) => `<span class="sw" aria-hidden="true">${esc(w)}</span>`).join(' ');
  const ws = $$('.sw', el);
  if (reduce) { ws.forEach((w) => w.classList.add('on')); return; }
  scrub(() => {
    const r = el.getBoundingClientRect();
    const p = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.2));
    ws.forEach((w, i) => w.classList.toggle('on', i / ws.length < p * 1.04));
  });
}

function stackCards(items) {
  if (reduce) return;
  scrub(() => {
    items.forEach((it, i) => {
      const nx = items[i + 1];
      if (!nx) return;
      const gap = nx.offsetTop - it.offsetTop;
      const q = clamp(1 - (nx.getBoundingClientRect().top - it.getBoundingClientRect().top) / gap);
      it.style.setProperty('--q', q.toFixed(3));
      it.style.transform = `scale(${1 - q * 0.06})`;
    });
  });
}

function spinBadges() {
  const badges = $$('.badge');
  if (!badges.length) return;
  scrub((y) => {
    const t = reduce ? 0 : performance.now() / 1000;
    badges.forEach((b) => { b.style.transform = `rotate(${t * 9 + y * 0.12}deg)`; });
  });
}

function magnetic() {
  if (!fine || reduce) return;
  $$('.btn').forEach((b) => {
    listen(b, 'pointermove', (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px,${(e.clientY - r.top - r.height / 2) * 0.32}px)`;
    });
    listen(b, 'pointerleave', () => { b.style.transform = ''; });
  });
}

/* ───────── lightbox ───────── */
const lb = { el: $('#lb'), img: $('#lbImg'), cap: $('#lbCap'), items: [], i: 0, opener: null };
function lbShow() {
  const it = lb.items[lb.i];
  lb.img.src = it.src; lb.img.alt = it.alt; lb.cap.textContent = `${it.cap} · ${lb.i + 1} / ${lb.items.length}`;
}
function openLb(items, i, opener) {
  lb.items = items; lb.i = i; lb.opener = opener; lbShow();
  lb.el.hidden = false; document.body.classList.add('lock');
  requestAnimationFrame(() => lb.el.classList.add('show'));
  $('#lbClose').focus();
}
function closeLb() {
  if (lb.el.hidden) return;
  lb.el.classList.remove('show'); document.body.classList.remove('lock');
  setTimeout(() => { lb.el.hidden = true; }, 380);
  if (lb.opener) lb.opener.focus({ preventScroll: true });
}
const stepLb = (d) => { lb.i = (lb.i + d + lb.items.length) % lb.items.length; lbShow(); };
$('#lbClose').onclick = closeLb;
$('#lbPrev').onclick = () => stepLb(-1);
$('#lbNext').onclick = () => stepLb(1);
lb.el.addEventListener('click', (e) => { if (e.target === lb.el) closeLb(); });
addEventListener('keydown', (e) => {
  if (lb.el.hidden) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') stepLb(-1);
  if (e.key === 'ArrowRight') stepLb(1);
});
function bindZoom(root, items) {
  const list = items.map((x) => ({ src: src(x.src), alt: x.alt, cap: x.cap || x.alt }));
  $$('[data-lb]', root).forEach((el) => {
    const open = () => openLb(list, +el.dataset.lb, el);
    listen(el, 'click', open);
    listen(el, 'keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
}

/* ───────── shared markup ───────── */
const ext = 'target="_blank" rel="noopener noreferrer"';
const meetBtn = (cls = '') => `<a class="btn ${cls}" href="${LINKEDIN}" ${ext}>Meet me <span class="arr">↗</span></a>`;
const spark = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z"/></svg>`;
const badge = () => `
  <div class="badge" aria-hidden="true"><img src="img/icon.webp" alt="" width="640" height="640"></div>`;
const footer = () => `
  <footer class="foot">
    <div class="wrap">
      <p class="script" data-reveal>hungry for more?</p>
      <h2 class="big-h" data-split>Let’s cook something <em>together.</em></h2>
      <div class="foot-links" data-reveal style="--d:300">
        <a class="btn" href="#/contact">Say hello <span class="arr">→</span></a>
        ${meetBtn('ghost')}
      </div>
      <div class="foot-small"><span>© ${new Date().getFullYear()} Kezia Valerine · Create by Kezia</span><a href="#/menu">Back to the menu</a></div>
    </div>
  </footer>`;

/* ───────── page: home ───────── */
function home() {
  const picks = menuOrder;
  const mq = marquee.map((w, i) => `<span class="${i % 2 ? 'o' : ''}">${i % 2 ? w : `<em>${w}</em>`}</span>${spark}`).join('');
  const html = `
  <section class="hero" aria-label="Introduction">
    <div class="hero-pin">
      <div class="copy-stack">
        <div class="c1">
          <p class="script hero-script">table for one, please</p>
          <h1 aria-label="Fresh from the kitchen of Kezia."><span class="line"><span style="--l:0">Fresh from</span></span><span class="line"><span style="--l:1">the kitchen</span></span><span class="line"><span style="--l:2">of <em>Kezia.</em></span></span></h1>
          <p class="hero-sub">Creative designer, <b>served one dish at a time.</b></p>
        </div>
        <div class="c2">
          <p class="script">today’s special</p>
          <h2>Kezia <em>Valerine</em></h2>
          <p class="hero-sub">A future app developer who turns ideas into <b>simple, useful apps</b> that look good and are easy to use.</p>
        </div>
        <div class="hero-cta">
          <a class="btn" href="#/menu">See the menu <span class="arr">→</span></a>
          ${meetBtn('ghost')}
        </div>
      </div>
      <div class="stage">
        ${badge('bp-home')}
        <span class="spark" style="left:4%;top:24%">${spark}</span>
        <span class="spark" style="left:88%;top:58%;width:3.2%">${spark}</span>
        <span class="spark" style="left:44%;top:4%;width:3%">${spark}</span>
        <span class="spark" style="left:-1%;top:58%;width:3%">${spark}</span>
        <div class="shadow"></div><div class="plate"></div>
        <div class="medal"><img src="img/kezia.webp" alt="Portrait of Kezia Valerine" width="560" height="613"></div>
        <svg class="steam" viewBox="0 0 120 120" aria-hidden="true"><path d="M30 120C10 95 50 80 30 50S45 15 30 0"/><path d="M60 120C40 90 80 75 60 45S75 10 60-5"/><path d="M90 120C70 95 108 80 90 52S102 18 90 2"/></svg>
        <button class="cloche idle" aria-label="Lift the lid to meet Kezia">
          <svg viewBox="0 0 400 290" aria-hidden="true">
            <defs>
              <linearGradient id="cg" x1="0" x2="1"><stop offset="0" stop-color="#cdbfa6"/><stop offset=".42" stop-color="#f3eada"/><stop offset="1" stop-color="#a09279"/></linearGradient>
              <linearGradient id="cb" x1="0" x2="1"><stop offset="0" stop-color="#b3a58c"/><stop offset=".5" stop-color="#ece1cc"/><stop offset="1" stop-color="#968870"/></linearGradient>
            </defs>
            <path d="M24 256C24 120 112 40 200 40s176 80 176 216Z" fill="url(#cg)"/>
            <path d="M58 232C62 142 116 80 176 62" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="10" stroke-linecap="round"/>
            <rect x="4" y="250" width="392" height="28" rx="14" fill="url(#cb)"/>
            <rect x="188" y="16" width="24" height="28" rx="6" fill="#b3a58c"/>
            <circle cx="200" cy="14" r="15" fill="url(#cb)"/>
          </svg>
        </button>
      </div>
      <div class="hint"><span>Lift the lid</span><i></i></div>
    </div>
  </section>

  <section class="marquee" aria-hidden="true"><div class="mq-track"><div class="mq-item">${mq}</div><div class="mq-item">${mq}</div></div></section>

  <section class="picks">
    <div class="wrap">
      <div class="sec-head">
        <div><p class="script" data-reveal>chef’s picks</p><h2 data-split>Kezia’s <em>Signatures</em></h2></div>
        <a class="btn ghost" href="#/menu" data-reveal>Full menu <span class="arr">→</span></a>
      </div>
      <div class="stack-cards">
        ${picks.map((d, k) => `
        <a class="pick" href="#/dish/${d.slug}" style="--k:${k};--accent:${d.accent}" aria-label="${esc(d.title)}">
          <div class="pick-img"><img src="${src(d.cover.src)}" alt="" loading="lazy" style="object-fit:${d.cover.fit};object-position:${d.cover.pos};${d.cover.bg ? `background:${d.cover.bg}` : ''}"></div>
          <div class="pick-body">
            <div>
              <div class="pick-n">${numOf(d)}</div>
              <h3>${esc(d.title)}</h3>
              <p>${esc(d.kind)} · ${esc(d.year)}</p>
            </div>
            <div class="chips">${d.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div>
          </div>
        </a>`).join('')}
      </div>
      <div class="picks-cta"><a class="btn" href="#/menu">See the whole menu <span class="arr">→</span></a></div>
    </div>
  </section>

  <section class="note">
    <div class="wrap">
      <p class="label">The chef’s note</p>
      <p class="note-text" data-words>I’m a future app developer with an interest in UI/UX design. I enjoy turning ideas into simple and useful apps that look good and are easy to use.</p>
      <div class="hero-cta"><a class="btn" href="#/about">More about me <span class="arr">→</span></a></div>
    </div>
  </section>
  ${footer()}`;

  return {
    html, title: 'Create by Kezia — Kezia Valerine, portfolio', nav: '',
    mount() {
      hero();
      marq($('.marquee'));
      stackCards($$('.pick'));
      words($('[data-words]'));
      spinBadges();
    },
  };
}

function hero() {
  const root = $('.hero');
  const cl = $('.cloche'), medal = $('.medal'), steam = $('.steam'), stage = $('.stage');
  const c1 = $('.c1'), c2 = $('.c2'), hint = $('.hint'), sparks = $$('.spark', stage);
  if (reduce) {
    cl.style.display = 'none'; medal.style.opacity = 1; steam.style.opacity = 1; sparks.forEach((s) => { s.style.opacity = 1; });
    return;
  }
  let hintOn = false;
  const t = setTimeout(() => { hintOn = true; }, bootMs + 2200);
  onCleanup(() => clearTimeout(t));
  let sp = 0;
  const apply = (p) => {
    const lift = easeOut(clamp((p - 0.04) / 0.42));
    cl.classList.toggle('idle', p < 0.004);
    if (p >= 0.004) {
      cl.style.transform = `translate3d(0,${-lift * stage.offsetHeight * 1.05}px,0) rotate(${-lift * 16}deg)`;
      cl.style.opacity = 1 - clamp((lift - 0.72) / 0.28);
    } else { cl.style.transform = ''; cl.style.opacity = 1; }
    const m = easeBack(clamp((p - 0.2) / 0.4));
    medal.style.opacity = clamp((p - 0.18) / 0.12);
    medal.style.transform = `translate3d(0,${(1 - m) * 14}%,0) scale(${0.55 + 0.45 * m})`;
    steam.style.opacity = clamp((p - 0.45) / 0.2);
    sparks.forEach((s, i) => { const k = clamp((p - 0.42 - i * 0.04) / 0.2); s.style.opacity = k; s.style.transform = `scale(${0.4 + 0.6 * k})`; });
    const o1 = 1 - clamp((p - 0.1) / 0.22);
    c1.style.opacity = o1; c1.style.transform = `translate3d(0,${-(1 - o1) * 44}px,0)`;
    c1.style.visibility = o1 < 0.02 ? 'hidden' : '';
    const o2 = clamp((p - 0.5) / 0.22);
    c2.style.opacity = o2; c2.style.transform = `translate3d(0,${(1 - o2) * 44}px,0)`;
    hint.style.opacity = hintOn ? 1 - clamp(p / 0.06) : 0;
  };
  apply(0);
  scrub(() => {
    const r = root.getBoundingClientRect();
    const p = clamp(-r.top / (r.height - vh));
    sp += (p - sp) * 0.1;
    if (Math.abs(p - sp) < 0.0005) sp = p;
    apply(sp);
  });
  listen(cl, 'click', () => {
    const top = root.getBoundingClientRect().top + scrollY;
    scrollTo({ top: top + (root.offsetHeight - vh) * 0.7, behavior: 'smooth' });
  });
}

function marq(root) {
  const track = $('.mq-track', root);
  let x = 0, last = scrollY, v = 0;
  scrub((y) => {
    const w = track.firstElementChild.offsetWidth;
    v += ((y - last) - v) * 0.12; last = y;
    x -= reduce ? 0 : 0.8 + v * 0.55;
    if (w) { while (x < -w) x += w; while (x > 0) x -= w; }
    track.style.transform = `translate3d(${x}px,0,0)`;
  });
}

/* ───────── page: menu ───────── */
function menu() {
  let n = 0;
  const html = `
  <div class="page">
    <div class="wrap pg-back"><a class="back" href="#/">← Back to home</a></div>
    <div class="wrap">
      <header class="menu-head">
        <p class="script" data-reveal>create by kezia · est. 2025</p>
        <h1 class="big-h" data-split>The <em>Menu</em></h1>
        <p class="lead" data-reveal style="--d:250">Six dishes, freshly made between 2025 and 2026. Hover a plate to peek, tap to order.</p>
      </header>
      <div class="menu-list">
      ${courses.map((c) => `
        <section class="course" aria-label="${c.name}">
          <div class="course-h" data-in><h2>${c.name}</h2><span class="script">${c.note}</span></div>
          ${dishes.filter((d) => d.course === c.id).map((d) => {
            const i = n++;
            return `
          <a class="row" href="#/dish/${d.slug}" data-in data-idx="${i}">
            <span class="row-n">${String(i + 1).padStart(2, '0')}</span>
            <img class="row-thumb" src="${src(d.cover.src)}" alt="" loading="lazy" style="object-position:${d.cover.pos}">
            <span class="row-main">
              ${d.pick ? '<span class="pickstar">★ chef’s pick</span>' : ''}
              <span class="row-title">${esc(d.title)}</span>
              <span class="row-sub">${esc(d.kind)} · ${d.tags.map(esc).join(', ')}</span>
            </span>
            <span class="row-dots" aria-hidden="true"></span>
            <span class="row-year">${esc(d.year)}</span>
            <span class="row-go" aria-hidden="true">→</span>
          </a>`;
          }).join('')}
        </section>`).join('')}
      </div>
      <div class="menu-end"><span class="script">that’s the whole menu</span>Nothing contains nuts. Everything is made with love.</div>
    </div>
    ${footer()}
  </div>`;
  return {
    html, title: 'The Menu — Create by Kezia', nav: 'menu',
    mount() {
      const peek = $('#peek');
      peek.innerHTML = menuOrder.map((d) => `<img src="${src(d.cover.src)}" alt="" style="object-fit:cover;object-position:${d.cover.pos}">`).join('');
      const imgs = $$('img', peek);
      onCleanup(() => { peek.classList.remove('on'); peek.innerHTML = ''; });
      if (!fine) return;
      let px = -999, py = 0, tx = -999, ty = 0, ps = 0.3, pt = 0.3, rot = 0, active = -1;
      listen(document, 'pointermove', (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });
      $$('.row').forEach((row) => {
        listen(row, 'pointerenter', () => {
          const i = +row.dataset.idx;
          if (active >= 0) imgs[active].classList.remove('on');
          imgs[i].classList.add('on'); active = i;
          peek.classList.add('on'); pt = 1;
          if (px < -900) { px = tx; py = ty; }
        });
        listen(row, 'pointerleave', () => { peek.classList.remove('on'); pt = 0.3; });
      });
      const w = () => peek.offsetWidth;
      scrub(() => {
        const dx = tx - px;
        px += dx * 0.14; py += (ty - py) * 0.14; ps += (pt - ps) * 0.14;
        rot += (clamp(dx * 0.06, -14, 14) - rot) * 0.15;
        const size = w();
        const x = Math.min(px + size * 0.55, vw - size * 0.55 - 12);
        peek.style.transform = `translate3d(${x - size / 2}px,${py - size / 2}px,0) scale(${ps}) rotate(${rot}deg)`;
      });
    },
  };
}

/* ───────── page: dish ───────── */
function dish(slug) {
  const d = dishes.find((x) => x.slug === slug);
  if (!d) return home();
  const idx = menuOrder.indexOf(d);
  const next = menuOrder[(idx + 1) % menuOrder.length];
  const course = courses.find((c) => c.id === d.course);
  const g = d.gallery;
  const cover = d.cover;

  let gallery = '';
  if (g.type === 'hscroll') {
    gallery = `
    <section class="hs" data-hs aria-label="${esc(g.title)}">
      <div class="hs-pin">
        <div class="g-head"><h2 data-split>${esc(g.title)}</h2><div class="hs-ctrl"><p>Swipe sideways, drag or use the arrows · tap to zoom</p><button class="hs-btn" data-hs="-1" aria-label="Previous">←</button><button class="hs-btn" data-hs="1" aria-label="Next">→</button></div></div>
        <div class="hs-track">
          ${g.items.map((it, i) => `
          <figure class="hs-item zoomable" style="--r:${g.ratio}" data-lb="${i}" tabindex="0" role="button" aria-label="Zoom: ${esc(it.alt)}">
            <img src="${src(it.src)}" alt="${esc(it.alt)}" decoding="async"><figcaption>${esc(it.cap)}</figcaption>
          </figure>`).join('')}
        </div>
        <div class="hs-bar" aria-hidden="true"><i></i></div>
      </div>
    </section>`;
  } else if (g.type === 'stack') {
    gallery = `
    <section class="stk" aria-label="${esc(g.title)}">
      <div class="wrap"><div class="g-head"><h2 data-split>${esc(g.title)}</h2><p>Keep scrolling · tap a slide to zoom</p></div></div>
      <div class="stk-wrap"><div class="stk-list">
        ${g.items.map((it, i) => `
        <div class="stk-item" style="--k:${i};--r:${g.ratio}">
          <figure class="stk-card zoomable" data-lb="${i}" tabindex="0" role="button" aria-label="Zoom: ${esc(it.alt)}"><img src="${src(it.src)}" alt="${esc(it.alt)}" loading="lazy" decoding="async"></figure>
          <div class="stk-cap"><span>${esc(it.cap)}</span><span>${i + 1} / ${g.items.length}</span></div>
        </div>`).join('')}
      </div></div>
    </section>`;
  } else if (g.type === 'grid') {
    gallery = `
    <section class="wrap grd-sec" aria-label="${esc(g.title)}" style="padding-bottom:4vw">
      <div class="g-head"><h2 data-split>${esc(g.title)}</h2><p>Tap a render to zoom</p></div>
      <div class="grd">
        ${g.items.map((it, i) => `
        <figure class="grd-item zoomable" data-in style="--w:${it.w};--d:${(i % 3) * 110}" data-lb="${i}" tabindex="0" role="button" aria-label="Zoom: ${esc(it.alt)}"><img src="${src(it.src)}" alt="${esc(it.alt)}" loading="lazy" decoding="async"></figure>`).join('')}
      </div>
    </section>`;
  } else if (g.type === 'compare') {
    gallery = `
    <section class="wrap" aria-label="${esc(g.title)}">
      <div class="g-head"><h2 data-split>${esc(g.title)}</h2><p>Drag the handle, or use ← →</p></div>
      <div class="cmp-wrap">
        <div class="cmp" data-cmp style="--pos:100%">
          <img class="before" src="${src(g.before.src)}" alt="${esc(g.before.alt)}" decoding="async">
          <img class="after" src="${src(g.after.src)}" alt="${esc(g.after.alt)}" decoding="async">
          <span class="cmp-tag l">Before</span><span class="cmp-tag r">After</span>
          <div class="cmp-handle"><button role="slider" aria-label="Reveal the redesign" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100">&lsaquo;&rsaquo;</button></div>
        </div>
        <div class="cmp-side" data-reveal>
          <img class="phone-fl" src="${src(g.phone.src)}" alt="${esc(g.phone.alt)}" loading="lazy">
          <p>The new poster, on a phone in your hand.</p>
        </div>
      </div>
    </section>`;
  } else if (g.type === 'phone') {
    gallery = `
    <section class="wrap" aria-label="${esc(g.title)}">
      <div class="g-head"><h2 data-split>${esc(g.title)}</h2></div>
      <div class="ph">
        <div class="ph-card" data-reveal><img src="${src(g.image.src)}" alt="${esc(g.image.alt)}"></div>
        <div data-in>
          <p class="script">everything in one place</p>
          <div class="pills">${g.features.map((f, i) => `<span class="pill" style="--i:${i}">${esc(f)}</span>`).join('')}</div>
        </div>
      </div>
    </section>`;
  }

  const html = `
  <article class="page dish" style="--accent:${d.accent}">
    <div class="wrap d-hero">
      <a class="back" href="#/menu">← Back to the menu</a>
      <p class="kicker" data-reveal><span class="k-n">${numOf(d)}</span><span class="label">${esc(course.name)} · ${esc(d.kind)}</span></p>
      <h1 data-split>${esc(d.title)}</h1>
      <ul class="meta" data-reveal style="--d:400">
        <li><span>Served</span><b>${esc(d.year)}</b></li>
        <li><span>Role</span><b>${esc(d.role)}</b></li>
      </ul>
    </div>
    <figure class="d-cover"><div class="cover-frame ${cover.fit === 'contain' ? 'contain' : ''}" ${cover.bg ? `style="background:${cover.bg}"` : ''}><img src="${src(cover.src)}" alt="${esc(d.title)}" style="object-fit:${cover.fit};object-position:${cover.pos}" fetchpriority="high"></div></figure>
    <div class="wrap d-info">
      <div class="d-text"><span class="label" data-reveal>About the dish</span>${d.desc.map((p, i) => `<p data-reveal style="--d:${i * 80}">${esc(p)}</p>`).join('')}</div>
      <aside class="d-side" data-reveal style="--d:150">
        <div><span class="label">Ingredients</span><div class="chips">${d.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div></div>
        <a class="btn" href="${esc(d.link.href)}" ${ext}>${esc(d.link.label)} <span class="arr">↗</span></a>
      </aside>
    </div>
    ${gallery}
    <section class="wrap d-next">
      <p class="label" data-reveal>Next dish</p>
      <a class="next-link" href="#/dish/${next.slug}" style="--accent:${next.accent}" data-reveal>${esc(next.title)} <span class="arr">→</span></a>
    </section>
  </article>`;

  return {
    html, title: `${d.title} — Create by Kezia`, nav: 'menu',
    mount() {
      // cover grows in as you arrive and drifts slowly
      const frame = $('.cover-frame');
      const im = $('img', frame);
      if (!reduce) {
        scrub(() => {
          const r = frame.getBoundingClientRect();
          const e = clamp((vh - r.top) / (vh * 0.75));
          const p = clamp((vh - r.top) / (vh + r.height));
          frame.style.transform = `scale(${0.88 + 0.12 * easeOut(e)})`;
          if (cover.fit !== 'contain') im.style.transform = `translate3d(0,${(p - 0.5) * -5}%,0) scale(1.12)`;
        });
      }
      if (g.type === 'hscroll') hscroll($('[data-hs]'));
      if (g.type === 'stack') stackCards($$('.stk-item'));
      if (g.type === 'grid') gridParallax($$('.grd-item'));
      if (g.type === 'compare') compare($('[data-cmp]'));
      if (g.items) bindZoom(app, g.items);
    },
  };
}

function hscroll(root) {
  const track = $('.hs-track', root);
  const fill = $('.hs-bar i', root);
  const btns = $$('[data-hs]', root);

  // a normal horizontal scroller: sideways input slides the images,
  // up/down input scrolls the page as usual
  const sync = () => {
    const max = track.scrollWidth - track.clientWidth;
    const p = max > 0 ? clamp(track.scrollLeft / max) : 0;
    fill.style.transform = `scaleX(${p})`;
    btns.forEach((b) => { b.disabled = +b.dataset.hs < 0 ? track.scrollLeft <= 2 : track.scrollLeft >= max - 2; });
  };
  listen(track, 'scroll', sync, { passive: true });
  listen(window, 'resize', sync);
  sync();

  // mouse drag (touch and trackpad scroll natively)
  let down = false, moved = false, startX = 0, startLeft = 0, pid = 0;
  listen(track, 'pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft; pid = e.pointerId;
  });
  listen(track, 'pointermove', (e) => {
    if (!down) return;
    if (!moved && Math.abs(e.clientX - startX) > 6) { moved = true; track.setPointerCapture(pid); track.classList.add('drag'); }
    if (moved) track.scrollLeft = startLeft - (e.clientX - startX);
  });
  const end = () => { down = false; track.classList.remove('drag'); setTimeout(() => { moved = false; }, 0); };
  listen(track, 'pointerup', end);
  listen(track, 'pointercancel', end);
  listen(track, 'click', (e) => { if (moved) { e.stopPropagation(); e.preventDefault(); } }, true);

  // arrows (buttons and keyboard)
  const step = (dir) => {
    const it = $('.hs-item', track);
    track.scrollBy({ left: dir * (it.offsetWidth + 24), behavior: 'smooth' });
  };
  btns.forEach((b) => listen(b, 'click', () => step(+b.dataset.hs)));
  listen(window, 'keydown', (e) => {
    if (!lb.el.hidden || /input|textarea/i.test(e.target.tagName)) return;
    const r = root.getBoundingClientRect();
    if (r.top > vh * 0.5 || r.bottom < vh * 0.5) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  });
}

function gridParallax(items) {
  if (reduce) return;
  scrub(() => {
    items.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -50 || r.top > vh + 50) return;
      const off = clamp(((r.top + r.height / 2) - vh / 2) * -0.06, -r.height * 0.05, r.height * 0.05);
      $('img', el).style.transform = `translate3d(0,${off}px,0)`;
    });
  });
}

function compare(el) {
  const handle = $('.cmp-handle button', el);
  let pos = 100, drag = false, raf = 0;
  const set = (v) => {
    pos = clamp(v, 0, 100);
    el.style.setProperty('--pos', `${pos}%`);
    handle.setAttribute('aria-valuenow', Math.round(100 - pos));
  };
  const fromX = (x) => { const r = el.getBoundingClientRect(); set(((x - r.left) / r.width) * 100); };
  listen(el, 'pointerdown', (e) => { cancelAnimationFrame(raf); drag = true; el.classList.add('drag'); el.setPointerCapture(e.pointerId); fromX(e.clientX); });
  listen(el, 'pointermove', (e) => { if (drag) fromX(e.clientX); });
  ['pointerup', 'pointercancel'].forEach((t) => listen(el, t, () => { drag = false; el.classList.remove('drag'); }));
  listen(handle, 'keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); set(pos - 5); }
    if (e.key === 'ArrowRight') { e.preventDefault(); set(pos + 5); }
  });
  // a little demo sweep the first time it scrolls into view
  const demo = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    demo.disconnect();
    if (reduce) { set(50); return; }
    const t0 = performance.now();
    const step = (t) => {
      if (drag) return;
      const k = clamp((t - t0) / 1800);
      set(100 - 50 * easeOut(k));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }, { threshold: 0.45 });
  demo.observe(el);
  onCleanup(() => { demo.disconnect(); cancelAnimationFrame(raf); });
}

/* ───────── page: about ───────── */
function about() {
  const cols = ['#d8a548', '#c4472f', '#7c9a77', '#5fa3a6', '#c9704f', '#d8a548', '#c4472f'];
  const rots = [-2, 1.5, -1, 2, -1.5, 1, -2];
  const html = `
  <div class="page">
    <div class="wrap pg-back"><a class="back" href="#/">← Back to home</a></div>
    <section class="wrap a-hero">
      <div class="a-stage" data-in>
        <div class="a-medal"><img src="img/kezia.webp" alt="Portrait of Kezia Valerine" width="560" height="613"></div>
        ${badge('bp-about')}
      </div>
      <div class="a-copy">
        <p class="script" data-reveal>the chef’s note</p>
        <h1 data-split>Hi, I’m Kezia <em>Valerine.</em></h1>
        <p class="lead" data-reveal style="--d:250">I’m a future app developer with an interest in UI/UX design. I enjoy turning ideas into simple and useful apps that look good and are easy to use.</p>
        <p data-reveal style="--d:350">I use tools like Adobe Illustrator, Photoshop, After Effects, Blender, Figma, Canva, and CapCut to create designs and digital experiences that help people in their daily lives.</p>
        <div class="hero-cta" data-reveal style="--d:450">${meetBtn()}<a class="btn ghost" href="#/menu">See the menu <span class="arr">→</span></a></div>
      </div>
    </section>
    <section class="pantry">
      <div class="wrap">
        <p class="script" data-reveal>the pantry</p>
        <h2 class="big-h" data-split>Tools I cook <em>with</em></h2>
        <div class="jars" data-in>${tools.map((t, i) => `<span class="jar" style="--i:${i};--rot:${rots[i % 7]}deg;--c:${cols[i % 7]}">${esc(t)}</span>`).join('')}</div>
      </div>
    </section>
    <section class="wrap">
      <div class="facts">
        <div class="fact" data-reveal><span class="label">Studying at</span><b>Jakarta International University</b></div>
        <div class="fact" data-reveal style="--d:120"><span class="label">Cooking</span><b>Illustration, branding, UI, photography &amp; 3D</b></div>
        <div class="fact" data-reveal style="--d:240"><span class="label">Find me</span><b><a href="${INSTAGRAM}" ${ext}>@vale.portofolio</a></b></div>
      </div>
    </section>
    ${footer()}
  </div>`;
  return { html, title: 'About — Create by Kezia', nav: 'about', mount() { spinBadges(); } };
}

/* ───────── page: contact ───────── */
function contact() {
  const bars = Array.from({ length: 34 }, (_, i) => `<i style="--i:${i};--h:${40 + ((i * 37) % 60)}"></i>`).join('');
  const html = `
  <div class="page">
    <div class="wrap pg-back"><a class="back" href="#/">← Back to home</a></div>
    <section class="wrap c-wrap">
      <div>
        <p class="script" data-reveal>ready to order?</p>
        <h1 class="big-h" data-split>Let’s cook something <em>together.</em></h1>
        <p class="lead" data-reveal style="--d:300">Say hi. I’d love to hear about your project, your idea, or just what you’re hungry for.</p>
        <div class="hero-cta" data-reveal style="--d:400">
          <a class="btn" href="mailto:${EMAIL}">Email me <span class="arr">→</span></a>
          <a class="btn ghost" href="${INSTAGRAM}" ${ext}>Instagram <span class="arr">↗</span></a>
          ${meetBtn('ghost')}
        </div>
      </div>
      <div class="slot" data-in>
        <div class="slot-clip">
          <div class="paper" aria-label="Contact receipt">
            <h3>CREATE BY KEZIA</h3>
            <p class="sub">TABLE FOR ONE · ORDER #2026</p>
            <hr>
            <a class="ln row-in" style="--i:0" href="mailto:${EMAIL}">1× Email<i></i><em>${EMAIL}</em></a>
            <a class="ln row-in" style="--i:1" href="${INSTAGRAM}" ${ext}>1× Instagram<i></i><em>@vale.portofolio</em></a>
            <a class="ln row-in" style="--i:2" href="${LINKEDIN}" ${ext}>1× LinkedIn<i></i><em>kezia-valerine</em></a>
            <hr>
            <div class="tot row-in" style="--i:3"><span>TOTAL</span><span>one great project</span></div>
            <p class="ty row-in" style="--i:4">thank you, come again!</p>
            <div class="bars" aria-hidden="true">${bars}</div>
          </div>
        </div>
      </div>
    </section>
  </div>`;
  return {
    html, title: 'Contact — Create by Kezia', nav: 'contact', mount() {},
  };
}

const toastEl = $('#toast');
let toastT;
function say(msg) {
  toastEl.textContent = msg; toastEl.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 1800);
}

/* ───────── router + page transition ───────── */
const legacy = { '#home': '#/', '#about': '#/about', '#project': '#/menu', '#contact': '#/contact' };
const routes = [
  [/^#\/?$/, home],
  [/^#\/menu\/?$/, menu],
  [/^#\/about\/?$/, about],
  [/^#\/contact\/?$/, contact],
  [/^#\/dish\/([\w-]+)\/?$/, dish],
];
const norm = (h) => legacy[h] || h || '#/';
function resolve(hash) {
  for (const [re, fn] of routes) { const m = hash.match(re); if (m) return () => fn(...m.slice(1)); }
  return home;
}

let bootMs = 0;
function render(hash, boot, obsDelay = boot) {
  scrubs = [];
  cleanups.forEach((f) => f()); cleanups = [];
  if (io) io.disconnect();
  if (!lb.el.hidden) { lb.el.hidden = true; lb.el.classList.remove('show'); document.body.classList.remove('lock'); }

  const page = resolve(hash)();
  app.style.setProperty('--boot', `${boot / 1000}s`);
  bootMs = obsDelay;
  app.innerHTML = page.html;
  document.title = page.title;
  $$('[data-nav]').forEach((a) => {
    const on = a.dataset.nav === page.nav;
    a.classList.toggle('on', on);
    on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current');
  });
  scrollTo(0, 0); lastY = 0;
  $$('[data-split]').forEach(split);
  page.mount();
  magnetic();
  setTimeout(observe, obsDelay);
  if (boot) app.focus({ preventScroll: true });
}

let lastPt = { x: innerWidth / 2, y: innerHeight / 2 };
document.addEventListener('pointerdown', (e) => {
  if (e.target.closest('a[href^="#/"]')) lastPt = { x: e.clientX, y: e.clientY };
}, true);
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#/"]');
  if (!a) return;
  if (e.detail === 0) { const r = a.getBoundingClientRect(); lastPt = { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }
  if (norm(a.getAttribute('href')) === norm(location.hash)) { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); }
});

const wipe = $('#wipe');
let busy = false, queued = null;
async function go(hash) {
  hash = norm(hash);
  if (busy) { queued = hash; return; }
  busy = true;
  if (reduce) { render(hash, 0); busy = false; return; }
  const { x, y } = lastPt;
  const R = Math.hypot(Math.max(x, vw - x), Math.max(y, vh - y)) + 10;
  wipe.style.visibility = 'visible';
  await wipe.animate(
    [{ clipPath: `circle(0px at ${x}px ${y}px)` }, { clipPath: `circle(${R}px at ${x}px ${y}px)` }],
    { duration: 700, easing: 'cubic-bezier(.7,0,.2,1)', fill: 'forwards' },
  ).finished;
  wipe.classList.add('on');
  render(hash, 650);
  await wait(420);
  wipe.classList.remove('on');
  await wipe.animate(
    [{ transform: 'translateY(0)' }, { transform: 'translateY(-101%)' }],
    { duration: 800, easing: 'cubic-bezier(.7,0,.2,1)', fill: 'forwards' },
  ).finished;
  wipe.getAnimations().forEach((a) => a.cancel());
  wipe.style.visibility = 'hidden';
  busy = false;
  if (queued && queued !== norm(location.hash)) { queued = null; go(location.hash); } else queued = null;
}
addEventListener('hashchange', () => go(location.hash));

/* ───────── boot ───────── */
history.scrollRestoration = 'manual';
(async function boot() {
  const loader = $('#loader');
  let seen = false;
  try { seen = sessionStorage.getItem('kezi-seen') === '1'; } catch { /* storage may be blocked */ }
  const quick = seen || reduce;
  render(norm(location.hash), 0, quick ? 0 : 1500);
  requestAnimationFrame(frame);
  if (quick) {
    loader.remove(); document.body.classList.add('ready');
    return;
  }
  await Promise.all([wait(1500), Promise.race([document.fonts ? document.fonts.ready : 0, wait(2500)])]);
  loader.classList.add('done');
  document.body.classList.add('ready');
  try { sessionStorage.setItem('kezi-seen', '1'); } catch { /* ignore */ }
  setTimeout(() => loader.remove(), 1200);
})();
