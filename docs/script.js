/* script.js
 - menu toggle
 - orbit animation (keeps labels horizontal while orbiting)
 - centers on inline SVG (#poster-thumb)
*/

(function(){
  const menuBtn = document.getElementById('menu-btn');
  const menuOverlay = document.getElementById('menu-overlay');
  const menuClose = document.getElementById('menu-close');

  function openMenu(){
    menuOverlay.classList.add('show');
    menuBtn.setAttribute('aria-expanded','true');
    menuOverlay.setAttribute('aria-hidden','false');
  }
  function closeMenu(){
    menuOverlay.classList.remove('show');
    menuBtn.setAttribute('aria-expanded','false');
    menuOverlay.setAttribute('aria-hidden','true');
  }
  menuBtn && menuBtn.addEventListener('click', openMenu);
  menuClose && menuClose.addEventListener('click', closeMenu);
  // click outside menu items closes
  menuOverlay && menuOverlay.addEventListener('click', (e)=>{ if(e.target===menuOverlay) closeMenu(); });

  // Orbital labels logic
  const poster = document.getElementById('poster-thumb');
  const wrap = document.getElementById('orbital-wrap');
  if(!poster || !wrap) return; // nothing to do without poster

  // create label nodes if missing
  const labels = Array.from(wrap.querySelectorAll('.orbit-label'));

  // function to compute orbit radius and center
  function computeOrbit(){
    const rect = poster.getBoundingClientRect();
    const centerX = rect.left + rect.width/2 + window.scrollX;
    const centerY = rect.top + rect.height/2 + window.scrollY;
    // radius slightly bigger than poster radius
    const radius = Math.max(rect.width, rect.height) * 0.6 + 40; // tweak factor
    return {centerX, centerY, radius};
  }

  // position labels in DOM to be absolutely positioned relative to document
  labels.forEach((l)=>{
    l.style.position = 'absolute';
  });

  let angle = 0; // radians
  const angularSpeed = (Math.PI*2) / 12; // full rotation in 12s

  function tick(ts){
    const {centerX, centerY, radius} = computeOrbit();
    angle += angularSpeed * (1/60); // roughly per frame increment

    // distribute labels evenly or use fixed angle offsets
    const offsets = [0, (Math.PI*2)/3, (Math.PI*4)/3];

    labels.forEach((label, idx)=>{
      const a = angle + offsets[idx];
      const x = centerX + Math.cos(a) * radius;
      const y = centerY + Math.sin(a) * radius;
      // move label's center to x,y — we need half width/height
      const rect = label.getBoundingClientRect();
      const w = rect.width; const h = rect.height;
      // set position
      label.style.left = (x - w/2) + 'px';
      label.style.top = (y - h/2) + 'px';
      // rotate wrapper so it follows orbit (subtle); then counter-rotate inner text to keep horizontal
      const deg = a * 180 / Math.PI;
      label.style.transform = `rotate(${deg}deg)`;
      const span = label.querySelector('span');
      if(span) span.style.transform = `rotate(${-deg}deg)`; // counter rotate text
    });

    requestAnimationFrame(tick);
  }

  // start animation when DOM is ready and poster has size
  function startWhenReady(){
    const rect = poster.getBoundingClientRect();
    if(rect.width>10){
      requestAnimationFrame(tick);
    } else {
      // try again after a short delay
      setTimeout(startWhenReady,200);
    }
  }
  startWhenReady();

  // recompute on resize/scroll to keep center correct
  window.addEventListener('resize', ()=>{});
  window.addEventListener('scroll', ()=>{});

})();
