import { ContactForm } from "@/components/contact-form";
import { LocaleToggle } from "@/components/locale-toggle";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getDemoUrl } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/get-locale";

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

export default async function Home() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const demoUrl = getDemoUrl(locale);

  return (
    <>
      <nav className="nav">
        <a className="logo" href="#">
          <span className="logo-mark">Y</span>
          {dict.appName}
          <span className="logo-tag">{dict.logoTag}</span>
        </a>
        <span className="nav-links">
          <a className="nav-link" href="#funcoes">{dict.nav.linkFuncoes}</a>
          <a className="nav-link" href="#contato">{dict.nav.linkContato}</a>
          <LocaleToggle locale={locale} label={dict.nav.localeLabel} />
          <a className="btn btn-primary btn-nav" href={demoUrl} target="_blank" rel="noopener noreferrer">
            {dict.nav.demoCta} <ArrowUpRight />
          </a>
        </span>
      </nav>

      <header className="hero">
        <div className="hero-stripe" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="kicker">{dict.hero.kicker}</span>
            <h1>{dict.hero.title}</h1>
            <p className="hero-sub">{dict.hero.subtitle}</p>
            <div className="hero-ctas">
              <a className="btn btn-primary btn-hero" href={demoUrl} target="_blank" rel="noopener noreferrer">
                {dict.hero.demoCta} <ArrowUpRight />
              </a>
              <a className="btn-ghost btn" href="#contato">{dict.hero.talkCta}</a>
            </div>
            <span className="hero-note">{dict.hero.note}</span>
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
                <span className="label-item">{dict.hero.label.item}</span>
                <span className="label-field">{dict.hero.label.invoice}</span>
                <span className="label-field">{dict.hero.label.material}</span>
                <span className="label-field">{dict.hero.label.intake}</span>
                <span className="label-weight">{dict.hero.label.weight}</span>
              </span>
            </div>
            <span className="label-caption">{dict.hero.label.caption}</span>
          </div>
        </div>
      </header>

      <section id="funcoes" className="container section">
        <div className="section-head">
          <span className="kicker">{dict.funcoes.kicker}</span>
          <h2>{dict.funcoes.title}</h2>
          <p>{dict.funcoes.subtitle}</p>
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
            <h3>{dict.funcoes.card1.title}</h3>
            <p>{dict.funcoes.card1.body}</p>
            <div className="card-visual">
              <MiniLabel />
              <MiniLabel />
              <MiniLabel />
              <span className="mini-count">{dict.funcoes.card1.count}</span>
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
            <h3>{dict.funcoes.card2.title}</h3>
            <p>{dict.funcoes.card2.body}</p>
            <div className="card-visual">
              <span className="scan-chip">
                <span className="mini-qr" />
                <span className="scan-line" />
              </span>
              <span className="scan-text">
                {dict.funcoes.card2.scanLine1}<br />{dict.funcoes.card2.scanLine2}
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
            <h3>{dict.funcoes.card3.title}</h3>
            <p>{dict.funcoes.card3.body}</p>
            <div className="card-visual stock-rows">
              <span className="stock-row"><span>{dict.funcoes.card3.row1}</span><strong>{dict.funcoes.card3.row1Value}</strong></span>
              <span className="stock-row"><span>{dict.funcoes.card3.row2}</span><strong>{dict.funcoes.card3.row2Value}</strong></span>
              <span className="stock-row closed"><span>{dict.funcoes.card3.row3}</span><span>{dict.funcoes.card3.row3Value}</span></span>
            </div>
          </article>
        </div>
        <div className="flow">
          <span className="flow-step">{dict.funcoes.flow.step1}</span>
          <ArrowRight />
          <span className="flow-step">{dict.funcoes.flow.step2}</span>
          <ArrowRight />
          <span className="flow-step">{dict.funcoes.flow.step3}</span>
          <ArrowRight />
          <span className="flow-step final">{dict.funcoes.flow.step4}</span>
          <span className="flow-note">{dict.funcoes.flow.note}</span>
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="kicker">{dict.contact.kicker}</span>
            <h2>{dict.contact.title}</h2>
            <p>{dict.contact.body}</p>
            <span className="contact-meta">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {dict.contact.responseTime}
            </span>
          </div>
          <ContactForm messages={dict.form} />
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="logo">
            <span className="logo-mark">Y</span>
            {dict.appName}
          </span>
          <span className="footer-copy">{dict.footer.copy}</span>
          <span className="footer-links">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">{dict.footer.demoLink}</a>
            <a href="#contato">{dict.footer.contactLink}</a>
          </span>
        </div>
      </footer>
    </>
  );
}
