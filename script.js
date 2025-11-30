// script.js — menu abre MD no viewer (integração single-page), PDFs como fallback em nova aba

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

// Helper: md href (we use relative path so fetch works on same origin)
function mdHref(mdPath){
  return mdPath;
}

/* ---------- Fonte única de documentos (use nomes EXACTOS do repositório) ----------
   - filename: PDF dentro de docs/assets/whitepaper (usado nos cards)
   - mdPath: caminho relativo para o markdown dentro do repo (usado no viewer e no menu)
   - inHero: se true, não aparece no menu (evita duplicação) */
const pdfs = [
  { id: 'whitepaper', title:'Whitepaper', desc:'Vision, architecture and philosophical foundations.', filename: "QuantumKey Protocol — Whitepaper v1.0.pdf", mdPath: 'docs/WHITEPAPER.md', inHero: true },
  { id: 'tokenomics', title:'Tokenomics', desc:'The energetic architecture of the $QKEY economy.', filename: "QuantumKey_Tokenomics_v1.0.pdf", mdPath: 'docs/architecture/Tokenomics_v0.1.md', inHero: true },
  { id: 'dao', title:'DAO', desc:'Governance model and alignment primitives.', filename:'QuantumKey_DAO_v1.0.pdf', mdPath: 'docs/architecture/DAO_Constitution_v0.1.md', inHero: false },
  { id: 'identity', title:'Identity', desc:'Identity as a field of presence and continuity.', filename:'QuantumKey_Identity_v1.0.pdf', mdPath: 'docs/architecture/Identity_Crypto_Spec_v0.1.md', inHero: false },
  { id: 'protocol', title:'Protocol', desc:'Operational mechanics of the protocol.', filename:'QuantumKey_Protocol_Core_v1.0.pdf', mdPath: 'docs/architecture/Protocol_Message_Formats_v0.1.md', inHero: false }
  // adiciona mais itens conforme necessário (exact paths)
];

/* ---------- Atualiza CTAs do hero (carrega MD no viewer quando disponível) ---------- */
function patchHeroCTAs(){
  const heroWhite = pdfs.find(p => p.id === 'whitepaper');
  const heroToken = pdfs.find(p => p.id === 'tokenomics');

  if (heroWhite) {
    const md = heroWhite.mdPath || null;
    if (md && ctaRead) {
      ctaRead.addEventListener('click', (e) => { e.preventDefault(); fetchAndRender(md); });
    } else if (ctaRead && heroWhite.filename) {
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

/* ---------- Constrói o menu: usa MD (abre no viewer) quando houver, senão abre PDF em nova aba ---------- */
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
    a.href = '#';

    if (p.mdPath) {
      // carregar MD no viewer (single-page)
      a.textContent = `${p.title} (MD)`;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        // fecha menu em mobile para melhor UX
        if (mainNav.classList.contains('mobile-open')) mainNav.classList.remove('mobile-open');
        fetchAndRender(mdHref(p.mdPath));
      });
    } else {
      // fallback para PDF (nova aba)
      a.textContent = `${p.title} (PDF)`;
      a.addEventListener('click', (e) => {
        // abrir em nova aba; deixamos o default (mas prevenimos qualquer #)
        e.preventDefault();
        window.open(assetPath('docs/assets/whitepaper', p.filename), '_blank');
      });
    }

    mainNav.appendChild(a);
  });

  // NOTE: "All docs" removido conforme pedido
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

  // View buttons — carregam MD no viewer
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
    // fechar mobile menu se aberto (melhora UX)
    if (mainNav && mainNav.classList.contains('mobile-open')) mainNav.classList.remove('mobile-open');
    window.scrollTo({ top: document.querySelector('.md-viewer').offsetTop - 80, behavior: 'smooth' });
  } catch (err) {
    viewer.innerHTML = `<div class="flash">Erro ao carregar: ${err.message}. Abre o PDF <a href="${assetPath('docs/assets/whitepaper', pdfs[0].filename)}" target="_blank" rel="noopener">aqui</a>.</div>`;
  }
}

/* ---------- Inicialização ---------- */
patchHeroCTAs();
buildMenu();
renderCards();
