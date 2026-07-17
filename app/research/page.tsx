import { Arrow, PageHero } from "../site-shell";

const pillars = [
  ["01", "Power, fuels & decarbonization", "Process integration, exergy analysis, carbon conversion, renewable fuels, heat integration, and advanced power systems."],
  ["02", "Energy–water–cooling systems", "Integrated thermal and resource systems for data centers, buildings, and resilient digital infrastructure."],
  ["03", "Multiscale thermal infrastructure", "Connecting equipment, facilities, metropolitan systems, spatial data, and community outcomes."],
];

const projects = [
  ["Energy and Exergy in St. Louis", "Mapping the quantity and quality of energy across the city and metropolitan region to identify losses and opportunities."],
  ["McDonnell Douglas Hall Energy Analysis", "Evaluating comfort, the building envelope, HVAC operation, chiller performance, and energy losses using campus facility data."],
  ["Data-Center Energy–Water Demand", "Connecting data-center geography, cooling strategies, electricity demand, water use, and infrastructure resilience."],
];

export default function ResearchPage() {
  return <main>
    <PageHero eyebrow="Research" title="Thermodynamic process integration for resilient energy infrastructure." intro="RES² develops thermodynamic, process-integration, and systems-modeling methods that improve efficiency, recover valuable resources, and connect decisions across scales." />
    <section className="section shell">
      <div className="pillar-grid">
        {pillars.map(([number,title,text]) => <article className="pillar-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
      <figure className="vision-figure">
        <img src="/research-vision.png" alt="RES squared research vision connecting power generation, energy-water-cooling systems, and multiscale thermal infrastructure" />
        <figcaption>The RES<sup>2</sup> framework connects equipment performance, resource systems, data, and community outcomes.</figcaption>
      </figure>
    </section>
    <section className="section soft-section">
      <div className="shell">
        <div className="section-heading compact-heading"><div><p className="eyebrow dark">Selected work</p><h2>Research grounded in real systems and useful questions.</h2></div><p>Projects combine rigorous thermodynamic analysis with visualization, systems thinking, and student-led discovery.</p></div>
        <div className="project-grid">{projects.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p><a href="mailto:danahe.marmolejo@slu.edu?subject=Research%20collaboration">Discuss collaboration <Arrow /></a></article>)}</div>
      </div>
    </section>
  </main>;
}
