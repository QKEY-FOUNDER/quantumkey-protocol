// script.js — menu mobile + loader de markdown + geração de cartões

const viewer = document.getElementById("viewer");
const flash = document.getElementById("flash");
const btnShow = document.getElementById("btn-show-doc");
const pdfLink = document.querySelector('a[href*="Whitepaper"]') || null;
const ctaRead = document.getElementById("cta-read");

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
if(menuToggle){
  menuToggle.addEventListener('click', ()=>{
    if(mainNav.style.display === 'flex') mainNav.style.display = 'none';
    else mainNav.style.display = 'flex';
  });
}

// Lightweight markdown -> HTML (keeps it simple)
function mdToHtml(md){
  md = md.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  md = md.replace(/```([\s\S]*?)```/g, (_, code) => `<pre class="code-block">${code}</pre>`);
  md = md.replace(/^###### (.*$)/gim,'<h6>$1</h6>');
  md = md.replace(/^##### (.*$)/gim,'<h5>$1</h5>');
  md = md.replace(/^#### (.*$)/gim,'<h4>$1</h4>');
  md = md.replace(/^### (.*$)/gim,'<h3>$1</h3>');
  md = md.replace(/^## (.*$)/gim,'<h2>$1</h2>');
  md = md.replace(/^# (.*$)/gim,'<h1>$1</h1>');
  md = md.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
  md = md.replace(/\*(.*?)\*/g,'<em>$1</em>');
  md = md.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank">$1</a>');
  md = md.replace(/^- (.*)$/gim,'<li>$1</li>');
  md = md.replace(/(<li>.*<\/li>)/gms,'<ul>$1</ul>');
  md = md.replace(/\n{2,}/g,'</p><p>');
  return `<p>${md}</p>`;
}

async function fetchAndRender(path){
  viewer.innerHTML = `A carregar ${path} ...`;
  try{
    const res = await fetch(path);
    if(!res.ok) throw new Error('HTTP '+res.status);
    const text = await res.text();
    viewer.innerHTML = mdToHtml(text);
    flash.style.display = 'none';
    window.scrollTo({top: document.querySelector('.md-viewer').offsetTop - 80, behavior:'smooth'});
  }catch(err){
    viewer.innerHTML = `<div class="flash">Erro ao carregar: ${err.message}. Abre o PDF <a href="${pdfLink ? pdfLink.href : '#'}" target="_blank">aqui</a>.</div>`;
  }
}

// Buttons actions
if(btnShow) btnShow.addEventListener('click', ()=> fetchAndRender('docs/WHITEPAPER.md'));
if(ctaRead) ctaRead.addEventListener('click', ()=> fetchAndRender('docs/WHITEPAPER.md'));

// Generate PDF cards (customise list here)
const pdfs = [
  {title:'Whitepaper', desc:'Vision, architecture and philosophical foundations.', href:'docs/assets/whitepaper/QuantumKey%20Protocol%20--%20Whitepaper%20v1.0.pdf'},
  {title:'Tokenomics', desc:'The energetic architecture of the $QKEY economy.', href:'docs/assets/whitepaper/QuantumKey_Tokenomics_v1.0.pdf'},
  {title:'DAO', desc:'Governance model and alignment primitives.', href:'docs/assets/whitepaper/QuantumKey_DAO_v1.0.pdf'},
  {title:'Identity', desc:'Identity as a field of presence and continuity.', href:'docs/assets/whitepaper/QuantumKey_Identity_v1.0.pdf'},
  {title:'Protocol', desc:'Operational mechanics of the protocol.', href:'docs/assets/whitepaper/QuantumKey_Protocol_Core_v1.0.pdf'}
];

function renderCards(){
  const container = document.getElementById('pdf-cards');
  if(!container) return;
  container.innerHTML = '';
  pdfs.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><div><a class="open" href="${p.href}" target="_blank" rel="noopener">Open PDF</a> <button data-md="${p.href.replace('/assets/whitepaper','/WHITEPAPER.md')}" class="open-md">View in site</button></div>`;
    container.appendChild(card);
  });

  // attach event to view in-site (try to fetch any associated MD if path exists)
  document.querySelectorAll('.open-md').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const href = e.currentTarget.dataset.md;
      // if user clicked "View in site", try to load the whitepaper MD fallback
      fetchAndRender('docs/WHITEPAPER.md');
    });
  });
}

renderCards();
