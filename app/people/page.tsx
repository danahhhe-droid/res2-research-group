import { Arrow, PageHero } from "../site-shell";

type Researcher = {
  name: string;
  status: string;
  focus: string;
  detail: string;
  linkedin?: string;
};

const currentResearchers: Researcher[] = [
  { name: "Saif Sweidan", status: "Current undergraduate researcher", focus: "Waste-to-energy systems", detail: "Researching municipal-solid-waste composition, heating-value correlations, stoichiometric analysis, and process modeling for waste-to-energy applications.", linkedin: "https://www.linkedin.com/in/saif-sweidan-44b70831b/" },
  { name: "Joseph Olascoaga", status: "Current undergraduate researcher", focus: "Self-sustained data-center systems", detail: "Investigating integrated energy options for resilient data centers, including advanced power-generation and thermal-management concepts." },
  { name: "Nagender Dasari", status: "Current graduate researcher", focus: "Building energy simulation", detail: "Developing a whole-building energy model of McDonnell Douglas Hall using eQUEST, building plans, equipment data, and field observations.", linkedin: "https://www.linkedin.com/in/ndasari3112/" },
];

const alumni: Researcher[] = [
  { name: "Danielle Rogers", status: "Former undergraduate researcher", focus: "Data-center energy–water systems", detail: "Studied data-center clusters, cooling strategies, and energy and water demand; the team’s work earned second place at the 2026 SLU Sigma Xi Research Symposium.", linkedin: "https://www.linkedin.com/in/danielleerogers/" },
  { name: "Peter Ndungu Mwaura", status: "Former undergraduate researcher", focus: "Data-center energy and cooling analysis", detail: "Contributed systems analysis and process modeling for data-center cooling and power configurations; the team’s work earned second place at the 2026 SLU Sigma Xi Research Symposium.", linkedin: "https://www.linkedin.com/in/peter-mwaura-b05164223/" },
  { name: "Kevin Noonan", status: "Former undergraduate researcher", focus: "Industrial decarbonization", detail: "Led a FIRE Tier 1 undergraduate research project and presented energy-systems work at AIChE.", linkedin: "https://www.linkedin.com/in/kevin-noonan-1p2/" },
  { name: "Clayton Stout", status: "Former undergraduate researcher", focus: "Metropolitan energy inventory", detail: "Studied energy and exergy flows in the St. Louis region and presented the work to professional audiences.", linkedin: "https://www.linkedin.com/in/claytonstout/" },
  { name: "Elizabeth Dolan", status: "Former undergraduate researcher", focus: "Building energy analysis", detail: "Investigated thermal performance and energy use in McDonnell Douglas Hall.", linkedin: "https://www.linkedin.com/in/elizabeth-dolan-44423025a/" },
  { name: "Jessica Rutherford", status: "Former undergraduate researcher", focus: "Building energy analysis", detail: "Contributed to thermal and whole-building analysis of McDonnell Douglas Hall.", linkedin: "https://www.linkedin.com/in/rutherford1/" },
  { name: "Jose Montoya", status: "Former undergraduate researcher", focus: "Transportation energy systems", detail: "Coauthored work on the transportation sector within the Saint Louis metropolitan energy inventory." },
  { name: "Leendert “Leo” Schrader", status: "Former undergraduate researcher", focus: "Mechatronics and engineering education", detail: "Developed a mechatronic arm project and contributed to engineering-education scholarship." },
];

function PersonCard({ person, current = false }: { person: Researcher; current?: boolean }) {
  return <article className={`person-card${current ? " current" : ""}`}>
    <span>{person.status}</span>
    <h3>{person.name}</h3>
    <strong>{person.focus}</strong>
    <p>{person.detail}</p>
    {person.linkedin && <a className="text-link person-link" href={person.linkedin} target="_blank" rel="noreferrer" aria-label={`View ${person.name} on LinkedIn`}>LinkedIn profile <Arrow /></a>}
  </article>;
}

export default function PeoplePage() {
  return <main>
    <PageHero eyebrow="People" title="Researchers who turn systems questions into meaningful engineering work." intro="RES² creates pathways to build technical depth, communicate rigorous work, and advance energy and sustainability solutions." />
    <section className="section shell">
      <div className="section-heading compact-heading"><div><p className="eyebrow dark">Current researchers</p><h2>Working across waste-to-energy and resilient digital infrastructure.</h2></div><p>Current projects connect thermodynamic analysis and systems modeling with resource-efficient, resilient energy solutions.</p></div>
      <div className="people-grid current-grid">{currentResearchers.map((person) => <PersonCard person={person} current key={person.name} />)}</div>
    </section>
    <section className="section people-alumni"><div className="shell">
      <div className="section-heading compact-heading"><div><p className="eyebrow dark">Research alumni</p><h2>Former students and the work they advanced.</h2></div><p>This living record recognizes students who have contributed to RES² research, presentations, publications, and project development.</p></div>
      <div className="people-grid alumni-grid">{alumni.map((person) => <PersonCard person={person} key={person.name} />)}</div>
      <div className="people-path"><div><strong>Interested in joining the group?</strong><p>Prospective student researchers can share their interests, relevant coursework, and the kind of problem they hope to explore.</p></div><a className="button button-accent" href="/contact">Introduce yourself <Arrow /></a></div>
    </div></section>
  </main>;
}
