import { Arrow, PageHero } from "../site-shell";

export default function AboutPage() {
  return <main>
    <PageHero eyebrow="About" title="Thermodynamic rigor, connected to decisions that matter." intro="Dr. Danahe (Dana) Marmolejo is an energy and process-systems researcher, engineering educator, and consultant at Saint Louis University." />
    <section className="about section">
      <div className="shell about-grid">
        <div className="about-identity"><p className="eyebrow dark">Profile</p><p className="about-kicker">Thermal systems researcher. Process-integration specialist. Engineering educator.</p></div>
        <div className="about-copy">
          <h2>Energy systems viewed through efficiency, quality, and purpose.</h2>
          <p>My work connects energy and exergy analysis, process integration, simulation, and optimization with practical engineering decisions. My academic experience spans Norway, Mexico, and the United States.</p>
          <p>At SLU, I teach mechanics and energy systems, mentor undergraduate research, and develop active-learning experiences that connect technical depth with entrepreneurial thinking.</p>
          <div className="credentials" aria-label="Education"><div><strong>Ph.D.</strong><span>Energy &amp; Process Engineering<br />NTNU</span></div><div><strong>M.S.</strong><span>Chemical Engineering · Process Integration<br />University of Guanajuato</span></div><div><strong>B.S.</strong><span>Chemical Engineering<br />University of Guanajuato</span></div></div>
          <a className="text-link profile-link" href="https://www.slu.edu/science-and-engineering/academics/aerospace-and-mechanical-engineering/faculty/danahe-marmolejo.php">View my official SLU profile <Arrow /></a>
        </div>
      </div>
    </section>
  </main>;
}
