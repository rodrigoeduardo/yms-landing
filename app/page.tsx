import { ContactForm } from "@/components/contact-form";
import { HeroDemo } from "@/components/hero-demo";
import { LocaleToggle } from "@/components/locale-toggle";
import { ThermalLabel } from "@/components/thermal-label";
import { Walkthrough } from "@/components/walkthrough";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getDemoUrl } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/get-locale";
import Image from "next/image";

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
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
          <Image src="/icons/icon-192.png" alt="" width={192} height={192} className="logo-mark" />
          {dict.appName}
        </a>
        <span className="nav-links">
          <a className="nav-link" href="#funcoes">{dict.nav.linkFuncoes}</a>
          <a className="nav-link" href="#contato">{dict.nav.linkContato}</a>
          <LocaleToggle locale={locale} label={dict.nav.localeLabel} />
          <a className="btn btn-dark btn-nav" href={demoUrl} target="_blank" rel="noopener noreferrer">
            {dict.nav.demoCta} <ArrowUpRight />
          </a>
        </span>
      </nav>

      <header className="hero">
        <div className="hero-copy">
          <h1>
            {dict.hero.title} <span className="hero-accent">{dict.hero.titleAccent}</span>
          </h1>
          <p className="hero-sub">{dict.hero.subtitle}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg" href={demoUrl} target="_blank" rel="noopener noreferrer">
              {dict.hero.demoCta} <ArrowUpRight />
            </a>
            <a className="btn btn-outline btn-lg" href="#contato">{dict.hero.talkCta}</a>
          </div>
          <span className="hero-note">{dict.hero.note}</span>
        </div>
        <HeroDemo demo={dict.demo} rows={dict.funcoes.step3.rows} closed={dict.funcoes.step3.closed} lang={dict.meta.htmlLang} />
      </header>

      <section id="funcoes" className="section container">
        <div className="section-head">
          <h2>{dict.funcoes.title}</h2>
          <p>{dict.funcoes.subtitle}</p>
        </div>
        <Walkthrough f={dict.funcoes} demo={dict.demo} lang={dict.meta.htmlLang} />
      </section>

      <section className="hardware">
        <div className="container hardware-inner">
          <div className="hardware-copy">
            <h2>{dict.hardware.title}</h2>
            <p>{dict.hardware.body}</p>
          </div>
          <div className="belt">
            <div className="belt-track" aria-hidden>
              <span className="belt-printer">
                <span className="printer-light" />
                {dict.demo.labels.printer}
              </span>
              {[0, 1, 2].map((i) => (
                <ThermalLabel key={i} label={dict.demo.label} className="belt-label" />
              ))}
            </div>
            <ol className="belt-stations">
              {dict.hardware.flow.map((step, i) => (
                <li key={step} style={{ "--i": i } as React.CSSProperties}>
                  <span className="belt-dot" aria-hidden />
                  {step}
                </li>
              ))}
            </ol>
            <span className="belt-sample">{dict.demo.sample}</span>
          </div>
        </div>
      </section>

      <section id="contato" className="contact container">
        <div className="contact-copy">
          <h2>{dict.contact.title}</h2>
          <p>{dict.contact.body}</p>
          <span className="contact-meta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {dict.contact.responseTime}
          </span>
        </div>
        <ContactForm messages={dict.form} />
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="logo">
            <Image src="/icons/icon-192.png" alt="" width={192} height={192} className="logo-mark" />
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
