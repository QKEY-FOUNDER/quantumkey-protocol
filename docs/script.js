/* script.js — drop into docs/script.js
   Responsibilities:
   - Draw subtle particle field (canvas)
   - Create a few orbiting "nodes" labels around the logo
   - Small UI: toggle mobile nav and smooth scroll
*/

(function(){
  // ---- NAV TOGGLE & SMOOTH SCROLL ----
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if(menuToggle && mainNav){
    menuToggle.addEventListener('click', () => {
      const open = mainNav.style.display !== 'block';
      mainNav.style.display = open ? 'block' : 'none';
      mainNav.setAttribute('aria-hidden', !open);
    });
  }

  // smooth scroll for in-page links
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });

  // ---- PARTICLE BACKGROUND ----
  const canvas = document.getElementById('particles');
  if(!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  let w = canvas.width = innerWidth;
  let h = canvas.height = innerHeight;
  const DPR = Math.max(1, window.devicePixelRatio || 1);
  canvas.width = w * DPR;
  canvas.height = h * DPR;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  ctx.scale(DPR, DPR);

  // simple particle system
  const particles = [];
  const PARTICLE_COUNT = Math.max(26, Math.floor((w*h)/90000)); // adaptive
  for(let i=0;i<PARTICLE_COUNT;i++){
    particles.push({
      x: Math.random()*w,
      y: Math.random()*h,
      vx: (Math.random()-0.5)*0.3,
      vy: (Math.random()-0.5)*0.3,
      r: 0.6 + Math.random()*2.2,
      alpha: 0.05 + Math.random()*0.9
    });
  }

  // orbit nodes around logo
  const logoPlate = document.getElementById('logo-plate');
  const orbitNodes = [
    {label:'Consciousness', angle: -0.9, dist: 220},
    {label:'Governance', angle: 0.6, dist: 220},
    {label:'Identity', angle: 2.0, dist: 220}
  ];

  let t = 0;
  function resize(){
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(DPR,0,0,DPR,0,0);
  }
  window.addEventListener('resize', resize);

  function draw(){
    t += 0.01;
    ctx.clearRect(0,0,w,h);

    // gentle vignette
    const g = ctx.createRadialGradient(w*0.5, h*0.45, Math.min(w,h)*0.2, w*0.5, h*0.45, Math.max(w,h));
    g.addColorStop(0, 'rgba(6,18,22,0.0)');
    g.addColorStop(1, 'rgba(2,6,10,0.6)');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,w,h);

    // draw particles
    for(let p of particles){
      p.x += p.vx;
      p.y += p.vy;
      if(p.x < -50) p.x = w + 50;
      if(p.x > w + 50) p.x = -50;
      if(p.y < -50) p.y = h + 50;
      if(p.y > h + 50) p.y = -50;

      ctx.beginPath();
      ctx.fillStyle = `rgba(150,220,255,${0.08 * p.alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
    }

    // glow ring behind hero logo (centred near hero area)
    const hero = document.querySelector('.hero-card');
    if(hero){
      // compute logo center
      const rect = logoPlate.getBoundingClientRect();
      const cx = rect.left + rect.width/2;
      const cy = rect.top + rect.height/2;

      // soft rings
      for(let i=1;i<=3;i++){
        ctx.beginPath();
        ctx.strokeStyle = `rgba(100,200,255,${0.06/(i*0.6)})`;
        ctx.lineWidth = 18 * i;
        ctx.globalCompositeOperation = 'lighter';
        ctx.arc(cx, cy, 120 + i*28 + Math.sin(t*1.2 + i)*6, 0, Math.PI*2);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = 'source-over';

      // orbiting nodes labels
      ctx.font = '13px Inter, system-ui, Arial';
      ctx.fillStyle = 'rgba(190,225,255,0.9)';
      ctx.textAlign = 'center';
      orbitNodes.forEach((n,i)=>{
        const ang = n.angle + t*0.35 + i*0.5;
        const x = cx + Math.cos(ang) * n.dist;
        const y = cy + Math.sin(ang) * n.dist*0.6;
        // small node dot
        ctx.beginPath();
        ctx.fillStyle = 'rgba(120,200,255,0.95)';
        ctx.arc(x, y, 4 + (i%2), 0, Math.PI*2);
        ctx.fill();
        // label
        ctx.fillStyle = 'rgba(200,230,255,0.92)';
        ctx.fillText(n.label, x + Math.cos(ang)*18, y + Math.sin(ang)*12);
      });
    }

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);

  // small accessibility: keyboard toggles menu
  document.addEventListener('keyup', e=>{
    if(e.key === 'm' || e.key === 'M'){
      if(menuToggle) menuToggle.click();
    }
  });

  // ensure canvas covers after dynamic layout changes
  const ro = new ResizeObserver(()=> resize());
  ro.observe(document.body);

  // debug console
  console.log('QuantumKey visual engine loaded');
})();
