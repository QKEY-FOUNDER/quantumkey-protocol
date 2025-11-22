// docs/script.js
// Orbital labels + menu controller for QuantumKey
// Integrated final version — replace existing script.js

(() => {
  // --- Utilities ----------------------------------------------------------
  const q = (sel, root = document) => root.querySelector(sel);
  const def = (v, d) => (v == null ? d : v);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // --- DOM elements (will be created if missing) -------------------------
  let orbitWrap = q('#orbit-wrap');
  if (!orbitWrap) {
    orbitWrap = document.createElement('div');
    orbitWrap.id = 'orbit-wrap';
    document.body.appendChild(orbitWrap);
    orbitWrap.style.position = 'fixed';
    orbitWrap.style.left = '50%';
    orbitWrap.style.top = '50%';
    orbitWrap.style.transform = 'translate(-50%,-50%)';
    orbitWrap.style.pointerEvents = 'none';
    orbitWrap.style.width = '1px';
    orbitWrap.style.height = '1px';
    orbitWrap.style.zIndex = '35';
  }

  // find poster image with several fallbacks:
  function findPoster() {
    let el = q('#poster-thumb') || q('.poster img') || q('.poster-img') || q('.hero img') || q('img[src*="quantumkey-logo"]') || q('img');
    return el;
  }

  let poster = findPoster();

  // --- Orbit labels creation ----------------------------------------------
  const labelsText = ['Governance', 'Identity', 'Consciousness']; // order / content
  function ensureLabels() {
    // avoid duplicates
    if (orbitWrap.dataset.inited) return;
    orbitWrap.dataset.inited = '1';

    labelsText.forEach((txt, i) => {
      const lbl = document.createElement('div');
      lbl.className = 'orbit-label';
      const angle = 360 * (i / labelsText.length);
      lbl.style.setProperty('--angle', angle + 'deg');

      const inner = document.createElement('span');
      inner.textContent = txt;
      lbl.appendChild(inner);

      orbitWrap.appendChild(lbl);
    });
  }

  // --- Compute center and orbit radius ------------------------------------
  let rafPending = false;
  function computeOrbit() {
    if (!poster) poster = findPoster();
    if (!poster) return;

    ensureLabels();

    const imgRect = poster.getBoundingClientRect();

    // if image is hidden or zero size, abort
    if (imgRect.width === 0 || imgRect.height === 0) return;

    // center in viewport coordinates
    const centerX = imgRect.left + imgRect.width / 2;
    const centerY = imgRect.top + imgRect.height / 2;

    // base radius: a bit larger than half the larger dimension of the poster
    const base = Math.max(imgRect.width, imgRect.height) / 2;
    const extra = Math.max(48, base * 0.22); // give more breathing room on mobile
    let radius = Math.round(base + extra);

    // clamp to viewport sensible values
    const maxAllowed = Math.max(window.innerWidth, window.innerHeight) * 0.7;
    radius = clamp(radius, 80, Math.round(maxAllowed));

    // apply radius as CSS variable
    orbitWrap.style.setProperty('--orbit-radius', radius + 'px');

    // position orbitWrap fixed at the poster center (so it doesn't change layout)
    orbitWrap.style.position = 'fixed';
    orbitWrap.style.left = Math.round(centerX) + 'px';
    orbitWrap.style.top = Math.round(centerY) + 'px';
    orbitWrap.style.transform = 'translate(-50%,-50%)';

    // Update labels inner rotation so label text stays horizontal relative to page
    const labels = orbitWrap.querySelectorAll('.orbit-label');
    labels.forEach((el, idx) => {
      const initialAngle = parseFloat(getComputedStyle(el).getPropertyValue('--angle')) || (360 * (idx / labels.length));
      el.style.setProperty('--angle', initialAngle + 'deg');
      const span = el.querySelector('span');
      if (span) {
        span.style.transform = `rotate(calc(-1 * ${initialAngle}deg))`;
      }
    });
  }

  // debounce with rAF
  function scheduleCompute() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      rafPending = false;
      computeOrbit();
    });
  }

  // attach events
  window.addEventListener('resize', scheduleCompute, { passive: true });
  window.addEventListener('orientationchange', scheduleCompute, { passive: true });
  window.addEventListener('scroll', scheduleCompute, { passive: true });

  // initial compute after load
  window.addEventListener('load', () => {
    poster = findPoster();
    computeOrbit();
    requestAnimationFrame(() => computeOrbit());
  });

  // observe poster size changes (for lazy-loaded or responsive images)
  function watchPosterSize(p) {
    if (!p) return;
    try {
      const ro = new ResizeObserver(() => scheduleCompute());
      ro.observe(p);
    } catch (e) { /* ResizeObserver not supported */ }
  }
  watchPosterSize(poster);

  // ensure poster if added later
  (function ensurePosterLater() {
    if (!poster) {
      const mo = new MutationObserver(() => {
        poster = findPoster();
        if (poster) {
          watchPosterSize(poster);
          computeOrbit();
          mo.disconnect();
        }
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }
  })();

  // --- Menu toggle --------------------------------------------------------
  const menuBtn = q('#menu-btn') || q('.menu-btn') || q('.hamburger') || null;
  const offcanvas = q('#offcanvas-menu') || q('#menu-panel') || q('.offcanvas') || null;
  const menuClose = q('#menu-close') || q('.menu-close') || null;

  function openMenu() {
    document.body.classList.add('menu-open');
    if (offcanvas) offcanvas.classList.add('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    if (offcanvas) offcanvas.setAttribute('aria-hidden', 'false');
    scheduleCompute();
  }
  function closeMenu() {
    document.body.classList.remove('menu-open');
    if (offcanvas) offcanvas.classList.remove('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    if (offcanvas) offcanvas.setAttribute('aria-hidden', 'true');
    scheduleCompute();
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      if (expanded) closeMenu(); else openMenu();
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', (ev) => {
      ev.preventDefault();
      closeMenu();
    });
  }

  // close if click outside
  document.addEventListener('click', (ev) => {
    if (!offcanvas) return;
    if (!offcanvas.classList.contains('open')) return;
    if (!offcanvas.contains(ev.target) && !menuBtn.contains(ev.target)) {
      closeMenu();
    }
  });

  // ESC closes
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') closeMenu();
  });

  // --- Start --------------------------------------------------------------
  ensureLabels();
  scheduleCompute();

  // expose for debugging
  window.__QKEY_ORBIT = {
    computeOrbit: computeOrbit,
    orbitWrap,
    poster,
    ensureLabels
  };

})();
