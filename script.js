// script.js — centraliza documentos, evita duplicação, popula menu + cards + hero CTAs
// Versão atualizada: Tokenomics abre MD no viewer; "All docs" removido do menu

// DOM refs
const viewer = document.getElementById("viewer");
const flash = document.getElementById("flash");
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const ctaRead = document.getElementById("cta-read");
const ctaTokenomics = document.getElementById("cta-tokenomics");

// Mobile menu toggle
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('mobile-open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Helper: build asset path with percent-encoding
function assetPath(folder, filename){
  return `${folder}/${encodeURIComponent(filename).replace(/%2F/g,'/')}`;
}

/* ---------- Fonte única de documentos (use nomes EXACTOS do repositório) ---------- */
const pdfs = [
  { id: 'whitepaper', title:'Whitepaper', desc:'Vision, architecture and philosophical foundations.', filename: "QuantumKey Protocol — Whitepaper v1.0.pdf", mdPath: 'docs/WHITEPAPER.md', inHero: true },
  { id: 'tokenomics', title:'Tokenomics', desc:'The energetic architecture of the $QKEY economy.', filename: "QuantumKey_Tokenomics_v1.0.pdf", mdPath: 'docs/architecture/Tokenomics_v0.1.md', inHero: true },
  { id: 'dao', title:'DAO', desc:'Governance model and alignment primitives.', filename:'QuantumKey_DAO_v1.0.pdf', mdPath: null },
  { id: 'identity', title:'Identity', desc:'Identity as a field of presence and continuity.', filename:'QuantumKey_Identity_v1.0.pdf', mdPath: null },
  { id: 'protocol', title:'Protocol', desc:'Operational mechanics of the protocol.', filename:'QuantumKey_Protocol_Core_v1.0.pdf', mdPath: null }
  // adiciona mais itens aqui se preciso
];

/* ---------- Atualiza CTAs do hero a partir da fonte de verdade ---------- */
function patchHeroCTAs(){
  const heroWhite = pdfs.find(p => p.id === 'whitepaper');
  const heroToken = pdfs.find(p => p.id === 'tokenomics');

  if (heroWhite) {
    const md = heroWhite.mdPath || 'docs/WHITEPAPER.md';
    if (ctaRead) ctaRead.addEventListener('click', () => fetchAndRender(md));
    // também mantemos botão “Read Whitepaper” primário no header, se existir
    const headerBtn = document.getElementById('btn-show-doc');
    if (headerBtn) headerBtn.onclick = (e) => { e.preventDefault(); fetchAndRender(md); };
  }

  if (heroToken) {
    // NOVO: se há mdPath para tokenomics, fazemos o botão carregar o MD no viewer (como o whitepaper)
    if (heroToken.mdPath) {
      if (ctaTokenomics) {
        ctaTokenomics.addEventListener('click', (e) => {
          e.preventDefault();
          fetchAndRender(heroToken.mdPath);
        });
        // se também houver um elemento no header que aponta para tokenomics, aplica lá também
        const pdfTokenomicsBtn = document.getElementById('pdf-tokenomics');
        if (pdfTokenomicsBtn) pdfTokenomicsBtn.onclick = (ev) => { ev.preventDefault(); fetchAndRender(heroToken.mdPath); };
      }
    } else {
      // fallback: abrir PDF se não houver MD
      const href = assetPath('docs/assets/whitepaper', heroToken.filename);
      if (ctaTokenomics) ctaTokenomics.href = href;
      const pdfTokenomicsBtn = document.getElementById('pdf-tokenomics');
      if (pdfTokenomicsBtn) pdfTokenomicsBtn.href = href;
    }
  }
}

/* ---------- Constrói o menu: inclui só docs que NÃO estão no hero (inHero !== true) ---------- */
function buildMenu(){
  if (!mainNav) return;
  mainNav.innerHTML = ''; // limpa

  // título do menu
  const title = document.createElement('div');
  title.style.opacity = '0.85';
  title.style.fontWeight = '700';
  title.style.padding = '6px 8px';
  title.textContent = 'Documents';
  mainNav.appendChild(title);

  // items: todos os pdfs que não estão no hero
  const items = pdfs.filter(p => !p.inHero);
  items.forEach(p => {
    const a = document.createElement('a');
    a.className = 'btn-ghost';
    a.href = assetPath('docs/assets/whitepaper', p.filename);
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = `${p.title} (PDF)`;
    mainNav.appendChild(a);
  });

  // NOTE: removido o link "All docs" para evitar 404 — conforme pedido
}

/* ---------- Renderiza cards (cada ficheiro apenas 1x) ---------- */
function renderCards(){
  const container = document.getElementById('pdf-cards');
  if (!container) return;
  container.innerHTML = '';
  const seen = new Set();

  pdfs.forEach(p => {
    if (seen.has(p.filename)) return;
    seen.add(p.filename);

    const href = assetPath('docs/assets/whitepaper', p.filename);
    const card = document.createElement('div');
    card.className = 'card';
    const viewBtn = p.mdPath ? `<button class="view-md" data-md="${p.mdPath}">View</button>` : '';
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div style="display:flex;gap:12px;margin-top:10px;align-items:center">
        <a class="open" href="${href}" target="_blank" rel="noopener">Open PDF</a>
        ${viewBtn}
      </div>
    `;
    container.appendChild(card);
  });

  // View buttons
  document.querySelectorAll('.view-md').forEach(b => {
    b.addEventListener('click', e => {
      const md = e.currentTarget.dataset.md;
      if (md) fetchAndRender(md);
    });
  });
}

/* ---------- Markdown rendering (lightweight) ---------- */
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

/* ---------- Fetch + render ---------- */
async function fetchAndRender(path){
  if (!viewer) return;
  viewer.innerHTML = `A carregar ${path} ...`;
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const txt = await res.text();
    viewer.innerHTML = mdToHtml(txt);
    if (flash) flash.style.display = 'none';
    window.scrollTo({ top: document.querySelector('.md-viewer').offsetTop - 80, behavior: 'smooth' });
  } catch (err) {
    viewer.innerHTML = `<div class="flash">Erro ao carregar: ${err.message}. Abre o PDF <a href="${assetPath('docs/assets/whitepaper', pdfs[0].filename)}" target="_blank">aqui</a>.</div>`;
  }
}

/* ---------- Inicialização ---------- */
patchHeroCTAs();
buildMenu();
renderCards();
