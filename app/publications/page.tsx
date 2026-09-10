import { Arrow, PageHero } from "../site-shell";

const featuredPublications = [
  {
    year: "2026",
    type: "Conference paper",
    title: "Energy Inventory in the Saint Louis Metropolitan Area: Analyzing the Transportation Sector",
    authors: "Jose Montoya, Clayton Stout, Danahe Marmolejo, and J. S. Onésimo Sándoval",
    href: "https://doi.org/10.1115/IMECE2025-166287",
  },
  {
    year: "2026",
    type: "Conference paper",
    title: "Energy Analysis of McDonnell Douglas Hall",
    authors: "RES² undergraduate research collaboration",
    href: "https://www.researchgate.net/publication/401109552_Energy_Analysis_of_McDonnell_Douglas_Hall",
  },
  {
    year: "2019",
    type: "Book chapter",
    title: "Exergy Analysis for Energy Integration in a Bioethanol Production Process to Determine Heat Exchanger Networks Feasibility",
    authors: "J. C. García-García, J. D. Ponce-Rocha, Danahe Marmolejo-Correa, and R. Morales-Rodriguez",
    href: "https://doi.org/10.1016/B978-0-12-818634-3.50080-1",
  },
  {
    year: "2017",
    type: "Journal article",
    title: "Castor Oil Preheater Selection Based on Entropy Generation and Exergy Effectiveness Criteria",
    authors: "L. Perdomo-Hurtado, J. S. Rincón Tabares, Danahe Marmolejo Correa, and F. A. Perdomo",
    href: "https://doi.org/10.1016/j.energy.2016.11.077",
  },
  {
    year: "2016",
    type: "Journal article",
    title: "Process Design Methodology for Energy-Efficient Processes Operating Below and Across Ambient Temperature",
    authors: "Danahe Marmolejo Correa and Truls Gundersen",
    href: "https://doi.org/10.1002/aic.15200",
  },
  {
    year: "2015",
    type: "Journal article",
    title: "A New Efficiency Parameter for Exergy Analysis in Low Temperature Processes",
    authors: "Danahe Marmolejo-Correa and Truls Gundersen",
    href: "https://doi.org/10.1504/IJEX.2015.069988",
  },
  {
    year: "2013",
    type: "Journal article",
    title: "New Graphical Representation of Exergy Applied to Low Temperature Process Design",
    authors: "Danahe Marmolejo-Correa and Truls Gundersen",
    href: "https://doi.org/10.1021/ie302541e",
  },
];

export default function PublicationsPage() {
  return <main>
    <PageHero eyebrow="Publications" title="Research across energy systems, exergy, and engineering education." intro="Selected peer-reviewed work and conference contributions by Dr. Danahe Marmolejo and RES² collaborators." />
    <section className="section shell">
      <div className="news-list">
        {featuredPublications.map((publication, index) => <article className={index === 0 ? "news-item featured" : "news-item"} key={publication.title}>
          <div><span>{publication.year}</span><small>{publication.type}</small></div>
          <div>
            <h2>{publication.title}</h2>
            <p>{publication.authors}</p>
            <a className="text-link profile-link" href={publication.href} target="_blank" rel="noreferrer">View publication <Arrow /></a>
          </div>
        </article>)}
      </div>
    </section>
    <section className="news-submit">
      <div className="shell news-submit-grid">
        <h2>Complete research profiles</h2>
        <div>
          <p>Explore the full publication record, citations, and current professional activity.</p>
          <div className="news-links">
            <a className="button button-accent" href="https://www.researchgate.net/profile/Dana-Marmolejo" target="_blank" rel="noreferrer">ResearchGate <Arrow /></a>
            <a className="button button-secondary" href="https://scholar.google.com/citations?user=DFflEKgAAAAJ" target="_blank" rel="noreferrer">Google Scholar <Arrow /></a>
            <a className="text-link profile-link" href="https://www.linkedin.com/pub/danahe-marmolejo/49/93a/2a6" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  </main>;
}
