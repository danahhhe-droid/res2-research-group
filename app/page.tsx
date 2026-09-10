import { Arrow } from "./site-shell";
import { Res2ConceptMap } from "./res2-concept-map";

const destinations = [
  ["Research", "Thermodynamic process integration across equipment, buildings, data centers, and communities.", "/research"],
  ["Interactive tools", "Transparent engineering calculators that make assumptions and relationships visible.", "/tools"],
  ["Engineering education", "Hands-on learning, entrepreneurial mindset, and carefully bounded uses of AI.", "/education"],
  ["Student success", "Research pathways that develop technical confidence, communication, and leadership.", "/student-success"],
];

export default function Home() {
  return (
    <main>
      <section className="hero home-hero" id="home">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow">Saint Louis University · Aerospace &amp; Mechanical Engineering</p>
            <h1>Engineering better energy systems—from equipment to communities.</h1>
            <p className="hero-lede">
              I lead RES<sup>2</sup>—Research in Energy Systems and Sustainability—where thermodynamics,
              process integration, and systems modeling become practical pathways to efficiency,
              resilience, and responsible resource use.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="/research">Explore the research <Arrow /></a>
              <a className="text-link light-link" href="/consultancy">Consultancy &amp; collaboration <Arrow /></a>
            </div>
          </div>

          <Res2ConceptMap />
        </div>
        <div className="hero-rail shell" aria-label="Research approach">
          <span>Analyze deeply</span><span>Connect scales</span><span>Create useful tools</span><span>Prepare engineers</span>
        </div>
      </section>

      <section className="section shell home-intro">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">A research group and professional practice</p>
            <h2>Technical depth, educational purpose, and practical value.</h2>
          </div>
          <p>Use the dedicated pages to explore each part of the work in greater depth.</p>
        </div>
        <div className="destination-grid">
          {destinations.map(([title, text, href], index) => (
            <a href={href} className="destination-card" key={href}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><b>Open page <Arrow /></b>
            </a>
          ))}
        </div>
      </section>

      <section className="latest-news section">
        <div className="shell news-feature">
          <div>
            <p className="eyebrow">Latest news</p>
            <h2>RES<sup>2</sup> students recognized for energy–water research.</h2>
          </div>
          <div>
            <p>A student team earned second place at the 2026 SLU Sigma Xi Research Symposium for mapping data-center clusters and estimating energy–water demand across cooling strategies.</p>
            <a className="text-link" href="/news">Read all news <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="home-consultancy section">
        <div className="shell home-consultancy-grid">
          <div><p className="eyebrow">Consultancy</p><h2>Need a rigorous way to understand an energy-system decision?</h2></div>
          <div><p>Explore consultancy in thermal systems, process integration, energy and exergy analysis, modeling, optimization, digital engineering tools, and technical education.</p><a className="button button-accent" href="/consultancy">Work with me <Arrow /></a></div>
        </div>
      </section>
    </main>
  );
}
