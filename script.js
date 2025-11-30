// script.js — menu usa MD quando disponível; cards mostram Open PDF + View (MD)
// Mantém hero CTAs: Read Whitepaper (MD) e Tokenomics (MD se existir)

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

// Helper: github raw path for md files served from the repo via GitHub Pages
// If your site is published at qkey-founder.github.io/<repo>/, the direct path to md inside repo is relative
// We'll use relative paths (e.g. 'docs/architecture/Tokenomics_v0.1.md') so fetch works via the same host.
function mdHref(mdPath){
  // return relative path that Github Pages can serve (same origin). No change needed.
  return mdPath;
}

/* ---------- Fonte única de documentos (use nomes EXACTOS do repositório) ----------
   - filename: path do PDF dentro de docs/assets/whitepaper (apontado nos cards)
   - mdPath: path relativo do ficheiro markdown dentro do repo (quando existir) */
const pdfs = [
  { id: 'whitepaper', title:'Whitepaper', desc:'Vision, architecture and philosophical foundations.', filename: "QuantumKey Protocol — Whitepaper v1.0.pdf", mdPath: 'docs/WHITEPAPER.md', inHero: true },
  { id: 'tokenomics', title:'Tokenomics', desc:'The energetic architecture of the $QKEY economy.', filename: "QuantumKey_Tokenomics_v1.0.pdf", mdPath: 'docs/architecture/Tokenomics_v0.1.md', inHero: true },
  { id: 'dao', title:'DAO', desc:'Governance model and alignment primitives.', filename:'QuantumKey_DAO_v1.0.pdf', mdPath: 'docs/architecture/DAO_Constitution_v0.1.md', inHero: false },
  { id: 'identity', title:'Identity', desc:'Identity as a field of presence and continuity.', filename:'QuantumKey_Identity_v1.0.pdf', mdPath: 'docs/architecture/Identity_Crypto_Spec_v0.1.md', inHero: false },
  { id: 'protocol', title:'Protocol', desc:'Operational mechanics of the protocol.', filename:'QuantumKey_Protocol_Core_v1.0.pdf', mdPath: 'docs/architecture/Protocol_Message_Formats_v0.1.md', inHero: false }
  // adiciona mais itens conforme necessário (use o caminho EXACTO do ficheiro no repo)
];

/* ---------- Atualiza CTAs do hero (MD para whitepaper e tokenomics quando existir) ---------- */
function patchHeroCTAs(){
  const heroWhite = pdfs.find(p => p.id === 'whitepaper');
  const heroToken = pdfs.find(p => p.id === 'tokenomics');

  if (heroWhite) {
    const md = heroWhite.mdPath || null;
    if (md && ctaRead) {
      ctaRead.addEventListener('click', (e) => { e.preventDefault(); fetchAndRender(md); });
    } else if (ctaRead && heroWhite.filename) {
      // fallback para PDF se não houver MD
      ctaRead.addEventListener('click', (e) => { e.preventDefault(); window.open(assetPath('docs/assets/whitepaper', heroWhite.filename), '_blank'); });
    }
    const headerBtn = document.getElementById('btn-show-doc');
    if (headerBtn && md) headerBtn.onclick = (e) => { e.preventDefault(); fetchAndRender(md); };
  }

  if (heroToken) {
    const md = heroToken.mdPath || null;
    if (md && ctaTokenomics) {
      ctaTokenomics.addEventListener('click', (e) => { e.preventDefault(); fetchAndRender(md); });
      const pdfTokenomicsBtn = document.getElementById('pdf-tokenomics');
      if (pdfTokenomicsBtn) pdfTokenomicsBtn.onclick = (ev) => { ev.preventDefault(); fetchAndRender(md); };
    } else if (ctaTokenomics && heroToken.filename) {
      ctaTokenomics.href = assetPath('docs/assets/whitepaper', heroToken.filename);
    }
  }
}

/* ---------- Constrói o menu: usa MD quando houver, senão PDF
   - Não inclui itens com inHero === true (evita duplicação) ---------- */
function buildMenu(){
  if (!mainNav) return;
  mainNav.innerHTML = ''; // limpa

  const title = document.createElement('div');
  title.style.opacity = '0.95';
  title.style.fontWeight = '800';
  title.style.padding = '6px 8px';
  title.style.textAlign = 'center';
  title.textContent = 'Documents';
  mainNav.appendChild(title);

  const items = pdfs.filter(p => !p.inHero);
  items.forEach(p => {
    const a = document.createElement('a');
    a.className = 'btn-ghost';

    if (p.mdPath) {
      // usa MD (abre em nova aba); se preferires abrir no viewer, trocar target e onclick
      a.href = mdHref(p.mdPath);
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = `${p.title} (MD)`;
    } else {
      // fallback para PDF
      a.href = assetPath('docs/assets/whitepaper', p.filename);
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = `${p.title} (PDF)`;
    }

    mainNav.appendChild(a);
  });

  // Note: removido "All docs" para evitar 404
}

/* ---------- Renderiza cards (cada ficheiro apenas 1x) ----------
   - Cards mantêm Open PDF e (quando existir) View (MD) ---------- */
function renderCards(){
  const container = document.getElementById('pdf-cards');
  if (!container) return;
  container.innerHTML = '';
  const seen = new Set();

  pdfs.forEach(p => {
    if (seen.has(p.filename)) return;
    seen.add(p.filename);

    const hrefPdf = assetPath('docs/assets/whitepaper', p.filename);
    const card = document.createElement('div');
    card.className = 'card';
    const viewBtn = p.mdPath ? `<button class="view-md" data-md="${p.mdPath}">View</button>` : '';
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div style="display:flex;gap:12px;margin-top:10px;align-items:center">
        <a class="open" href="${hrefPdf}" target="_blank" rel="noopener">Open PDF</a>
        ${viewBtn}
      </div>
    `;
    container.appendChild(card);
  });

  // Attach view events (render MD into viewer)
  document.querySelectorAll('.view-md').forEach(b => {
    b.addEventListener('click', e => {
      const md = e.currentTarget.dataset.md;
      if (md) fetchAndRender(md);
    });
  });
}

/* ---------- Markdown rendering (leve) ---------- */
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
  md = md.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
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
    viewer.innerHTML = `<div class="flash">Erro ao carregar: ${err.message}. Abre o PDF <a href="${assetPath('docs/assets/whitepaper', pdfs[0].filename)}" target="_blank" rel="noopener">aqui</a>.</div>`;
  }
}

/* ---------- Inicialização ---------- */
patchHeroCTAs();
buildMenu();
renderCards();
