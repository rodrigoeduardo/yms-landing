import { ContactForm } from "@/components/contact-form";

const demoUrl = process.env.NEXT_PUBLIC_DEMO_URL ?? "#";

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg className="flow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function MiniLabel() {
  return (
    <span className="mini-label">
      <span className="mini-qr" />
      <span className="mini-lines">
        <span className="mini-line" />
        <span className="mini-line short" />
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <nav className="nav">
        <a className="logo" href="#">
          <span className="logo-mark">Y</span>
          YMS
          <span className="logo-tag">GESTÃO DE PÁTIO</span>
        </a>
        <span className="nav-links">
          <a className="nav-link" href="#funcoes">Como funciona</a>
          <a className="nav-link" href="#contato">Contato</a>
          <a className="btn btn-primary btn-nav" href={demoUrl} target="_blank" rel="noopener noreferrer">
            Ver Demo <ArrowUpRight />
          </a>
        </span>
      </nav>

      <header className="hero">
        <div className="hero-stripe" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="kicker">CONTROLE DE ESTOQUE PARA PÁTIOS · UM QR CODE POR ITEM</span>
            <h1>Saiba exatamente o que está no seu pátio. Em tempo real.</h1>
            <p className="hero-sub">
              Cada carga entra com Nota Fiscal. Cada item recebe uma etiqueta QR
              impressa na hora. Cada saída é registrada com um bipe — peso e
              contagem sempre atualizados, sem papel, sem planilha.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary btn-hero" href={demoUrl} target="_blank" rel="noopener noreferrer">
                Ver Demo <ArrowUpRight />
              </a>
              <a className="btn-ghost btn" href="#contato">Falar com a gente</a>
            </div>
            <span className="hero-note">Demo compartilhada · dados de exemplo · sem cadastro</span>
          </div>
          <div className="label-scene" aria-hidden>
            <div className="label-backdrop" />
            <div className="label-card label-back" />
            <div className="label-card label-front">
              <span className="qr">
                <span className="qr-finder tl" />
                <span className="qr-finder tr" />
                <span className="qr-finder bl" />
                <span className="qr-dots" />
              </span>
              <span className="label-fields">
                <span className="label-item">ITEM 042/120</span>
                <span className="label-field">NF 12.845-3</span>
                <span className="label-field">SUCATA MISTA</span>
                <span className="label-field">ENTRADA 17/07/2026</span>
                <span className="label-weight">38,5 kg</span>
              </span>
            </div>
            <span className="label-caption">ETIQUETA 100×50 mm · IMPRESSA NA ENTRADA</span>
          </div>
        </div>
      </header>

      <section id="funcoes" className="container section">
        <div className="section-head">
          <span className="kicker">COMO FUNCIONA</span>
          <h2>Três funções. Controle total do pátio.</h2>
          <p>
            Do caminhão que chega à visão completa do estoque — tudo amarrado
            pela etiqueta QR de cada item.
          </p>
        </div>
        <div className="cards">
          <article className="card">
            <div className="card-top">
              <span className="card-icon">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
                  <path d="M3 8l9 5 9-5M12 13v8" />
                </svg>
              </span>
              <span className="card-num">01</span>
            </div>
            <h3>Entrada de Carga</h3>
            <p>
              Registre a carga com NF, data, peso, material e quantidade de
              itens. O sistema imprime uma etiqueta QR por item, direto na
              impressora térmica do pátio.
            </p>
            <div className="card-visual">
              <MiniLabel />
              <MiniLabel />
              <MiniLabel />
              <span className="mini-count">×120</span>
            </div>
          </article>
          <article className="card">
            <div className="card-top">
              <span className="card-icon">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M2 12h20" />
                </svg>
              </span>
              <span className="card-num">02</span>
            </div>
            <h3>Saída com QR Code</h3>
            <p>
              Na retirada, escaneie a etiqueta de cada item. O sistema registra
              data, motorista e placa do veículo — e atualiza peso restante e
              contagem na hora.
            </p>
            <div className="card-visual">
              <span className="scan-chip">
                <span className="mini-qr" />
                <span className="scan-line" />
              </span>
              <span className="scan-text">
                ITEM 042 · BAIXADO<br />PLACA RTX-2B47 · 22/07
              </span>
              <svg className="scan-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </article>
          <article className="card">
            <div className="card-top">
              <span className="card-icon">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </span>
              <span className="card-num">03</span>
            </div>
            <h3>Visão de Estoque</h3>
            <p>
              Painel somente-leitura com o estoque atual por carga, materiais no
              pátio e o histórico completo de remoções. A verdade do pátio, em
              uma tela.
            </p>
            <div className="card-visual stock-rows">
              <span className="stock-row"><span>NF 12.845 · SUCATA MISTA</span><strong>4.620 kg</strong></span>
              <span className="stock-row"><span>NF 12.851 · COBRE</span><strong>890 kg</strong></span>
              <span className="stock-row closed"><span>NF 12.812 · ALUMÍNIO</span><span>encerrada</span></span>
            </div>
          </article>
        </div>
        <div className="flow">
          <span className="flow-step">CARGA CHEGA COM NF</span>
          <ArrowRight />
          <span className="flow-step">1 ETIQUETA QR POR ITEM</span>
          <ArrowRight />
          <span className="flow-step">BIPE NA SAÍDA</span>
          <ArrowRight />
          <span className="flow-step final">ESTOQUE ATUALIZADO</span>
          <span className="flow-note">
            Funciona com a impressora Elgin L42 Pro e o leitor que você já tem.
          </span>
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="kicker">CONTATO</span>
            <h2>Fale com a gente</h2>
            <p>
              Conte como é a operação do seu pátio hoje — papel, planilha,
              quantas cargas por semana. A gente mostra como o YMS se encaixa e
              coloca você na demo.
            </p>
            <span className="contact-meta">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Resposta em até 1 dia útil
            </span>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="logo">
            <span className="logo-mark">Y</span>
            YMS
          </span>
          <span className="footer-copy">© 2026 YMS · Sistema de Gestão de Pátio</span>
          <span className="footer-links">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">Demo ao vivo</a>
            <a href="#contato">Contato</a>
          </span>
        </div>
      </footer>
    </>
  );
}
