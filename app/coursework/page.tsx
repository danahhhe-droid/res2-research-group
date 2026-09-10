import { Arrow, PageHero } from "../site-shell";

const courses = [
  ["SE 1700", "Engineering Fundamentals", "Team-based systems design, disciplinary exploration, prototyping, communication, and entrepreneurial mindset."],
  ["MENG 2100", "Statics", "Equilibrium, structures, friction, centroids, and moments of inertia through visual models and problem-solving studios."],
  ["MENG 2150", "Dynamics", "Particle and rigid-body kinematics and kinetics, energy, momentum, and engineering applications."],
  ["MENG 4930 / 5930", "Energy Systems", "Sustainable energy, process integration, exergy, thermoeconomics, optimization, and systems-level decision making."],
];

export default function CourseworkPage() {
  return <main>
    <PageHero eyebrow="Coursework" title="Courses built around understanding, practice, and transfer." intro="Students move between fundamentals, physical intuition, computation, communication, and open-ended engineering decisions." />
    <section className="section shell"><div className="course-grid">{courses.map(([code,title,text]) => <article className="course-card" key={code}><span>{code}</span><h3>{title}</h3><p>{text}</p><a href="/contact">Request course information <Arrow /></a></article>)}</div></section>
    <section className="section soft-section"><div className="shell teaching-principles"><div><span>01</span><h3>See the system</h3><p>Visual models and physical demonstrations reveal how individual equations fit a larger engineering system.</p></div><div><span>02</span><h3>Practice the reasoning</h3><p>Structured problem-solving develops judgment, verification habits, and confidence.</p></div><div><span>03</span><h3>Connect to value</h3><p>Open-ended work asks who a solution serves, what it changes, and how success should be measured.</p></div></div></section>
  </main>;
}
