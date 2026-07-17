import { Arrow, PageHero } from "../site-shell";

const currentResearchers = [
  { name: "Danielle Rogers", focus: "Energy–water systems for data-center infrastructure", detail: "Research on the location of data-center clusters and the energy and water demands associated with cooling strategies." },
  { name: "Peter Ndungu Mwaura", focus: "Data-center energy and cooling analysis", detail: "Contributing to systems-level analysis that connects digital infrastructure growth with resource planning and resilient design." },
];

const alumni = [
  { name: "Kevin Noonan", focus: "Industrial decarbonization", detail: "Led a FIRE Tier 1 undergraduate research project and presented energy-systems work at AIChE." },
  { name: "Clayton Stout", focus: "Metropolitan energy inventory", detail: "Studied energy and exergy flows in the St. Louis region and presented the work to professional audiences." },
  { name: "Elizabeth Dolan", focus: "Building energy analysis", detail: "Investigated thermal performance and energy use in McDonnell Douglas Hall." },
  { name: "Jessica Rutherford", focus: "Building energy analysis", detail: "Contributed to thermal and whole-building analysis of McDonnell Douglas Hall." },
  { name: "Jose Montoya", focus: "Transportation energy systems", detail: "Coauthored work on the transportation sector within the Saint Louis metropolitan energy inventory." },
  { name: "Leendert “Leo” Schrader", focus: "Mechatronics and engineering education", detail: "Developed a mechatronic arm project and contributed to engineering-education scholarship." },
];

export default function PeoplePage() {
  return <main>
    <PageHero eyebrow="People" title="Students who turn systems questions into meaningful engineering work." intro="RES² creates room for undergraduate researchers to build technical depth, communicate their work, and carry those skills into the next stage of their careers." />
    <section className="section shell">
      <div className="section-heading compact-heading"><div><p className="eyebrow dark">Current researchers</p><h2>Working across energy, water, cooling, and infrastructure.</h2></div><p>Current projects connect thermodynamic analysis with timely decisions about resilient and resource-efficient systems.</p></div>
      <div className="people-grid">{currentResearchers.map((person) => <article className="person-card current" key={person.name}><span>Current researcher</span><h3>{person.name}</h3><strong>{person.focus}</strong><p>{person.detail}</p></article>)}</div>
    </section>
    <section className="section people-alumni"><div className="shell">
      <div className="section-heading compact-heading"><div><p className="eyebrow dark">Research alumni</p><h2>Former students and the work they advanced.</h2></div><p>This living record recognizes students who have contributed to RES² research, presentations, publications, and project development.</p></div>
      <div className="people-grid alumni-grid">{alumni.map((person) => <article className="person-card" key={person.name}><span>Research alum</span><h3>{person.name}</h3><strong>{person.focus}</strong><p>{person.detail}</p></article>)}</div>
      <div className="people-path"><div><strong>Interested in joining the group?</strong><p>Prospective student researchers can share their interests, relevant coursework, and the kind of problem they hope to explore.</p></div><a className="button button-accent" href="mailto:danahe.marmolejo@slu.edu?subject=Interest%20in%20RES2%20research">Introduce yourself <Arrow /></a></div>
    </div></section>
  </main>;
}
