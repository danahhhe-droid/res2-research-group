const navItems = [
  ["Research", "/research"],
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
          <span className="brand-name">Dana Marmolejo</span>
          <span className="brand-group">RES<sup>2</sup> Research Group</span>
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
          <a href="/student-success">Student success</a>
          <a href="/contact">Contact Dana <Arrow /></a>
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
