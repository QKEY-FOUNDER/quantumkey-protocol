// docs/script.js
// Orbital labels — versão corrigida:
// - orbit-wrap é um ponto (0x0) fixado no centro do poster
// - cada label: rotate(angle) translateX(radius)  --> orbita corretamente
// - inner span: counter-rotate para manter texto horizontal
// - fallback para inline SVG se <img> falhar
// - menu off-canvas e header protegidos

(() => {
  'use strict';

  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));

  // CONFIG
  const LABELS = ['Governance', 'Identity', 'Consciousness'];
  const DEGREES_PER_SEC = 20; // velocidade global (ajusta para mais/menos)
  const EXTRA_RADIUS_FACTOR = 0.26;
  const MIN_RADIUS = 110;
  const MAX_VIEWPORT_FRACTION = 0.75;

  // DOM
  let orbitWrap = document.getElementById('orbit-wrap');
  if (!orbitWrap) {
    orbitWrap = document.createElement('div');
    orbitWrap.id = 'orbit-wrap';
    document.body.appendChild(orbitWrap);
  }

  // style básico (em caso de CSS não carregado)
  orbitWrap.style.position = 'fixed';
  orbitWrap.style.width = '0px';
  orbitWrap.style.height = '0px';
  orbitWrap.style.left = '0px';
  orbitWrap.style.top = '0px';
  orbitWrap.style.pointerEvents = 'none';
  orbitWrap.style.zIndex = '40';
  orbitWrap.style.transform = 'translate(-50%,-50%)';

  // header z-index safety
  const header = document.querySelector('.site-header');
  if (header) header.style.zIndex = 60;

  // encontra poster preferencialmente com id poster-thumb; fallback para primeira imagem
  function findPoster() {
    return document.getElementById('poster-thumb') ||
           document.querySelector('.poster-img') ||
           document.querySelector('.hero img') ||
           document.querySelector('img[src*="quantumkey-logo"]') ||
           document.querySelector('img');
  }

  let poster = findPoster();

  // assegurar que observamos o poster e tentamos inline SVG se <img> falhar
  function ensurePoster(p) {
    if (!p) return;
    if (p.tagName && p.tagName.toLowerCase() === 'img') {
      p.addEventListener('error', async () => {
        try {
          const src = p.getAttribute('src');
          if (!src) return;
          const res = await fetch(src);
          if (!res.ok) return;
          const text = await res.text();
          if (text.trim().startsWith('<svg')) {
            const temp = document.createElement('div');
            temp.innerHTML = text;
            const svg = temp.querySelector('svg');
            if (svg) {
              svg.id = 'poster-thumb';
              svg.classList.add('poster-img');
              p.replaceWith(svg);
              poster = svg;
              observePosterSize(poster);
              computeAndPosition();
            }
          }
        } catch (e) {
          console.warn('SVG inline fallback failed', e);
        }
      }, { once: true });

      if (p.complete) observePosterSize(p);
      else p.addEventListener('load', () => observePosterSize(p), { once: true });
    } else {
      observePosterSize(p);
    }
  }

  // Criar labels (limpa antes)
  function createLabels() {
    orbitWrap.innerHTML = '';
    LABELS.forEach((text, i) => {
      const label = document.createElement('div');
      label.className = 'orbit-label';
      label.dataset.base = String(360 * (i / LABELS.length));
      label.style.position = 'absolute';
      label.style.left = '0px';
      label.style.top = '0px';
      label.style.transformOrigin = '0 50%';
      label.style.pointerEvents = 'auto'; // permitir toque
      const span = document.createElement('span');
      span.className = 'orbit-label-inner';
      span.textContent = text;
      label.appendChild(span);
      orbitWrap.appendChild(label);
    });
  }

  // ResizeObserver para poster se disponível
  let ro = null;
  function observePosterSize(el) {
    try {
      if (ro) ro.disconnect();
      ro = new ResizeObserver(() => computeAndPosition());
      ro.observe(el);
    } catch (e) {
      // fallback: nada (usamos window resize)
    }
  }

  // compute center and radius
  let cached = { cx: 0, cy: 0, r: 180 };
  function computeParams() {
    poster = poster || findPoster();
    if (!poster) return cached;
    const rect = poster.getBoundingClientRect();
    if (!rect.width || !rect.height) return cached;

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const base = Math.max(rect.width, rect.height) / 2;
    const extra = Math.max(48, base * EXTRA_RADIUS_FACTOR);
    let r = Math.round(base + extra);

    const maxAllowed = Math.round(Math.max(window.innerWidth, window.innerHeight) * MAX_VIEWPORT_FRACTION);
    r = Math.max(MIN_RADIUS, Math.min(r, maxAllowed));

    cached = { cx, cy, r };
    return cached;
  }

  function computeAndPosition() {
    const { cx, cy, r } = computeParams();
    orbitWrap.style.left = `${Math.round(cx)}px`;
    orbitWrap.style.top = `${Math.round(cy)}px`;
    orbitWrap.style.setProperty('--orbit-radius', `${r}px`);
  }

  // animation loop
  let running = false;
  let start = null;
  function frame(ts) {
    if (!start) start = ts;
    const elapsed = (ts - start) / 1000;
    const globalDeg = (DEGREES_PER_SEC * elapsed) % 360;
    const { r } = computeParams();

    const labels = orbitWrap.querySelectorAll('.orbit-label');
    labels.forEach((el, idx) => {
      const base = parseFloat(el.dataset.base || (360 * (idx / labels.length)));
      const angle = (base + globalDeg) % 360;
      // rotate then translateX(radius) -> orbits correctly around origin point (0,0)
      el.style.transform = `rotate(${angle}deg) translateX(${r}px)`;
      const span = el.querySelector('.orbit-label-inner');
      if (span) {
        // counter rotate so text stays horizontal
        span.style.transform = `rotate(${-angle}deg)`;
        span.style.transformOrigin = 'center center';
      }
    });

    // ensure wrap is positioned in case of scroll
    computeAndPosition();

    if (running) requestAnimationFrame(frame);
  }
  function startAnim() { if (!running) { running = true; start = null; requestAnimationFrame(frame); } }
  function stopAnim() { running = false; }

  // Menu simple control preserved
  const menuBtn = document.getElementById('menu-btn');
  const offcanvas = document.getElementById('offcanvas-menu');
  const menuClose = document.getElementById('menu-close');

  function openMenu() {
    if (offcanvas) offcanvas.classList.add('open');
    document.body.classList.add('menu-open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    if (offcanvas) offcanvas.classList.remove('open');
    document.body.classList.remove('menu-open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  }
  if (menuBtn) menuBtn.addEventListener('click', e => { e.preventDefault(); (menuBtn.getAttribute('aria-expanded') === 'true') ? closeMenu() : openMenu(); });
  if (menuClose) menuClose.addEventListener('click', e => { e.preventDefault(); closeMenu(); });

  document.addEventListener('click', (ev) => {
    if (!offcanvas || !offcanvas.classList.contains('open')) return;
    if (!offcanvas.contains(ev.target) && !menuBtn.contains(ev.target)) closeMenu();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  // Observe DOM for poster if not present yet
  if (!poster) {
    const mo = new MutationObserver(() => {
      poster = findPoster();
      if (poster) {
        ensurePoster(poster);
        createLabels();
        computeAndPosition();
        startAnim();
        mo.disconnect();
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
  } else {
    ensurePoster(poster);
    createLabels();
    computeAndPosition();
    startAnim();
  }

  // re-compute on resize/scroll/orientation
  window.addEventListener('resize', computeAndPosition, { passive: true });
  window.addEventListener('orientationchange', computeAndPosition, { passive: true });
  window.addEventListener('scroll', computeAndPosition, { passive: true });

  // expose debug handle
  window.__QKEY = window.__QKEY || {};
  window.__QKEY.orbitDebug = { computeParams, startAnim, stopAnim, orbitWrap };

})();
