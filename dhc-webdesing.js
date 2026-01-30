import React, { useMemo, useState } from "react";

/**
 * App.jsx — Landing page estilo Framer (estrutura: Home/About/Portfolio/FAQ/Contact)
 * - Sem dependências externas
 * - CSS inline no próprio arquivo
 * - Responsivo + menu mobile
 */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "portfolio", label: "Portfolio" },
      { id: "faq", label: "FAQ" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const portfolioItems = useMemo(
    () => [
      {
        title: "Landing Page — SaaS",
        desc: "Página focada em conversão com CTA, prova social e seções claras.",
        tag: "Web Design",
      },
      {
        title: "Site Institucional — Logistics",
        desc: "Estrutura enxuta com performance e SEO básico para ranqueamento.",
        tag: "Website",
      },
      {
        title: "Dashboard — Internal Tool",
        desc: "UI limpa com cards, tabelas e filtros para operação diária.",
        tag: "UI/UX",
      },
      {
        title: "E-commerce — Catalog",
        desc: "Grid de produtos, páginas de detalhes e CTA de checkout.",
        tag: "E-commerce",
      },
      {
        title: "Portfolio — Personal",
        desc: "Projetos, depoimentos e contato com layout moderno.",
        tag: "Brand",
      },
      {
        title: "Landing — Lead Gen",
        desc: "Formulário e copy focados em geração de leads.",
        tag: "Marketing",
      },
    ],
    []
  );

  const faqItems = useMemo(
    () => [
      {
        q: "Quanto tempo leva para entregar um site como esse?",
        a: "Depende do escopo. Uma landing simples costuma levar poucos dias, e versões com mais páginas/integrações levam mais.",
      },
      {
        q: "Você entrega com domínio e hospedagem funcionando?",
        a: "Sim. Posso orientar o deploy (Vercel/Netlify) ou gerar build para seu servidor. Se usar cPanel, também dá.",
      },
      {
        q: "Dá para integrar com API/CRM/WhatsApp?",
        a: "Sim. A camada de frontend pode consumir sua API e integrar com serviços (ex.: CRM) via endpoints.",
      },
      {
        q: "O layout é totalmente customizável?",
        a: "Sim. Cores, tipografia, seções e animações podem ser ajustadas para sua marca.",
      },
    ],
    []
  );

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }

  return (
    <>
      <style>{css}</style>

      <div className="bg" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="grid" />
      </div>

      <header className="header">
        <div className="container headerRow">
          <div className="brand" onClick={() => scrollTo("home")} role="button" tabIndex={0}>
            <span className="brandDot" />
            <span className="brandText">LANDIN</span>
          </div>

          <nav className="nav desktop">
            {sections.map((s) => (
              <button key={s.id} className="navLink" onClick={() => scrollTo(s.id)}>
                {s.label}
              </button>
            ))}
            <button className="btn primary" onClick={() => scrollTo("contact")}>
              Get in touch
            </button>
          </nav>

          <div className="mobile">
            <button className="iconBtn" onClick={() => setMenuOpen((v) => !v)} aria-label="Open menu">
              <span className="hamburger" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobileMenu">
            <div className="container mobileMenuInner">
              {sections.map((s) => (
                <button key={s.id} className="mobileLink" onClick={() => scrollTo(s.id)}>
                  {s.label}
                </button>
              ))}
              <button className="btn primary full" onClick={() => scrollTo("contact")}>
                Get in touch
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="section hero">
          <div className="container heroGrid">
            <div>
              <div className="pill">Framer-style • React • Responsive</div>
              <h1 className="h1">
                Build modern landing pages
                <span className="grad"> that convert</span>.
              </h1>
              <p className="lead">
                Uma base em React com visual “Framer-like”: tipografia forte, cards clean, fundo com glow e seções bem
                definidas. Perfeito para agência, portfólio ou produto.
              </p>

              <div className="actions">
                <button className="btn primary" onClick={() => scrollTo("portfolio")}>
                  View work
                </button>
                <button className="btn ghost" onClick={() => scrollTo("about")}>
                  Learn more
                </button>
              </div>

              <div className="stats">
                <Stat label="Pages" value="5+" />
                <Stat label="Sections" value="12+" />
                <Stat label="Components" value="Reusable" />
              </div>
            </div>

            <div className="heroCard">
              <div className="heroCardTop">
                <div className="dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="miniPill">Preview</div>
              </div>

              <div className="preview">
                <div className="previewRow">
                  <div className="previewKpi">
                    <div className="kpiTitle">Conversion</div>
                    <div className="kpiValue">+32%</div>
                  </div>
                  <div className="previewKpi">
                    <div className="kpiTitle">Speed</div>
                    <div className="kpiValue">A+</div>
                  </div>
                </div>

                <div className="previewCard">
                  <div className="pcTitle">Why this layout works</div>
                  <ul className="pcList">
                    <li>Hero claro com CTA</li>
                    <li>Cards e grids consistentes</li>
                    <li>FAQ para reduzir objeções</li>
                    <li>Contato direto</li>
                  </ul>
                </div>

                <div className="previewBar">
                  <div className="barFill" />
                </div>
                <div className="previewHint">Scroll sections • Clean UI • Simple code</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2 className="h2">About</h2>
              <p className="muted">
                Seções pensadas para “agência/portfólio”: mensagem direta, confiança e prova visual.
              </p>
            </div>

            <div className="cards3">
              <Card
                title="Design limpo"
                desc="Estética moderna: contraste, grid, blur/glow no fundo e componentes consistentes."
              />
              <Card
                title="Código simples"
                desc="Componentes pequenos, sem bibliotecas obrigatórias. Fácil de adaptar e manter."
              />
              <Card
                title="Pronto para integrar"
                desc="Formulário e fluxos prontos para plugar em API, CRM, WhatsApp ou e-mail."
              />
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="section">
          <div className="container">
            <div className="sectionHead row">
              <div>
                <h2 className="h2">Portfolio</h2>
                <p className="muted">Grid responsivo para projetos. Troque os itens pelo seu conteúdo real.</p>
              </div>
              <button className="btn ghost" onClick={() => scrollTo("contact")}>
                Request a quote
              </button>
            </div>

            <div className="gridCards">
              {portfolioItems.map((it, idx) => (
                <div key={idx} className="workCard">
                  <div className="workTop">
                    <span className="tag">{it.tag}</span>
                    <span className="chip">Case</span>
                  </div>
                  <div className="workTitle">{it.title}</div>
                  <div className="workDesc">{it.desc}</div>
                  <div className="workFoot">
                    <button className="linkBtn" onClick={() => scrollTo("contact")}>
                      See details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2 className="h2">FAQ</h2>
              <p className="muted">Acordeão simples, sem libs. Ajuda a diminuir dúvidas antes do contato.</p>
            </div>

            <div className="faq">
              {faqItems.map((it, i) => (
                <FaqItem key={i} q={it.q} a={it.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="container contactGrid">
            <div>
              <h2 className="h2">Contact</h2>
              <p className="muted">
                Quer que eu adapte isso para sua marca (cores, textos, projetos e integrações)? Preencha e eu te devolvo
                um plano.
              </p>

              <div className="contactInfo">
                <InfoLine label="E-mail" value="seuemail@dominio.com" />
                <InfoLine label="WhatsApp" value="+55 (00) 00000-0000" />
                <InfoLine label="Prazo" value="De 2 a 10 dias (dependendo do escopo)" />
              </div>
            </div>

            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form enviado (demo). Integre com sua API aqui.");
              }}
            >
              <div className="formRow">
                <label>
                  Name
                  <input required placeholder="Seu nome" />
                </label>
                <label>
                  Company
                  <input placeholder="Sua empresa" />
                </label>
              </div>

              <label>
                Email
                <input required type="email" placeholder="seuemail@dominio.com" />
              </label>

              <label>
                Message
                <textarea required rows={5} placeholder="Me diga o que você precisa (site, landing, integração, etc.)" />
              </label>

              <button className="btn primary full" type="submit">
                Send message
              </button>

              <p className="tiny muted">
                Dica: troque o <code>alert</code> por um <code>fetch</code> para sua API (ou Formspree/Resend/etc.).
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footRow">
          <div className="footBrand">
            <span className="brandDot" />
            <span className="brandText">LANDIN</span>
          </div>
          <div className="footLinks">
            <button className="navLink" onClick={() => scrollTo("home")}>
              Home
            </button>
            <button className="navLink" onClick={() => scrollTo("portfolio")}>
              Portfolio
            </button>
            <button className="navLink" onClick={() => scrollTo("contact")}>
              Contact
            </button>
          </div>
          <div className="tiny muted">© {new Date().getFullYear()} — Built in React</div>
        </div>
      </footer>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <div className="statValue">{value}</div>
      <div className="statLabel">{label}</div>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      <div className="cardDesc">{desc}</div>
    </div>
  );
}

function InfoLine({ label, value }) {
  return (
    <div className="infoLine">
      <div className="infoLabel">{label}</div>
      <div className="infoValue">{value}</div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faqItem ${open ? "open" : ""}`}>
      <button className="faqQ" onClick={() => setOpen((v) => !v)} type="button">
        <span>{q}</span>
        <span className="faqIcon">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="faqA">{a}</div>}
    </div>
  );
}

const css = `
:root{
  --bg:#070A10;
  --card: rgba(255,255,255,.06);
  --card2: rgba(255,255,255,.08);
  --stroke: rgba(255,255,255,.12);
  --text: rgba(255,255,255,.92);
  --muted: rgba(255,255,255,.68);
  --muted2: rgba(255,255,255,.50);
  --accent: #7C5CFF;
  --accent2:#00D4FF;
  --shadow: 0 18px 60px rgba(0,0,0,.55);
  --radius: 18px;
  --radius2: 22px;
  --max: 1120px;
}

*{ box-sizing: border-box; }
html,body{ height:100%; }
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  background: var(--bg);
  color: var(--text);
  overflow-x:hidden;
}

button, input, textarea{
  font-family: inherit;
}

.bg{
  position: fixed;
  inset: 0;
  z-index: -5;
  pointer-events:none;
}
.grid{
  position:absolute;
  inset:0;
  background-image:
    linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: .18;
  mask-image: radial-gradient(circle at 30% 20%, black 0%, black 35%, transparent 70%);
}
.blob{
  position:absolute;
  width: 650px;
  height: 650px;
  filter: blur(55px);
  opacity: .35;
  border-radius: 999px;
}
.b1{
  left:-180px;
  top:-200px;
  background: radial-gradient(circle at 30% 30%, var(--accent) 0%, transparent 55%);
}
.b2{
  right:-220px;
  bottom:-220px;
  background: radial-gradient(circle at 50% 40%, var(--accent2) 0%, transparent 55%);
}

.container{
  width: min(var(--max), calc(100% - 48px));
  margin: 0 auto;
}

.header{
  position: sticky;
  top:0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background: rgba(7,10,16,.55);
  border-bottom: 1px solid rgba(255,255,255,.08);
}
.headerRow{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 14px 0;
}
.brand{
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
  user-select:none;
}
.brandDot{
  width: 12px;
  height: 12px;
  border-radius:999px;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  box-shadow: 0 0 0 6px rgba(124,92,255,.14);
}
.brandText{
  font-weight: 700;
  letter-spacing: .28em;
  font-size: 12px;
  opacity: .9;
}

.nav{
  display:flex;
  align-items:center;
  gap: 14px;
}
.navLink{
  border:0;
  background: transparent;
  color: var(--muted);
  padding: 10px 10px;
  border-radius: 12px;
  cursor:pointer;
  transition: background .15s ease, color .15s ease;
}
.navLink:hover{
  background: rgba(255,255,255,.06);
  color: var(--text);
}
.btn{
  border: 1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.06);
  color: var(--text);
  padding: 10px 14px;
  border-radius: 14px;
  cursor:pointer;
  transition: transform .05s ease, background .15s ease, border .15s ease;
}
.btn:active{ transform: translateY(1px); }
.btn.primary{
  border-color: rgba(124,92,255,.40);
  background: linear-gradient(135deg, rgba(124,92,255,.85), rgba(0,212,255,.55));
}
.btn.ghost{
  background: rgba(255,255,255,.02);
}
.btn.full{ width:100%; }

.desktop{ display:flex; }
.mobile{ display:none; }
.iconBtn{
  border: 1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.06);
  width: 44px;
  height: 44px;
  border-radius: 14px;
  cursor:pointer;
}
.hamburger{
  display:block;
  width: 18px;
  height: 2px;
  margin: 0 auto;
  background: var(--text);
  position: relative;
  opacity:.9;
}
.hamburger:before,
.hamburger:after{
  content:"";
  position:absolute;
  left:0;
  width: 18px;
  height:2px;
  background: var(--text);
}
.hamburger:before{ top:-6px; }
.hamburger:after{ top:6px; }

.mobileMenu{
  border-top: 1px solid rgba(255,255,255,.08);
  background: rgba(7,10,16,.75);
  backdrop-filter: blur(12px);
}
.mobileMenuInner{
  padding: 14px 0 18px;
  display:flex;
  flex-direction:column;
  gap: 8px;
}
.mobileLink{
  text-align:left;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.04);
  color: var(--text);
  padding: 12px 14px;
  border-radius: 14px;
  cursor:pointer;
}

.section{
  padding: 84px 0;
}
.hero{
  padding-top: 64px;
}
.heroGrid{
  display:grid;
  gap: 28px;
  grid-template-columns: 1.15fr .85fr;
  align-items: center;
}
.pill{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.04);
  color: var(--muted);
  font-size: 13px;
}
.h1{
  margin: 16px 0 12px;
  font-size: clamp(34px, 4.6vw, 56px);
  line-height: 1.02;
  letter-spacing: -0.03em;
}
.grad{
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  background-clip:text;
  color: transparent;
}
.lead{
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.6;
  max-width: 56ch;
}
.actions{
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 18px 0 26px;
}
.stats{
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
}
.stat{
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.04);
  min-width: 140px;
}
.statValue{
  font-weight: 800;
  letter-spacing: -0.02em;
}
.statLabel{
  color: var(--muted2);
  font-size: 12px;
  margin-top: 6px;
}

.heroCard{
  border-radius: var(--radius2);
  border: 1px solid rgba(255,255,255,.12);
  background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
  box-shadow: var(--shadow);
  overflow:hidden;
}
.heroCardTop{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 14px 14px;
  border-bottom: 1px solid rgba(255,255,255,.10);
}
.dots{ display:flex; gap:8px; }
.dots span{
  width:10px;height:10px;border-radius:999px;
  background: rgba(255,255,255,.18);
}
.miniPill{
  font-size:12px;
  color: var(--muted);
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.04);
}
.preview{ padding: 16px; }
.previewRow{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.previewKpi{
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.04);
  padding: 12px 12px;
}
.kpiTitle{ font-size: 12px; color: var(--muted2); }
.kpiValue{ font-size: 20px; font-weight: 800; letter-spacing: -0.02em; margin-top: 4px; }
.previewCard{
  margin-top: 12px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  padding: 12px 12px;
}
.pcTitle{ font-weight: 700; }
.pcList{
  margin: 10px 0 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.6;
}
.previewBar{
  height: 10px;
  border-radius: 999px;
  background: rgba(255,255,255,.08);
  margin-top: 12px;
  overflow:hidden;
}
.barFill{
  height:100%;
  width: 68%;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  border-radius: 999px;
}
.previewHint{
  margin-top: 10px;
  color: var(--muted2);
  font-size: 12px;
}

.sectionHead{
  display:flex;
  flex-direction:column;
  gap: 8px;
  margin-bottom: 18px;
}
.sectionHead.row{
  flex-direction:row;
  align-items:flex-end;
  justify-content:space-between;
  gap: 12px;
}
.h2{
  margin: 0;
  font-size: 28px;
  letter-spacing: -0.02em;
}
.muted{
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.cards3{
  display:grid;
  gap: 14px;
  grid-template-columns: repeat(3, 1fr);
}
.card{
  border-radius: var(--radius);
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.04);
  padding: 16px;
}
.cardTitle{ font-weight: 800; letter-spacing: -0.01em; }
.cardDesc{ color: var(--muted); margin-top: 8px; line-height: 1.6; }

.gridCards{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.workCard{
  border-radius: var(--radius);
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.04);
  padding: 16px;
  transition: transform .12s ease, background .15s ease, border .15s ease;
}
.workCard:hover{
  transform: translateY(-2px);
  background: rgba(255,255,255,.06);
  border-color: rgba(255,255,255,.18);
}
.workTop{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom: 10px;
}
.tag{
  font-size: 12px;
  color: var(--muted);
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
}
.chip{
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  color: var(--muted2);
}
.workTitle{ font-weight: 800; letter-spacing: -0.01em; margin-top: 8px; }
.workDesc{ color: var(--muted); margin-top: 8px; line-height: 1.6; }
.workFoot{ margin-top: 12px; }
.linkBtn{
  border:0;
  background: transparent;
  color: rgba(255,255,255,.86);
  cursor:pointer;
  padding: 0;
}
.linkBtn:hover{ text-decoration: underline; }

.faq{
  display:flex;
  flex-direction:column;
  gap: 10px;
}
.faqItem{
  border-radius: var(--radius);
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.04);
  overflow:hidden;
}
.faqQ{
  width:100%;
  text-align:left;
  display:flex;
  justify-content:space-between;
  gap: 12px;
  align-items:center;
  padding: 14px 14px;
  border:0;
  background: transparent;
  color: var(--text);
  cursor:pointer;
  font-weight: 700;
}
.faqA{
  padding: 0 14px 14px;
  color: var(--muted);
  line-height: 1.6;
}
.faqIcon{
  width: 26px;
  height: 26px;
  display:grid;
  place-items:center;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.04);
  flex: 0 0 auto;
}

.contactGrid{
  display:grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 14px;
  align-items:start;
}
.contactInfo{
  margin-top: 18px;
  display:flex;
  flex-direction:column;
  gap: 10px;
}
.infoLine{
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.04);
  padding: 12px 12px;
}
.infoLabel{ color: var(--muted2); font-size: 12px; }
.infoValue{ margin-top: 6px; font-weight: 700; }

.form{
  border-radius: var(--radius2);
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.04);
  padding: 16px;
  box-shadow: var(--shadow);
}
.formRow{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
label{
  display:flex;
  flex-direction:column;
  gap: 8px;
  font-size: 12px;
  color: var(--muted2);
  margin-bottom: 12px;
}
input, textarea{
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(0,0,0,.18);
  color: var(--text);
  padding: 12px 12px;
  outline: none;
}
input:focus, textarea:focus{
  border-color: rgba(124,92,255,.55);
  box-shadow: 0 0 0 5px rgba(124,92,255,.16);
}
.tiny{
  font-size: 12px;
  margin-top: 10px;
}

.footer{
  padding: 28px 0 34px;
  border-top: 1px solid rgba(255,255,255,.08);
  background: rgba(7,10,16,.50);
  backdrop-filter: blur(12px);
}
.footRow{
  display:flex;
  gap: 12px;
  align-items:center;
  justify-content:space-between;
  flex-wrap: wrap;
}
.footBrand{
  display:flex;
  align-items:center;
  gap:10px;
}
.footLinks{
  display:flex;
  gap: 6px;
  flex-wrap: wrap;
}

@media (max-width: 980px){
  .heroGrid{ grid-template-columns: 1fr; }
  .cards3{ grid-template-columns: 1fr; }
  .gridCards{ grid-template-columns: 1fr; }
  .contactGrid{ grid-template-columns: 1fr; }
  .desktop{ display:none; }
  .mobile{ display:block; }
  .section{ padding: 64px 0; }
  .hero{ padding-top: 46px; }
}
`;
