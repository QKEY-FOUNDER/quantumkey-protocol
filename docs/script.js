// script.js
// particles (dust), orbit labels and connecting lines
document.addEventListener('DOMContentLoaded', ()=> {
  const canvas = document.querySelector('.dust');
  const ctx = canvas.getContext('2d', { alpha: true });
  let w=0,h=0, particles=[];

  function resize(){ 
    const r = canvas.getBoundingClientRect();
    w = canvas.width = Math.round(r.width * devicePixelRatio);
    h = canvas.height = Math.round(r.height * devicePixelRatio);
    ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
  }
  window.addEventListener('resize', resize);
  resize();

  // simple particles
  function initParticles(n=80){
    particles = [];
    for(let i=0;i<n;i++){
      particles.push({
        x: Math.random()*w,
        y: Math.random()*h,
        r: Math.random()*1.6 + 0.2,
        vx: (Math.random()-0.5)*0.2,
        vy: (Math.random()-0.5)*0.2,
        alpha: 0.08 + Math.random()*0.22
      });
    }
  }
  initParticles(100);

  function tickParticles(){
    ctx.clearRect(0,0,w,h);
    ctx.globalCompositeOperation = 'lighter';
    for(const p of particles){
      p.x += p.vx;
      p.y += p.vy;
      if(p.x < -10) p.x = w + 10;
      if(p.x > w+10) p.x = -10;
      if(p.y < -10) p.y = h + 10;
      if(p.y > h+10) p.y = -10;

      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r*12);
      grad.addColorStop(0, `rgba(140,220,255,${p.alpha})`);
      grad.addColorStop(1, `rgba(140,220,255,0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r*8, 0, Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(tickParticles);
  }
  tickParticles();

  // --- orbit labels & lines ---
  const labels = [
    'Consciousness','Trust','Governance','Tokenomics','Identity','Design','Security'
  ];

  const svgNS = "http://www.w3.org/2000/svg";
  const orbitLabelsGroup = document.getElementById('orbit-labels');
  const orbitLinesGroup = document.getElementById('orbit-lines');

  // center in svg coordinates: we used viewBox -300..300
  const center = { x: 0, y: 0 };

  // create label elements placed in circle
  const radius = 190;
  labels.forEach((txt, i)=>{
    const angle = (i/labels.length) * Math.PI * 2 - Math.PI/2; // start top
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    // dot
    const dot = document.createElementNS(svgNS, 'circle');
    dot.setAttribute('cx', x.toFixed(1));
    dot.setAttribute('cy', y.toFixed(1));
    dot.setAttribute('r', 4);
    dot.setAttribute('class', 'orbit-dot');

    // label text
    const t = document.createElementNS(svgNS, 'text');
    t.setAttribute('x', (x + Math.sign(x)*18).toFixed(1));
    t.setAttribute('y', (y + 6).toFixed(1));
    t.setAttribute('class', 'orbit-label');
    t.textContent = txt;

    // connecting line
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', x.toFixed(1));
    line.setAttribute('y1', y.toFixed(1));
    line.setAttribute('x2', center.x.toFixed(1));
    line.setAttribute('y2', center.y.toFixed(1));
    line.setAttribute('stroke', 'rgba(0,180,255,0.08)');
    line.setAttribute('stroke-width', '1.8');
    line.setAttribute('stroke-linecap','round');

    orbitLinesGroup.appendChild(line);
    orbitLabelsGroup.appendChild(dot);
    orbitLabelsGroup.appendChild(t);

    // subtle orbiting animation via transform
    const animDur = 22000 + i*1200;
    t.style.transition = `transform ${animDur}ms linear`;
    dot.style.transition = `transform ${animDur}ms linear`;
    line.style.transition = `transform ${animDur}ms linear`;
  });

  // rotate group slowly
  let rotation = 0;
  function rotateOrbit(){
    rotation += 0.02; // speed
    orbitLinesGroup.setAttribute('transform', `rotate(${rotation})`);
    orbitLabelsGroup.setAttribute('transform', `rotate(${rotation})`);
    requestAnimationFrame(rotateOrbit);
  }
  rotateOrbit();

  // pause rotation on hover over logo
  const logoFrame = document.getElementById('logo-frame');
  let paused = false;
  logoFrame.addEventListener('pointerenter', ()=>{ paused = true; });
  logoFrame.addEventListener('pointerleave', ()=>{ paused = false; });

  // modify rotation loop with pause
  (function rotateLoop(){
    if(!paused) rotation += 0.02;
    orbitLinesGroup.setAttribute('transform', `rotate(${rotation})`);
    orbitLabelsGroup.setAttribute('transform', `rotate(${rotation})`);
    requestAnimationFrame(rotateLoop);
  })();

  // responsive fix: recompute particle canvas on resize
  window.addEventListener('orientationchange', ()=> { resize(); initParticles(100); });

  // accessibility: reduce animations if user prefers reduced motion
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if(mq.matches){
    // stop particle animation & orbit rotate
    particles = [];
  }
});
