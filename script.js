(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const names = slides.map(s => s.dataset.name);
  const links = [...document.querySelectorAll('nav a')];
  const dots = document.getElementById('dots');
  const prev = document.getElementById('prev'), next = document.getElementById('next');
  let cur = -1;

  slides.forEach((s, i) => {
    const d = document.createElement('button');
    d.setAttribute('aria-label', 'Go to page ' + (i + 1));
    d.onclick = () => go(i);
    dots.appendChild(d);
  });

  function go(i, push = true) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    if (i === cur) return;
    cur = i;
    slides.forEach((s, k) => { s.classList.toggle('on', k === i); s.inert = k !== i; });
    links.forEach((a, k) => { a.classList.toggle('on', k === i); k === i ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'); });
    [...dots.children].forEach((d, k) => d.classList.toggle('on', k === i));
    prev.disabled = i === 0; next.disabled = i === slides.length - 1;
    if (push) history.replaceState(null, '', '#' + names[i]);
  }
  const fromHash = () => { const k = names.indexOf(location.hash.slice(1)); go(k < 0 ? 0 : k, false); };
  window.addEventListener('hashchange', fromHash);

  prev.onclick = () => go(cur - 1);
  next.onclick = () => go(cur + 1);
  document.querySelectorAll('[data-go]').forEach(b => b.onclick = () => go(+b.dataset.go));
  links.forEach(a => a.onclick = e => { e.preventDefault(); go(+a.dataset.i); });
  document.querySelector('.brand').onclick = e => { e.preventDefault(); go(0); };

  // keyboard + swipe
  addEventListener('keydown', e => {
    if (document.querySelector('.modal:not([hidden])')) { if (e.key === 'Escape') closeModal(); return; }
    if (e.key === 'ArrowRight' || e.key === 'PageDown') go(cur + 1);
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(cur - 1);
  });
  let x0 = null;
  const stage = document.getElementById('stage');
  stage.addEventListener('pointerdown', e => { x0 = e.clientX; });
  stage.addEventListener('pointerup', e => {
    if (x0 === null) return;
    const dx = e.clientX - x0; x0 = null;
    if (Math.abs(dx) > 60) go(cur + (dx < 0 ? 1 : -1));
  });

  // modals
  let opener = null;
  function openModal(id, from) {
    opener = from; const m = document.getElementById(id);
    m.hidden = false; requestAnimationFrame(() => m.classList.add('show'));
    m.querySelector('[data-close]').focus();
  }
  function closeModal() {
    document.querySelectorAll('.modal:not([hidden])').forEach(m => {
      m.classList.remove('show'); setTimeout(() => { m.hidden = true; }, 300);
    });
    if (opener) opener.focus();
  }
  document.getElementById('openPhoto').onclick = e => openModal('photoModal', e.currentTarget);
  document.querySelectorAll('.modal').forEach(m => m.addEventListener('click', e => { if (e.target === m) closeModal(); }));
  document.querySelectorAll('[data-close]').forEach(b => b.onclick = closeModal);

  // copy email
  const toast = document.getElementById('toast');
  function say(t) { toast.textContent = t; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 1800); }
  document.getElementById('copyMail').onclick = async () => {
    try { await navigator.clipboard.writeText('createbykezia@gmail.com'); say('Email copied'); }
    catch { say('Copy failed. Use the Email link instead'); }
  };

  fromHash();
})();
