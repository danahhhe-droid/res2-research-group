import { Arrow, PageHero } from "../site-shell";

const services = [
  ["Energy & exergy analysis", "Identify where energy quantity and quality are lost and where intervention may create value."],
  ["Thermal systems & cooling", "Evaluate thermal performance, heat recovery, HVAC, cooling, and energy–water relationships."],
  ["Process integration", "Connect process streams, utilities, and system targets to reduce resource demand."],
  ["Modeling & optimization", "Build transparent analytical and computational models for scenario evaluation."],
  ["Digital twins & decision tools", "Translate engineering models into usable calculators, visualizations, and decision-support workflows."],
  ["Technical education", "Develop workshops, modules, and learning experiences for engineers, faculty, and students."],
];

export default function ConsultancyPage() {
  return <main>
    <PageHero eyebrow="Consultancy" title="Rigorous analysis for consequential energy decisions." intro="Independent thinking, transparent assumptions, and useful deliverables for industry, public organizations, and academic partners." />
    <section className="section shell"><div className="service-grid">{services.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="consultancy section"><div className="shell consultancy-grid"><div><p className="eyebrow">A practical engagement</p><h2>Diagnose. Model. Translate.</h2><p className="consultancy-promise">The scope is shaped around the decision—not a predetermined deliverable.</p></div><div className="consultancy-copy"><div className="engagement-grid"><div><strong>Diagnose</strong><p>Clarify losses, bottlenecks, stakeholders, and the highest-value questions.</p></div><div><strong>Model</strong><p>Build transparent simulations, screening analyses, and scenarios.</p></div><div><strong>Translate</strong><p>Turn results into decisions, tools, recommendations, and training.</p></div></div><a className="button button-accent" href="/contact">Discuss a project <Arrow /></a></div></div></section>
  </main>;
}
