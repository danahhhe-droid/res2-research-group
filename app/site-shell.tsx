const navItems = [
  ["Research", "/research"],
  ["Publications", "/publications"],
  ["People", "/people"],
  ["Coursework", "/coursework"],
  ["Tools", "/tools"],
  ["Education", "/education"],
  ["News", "/news"],
  ["Awards", "/awards"],
  ["Consultancy", "/consultancy"],
];

export const Arrow = () => <span aria-hidden="true">↗</span>;

export function SiteHeader() {
  return (
    <div className="global-header">
      <header className="site-header shell">
        <a className="brand" href="/" aria-label="Dana Marmolejo and RES squared home">
          <img className="brand-logo" src="/brand/res2-logo-high-resolution-v2.png" alt="RES² — Research in Energy Systems and Sustainability" />
          <span className="brand-owner">Dana Marmolejo</span>
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
      </header>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="shell footer-grid">
        <div>
          <span className="footer-mark">RES<sup>2</sup></span>
          <p>Research in Energy Systems and Sustainability</p>
        </div>
        <div>
          <strong>Dr. Danahe (Dana) Marmolejo</strong>
          <p>Assistant Professor · Aerospace &amp; Mechanical Engineering</p>
          <p>McDonnell Douglas Hall 2025 · Saint Louis University</p>
        </div>
        <div className="footer-contact">
          <a href="/about">About Dana</a>
          <a href="https://www.linkedin.com/in/dmc2023/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://www.researchgate.net/profile/Dana-Marmolejo" target="_blank" rel="noreferrer">ResearchGate <Arrow /></a>
          <a href="/student-success">Student success</a>
          <a href="/contact">Connect with Dana <Arrow /></a>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <p>{intro}</p>
      </div>
    </section>
  );
}
