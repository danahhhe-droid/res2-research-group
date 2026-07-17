import { Arrow, PageHero } from "../site-shell";

const themes = [
  ["01 · Make the invisible visible", "Hands-on engineering", "Physical models, measurement, and interactive simulations help students connect equations to the behavior of real systems."],
  ["02 · Connect knowledge to need", "Entrepreneurial mindset", "Curiosity, connections, and creating value give technical work a wider purpose and a clearer audience."],
  ["03 · Build judgment, not shortcuts", "AI-supported learning", "Purpose-built tools and guided AI workflows support exploration while keeping assumptions, verification, and engineering reasoning visible."],
];

export default function EducationPage() {
  return <main>
    <PageHero eyebrow="Engineering education" title="Learning experiences designed for confident engineering judgment." intro="Teaching and faculty-development work that connects active learning, entrepreneurial mindset, and carefully bounded uses of AI." />
    <section className="education section shell"><div className="education-grid">{themes.map(([label,title,text]) => <article key={title}><span>{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="education-banner"><p>Faculty development</p><strong>Workshops and modules for energy, thermo-fluids, mechanics, and first-year engineering.</strong><a className="text-link" href="/consultancy">Bring this work to your program <Arrow /></a></div></section>
  </main>;
}
