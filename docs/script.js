// script.js — particles + menu toggle + small entrance delays
(function(){
  // menu toggle
  const menu = document.getElementById('mainNav');
  const toggle = document.getElementById('menuToggle');
  if(toggle && menu){
    toggle.addEventListener('click', ()=> {
      menu.classList.toggle('open');
    });
  }

  // entrance stagger
  requestAnimationFrame(()=> {
    document.querySelectorAll('.fade-up').forEach((el,i)=>{
      el.style.setProperty('--delay', `${i*80}ms`);
    });
  });

  // particles canvas around logo (orbiting micro-particles)
  const canvas = document.getElementById('particles');
  if(!canvas) return;
  const ctx = canvas.getContext('2d', {alpha:true});
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = Math.max(window.innerHeight, 600);

  const center = () => {
    // center near top of hero center
    return { x: W/2, y: H/2.2 };
  };

  const rand = (a,b) => Math.random()*(b-a)+a;

  const particles = [];
  const PCOUNT = Math.min(80, Math.floor((W*H)/50000)); // scale with screen

  for(let i=0;i<PCOUNT;i++){
    const r = rand(40, 260);
    particles.push({
      angle: Math.random()*Math.PI*2,
      r: r,
      speed: rand(0.0006, 0.0025) * (Math.random()>0.5?1:-1),
      size: rand(0.6, 2.6),
      hue: rand(185,220),
      alpha: rand(0.09,0.55),
      wobble: rand(0.2,1.2)
    });
  }

  function resize(){
    W = canvas.width = window.innerWidth;
    H = canvas.height = Math.max(window.innerHeight, 600);
  }
  window.addEventListener('resize', resize);

  function draw(){
    ctx.clearRect(0,0,W,H);
    const c = center();

    // soft radial glow behind logo
    const g = ctx.createRadialGradient(c.x, c.y, 10, c.x, c.y, Math.max(W,H)/2);
    g.addColorStop(0, 'rgba(80,200,255,0.06)');
    g.addColorStop(0.25, 'rgba(40,110,180,0.04)');
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,W,H);

    // draw orbit rings (subtle)
    ctx.save();
    ctx.globalAlpha = 0.12;
    ctx.strokeStyle = 'rgba(110,240,255,0.07)';
    ctx.lineWidth = 2;
    [120,200,280].forEach((rad,i)=>{
      ctx.beginPath();
      ctx.ellipse(c.x, c.y, rad, rad*0.6, Math.sin(Date.now()/6000+i)*0.2, 0, Math.PI*2);
      ctx.stroke();
    });
    ctx.restore();

    // draw particles
    particles.forEach(p=>{
      p.angle += p.speed;
      const wob = Math.sin((Date.now()/1000)*p.wobble + p.r)*6;
      const x = c.x + Math.cos(p.angle) * (p.r + wob);
      const y = c.y + Math.sin(p.angle) * (p.r*0.6 + wob*0.6);
      // particle glow
      const rad = p.size*2.6;
      const grad = ctx.createRadialGradient(x,y,0,x,y,rad*3);
      grad.addColorStop(0, `rgba(180,230,255,${p.alpha})`);
      grad.addColorStop(0.6, `rgba(90,160,200,${p.alpha*0.25})`);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x,y,p.size,0,Math.PI*2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  // kick off
  draw();

  // small accessibility: close menu on nav click
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => {
      if(menu && menu.classList.contains('open')) menu.classList.remove('open');
    });
  });

})();
