import { Arrow, PageHero } from "../site-shell";

const thermalCourses = [
  ["MENG 4930 / 5720", "Sustainable Energy Systems", "Energy resources, sustainability, process integration, exergy, thermoeconomics, optimization, and systems-level engineering decisions."],
  ["MENG 4304", "Thermal Systems Design", "Thermodynamics, heat transfer, system modeling, economics, and design applied to feasible thermal-system concepts."],
];

const mechanicalCourses = [
  ["SE 1700", "Engineering Fundamentals", "Team-based systems design, disciplinary exploration, prototyping, communication, and entrepreneurial mindset."],
  ["MENG 2100", "Statics", "Equilibrium, structures, friction, centroids, and moments of inertia through visual models and problem-solving studios."],
  ["MENG 2150", "Dynamics", "Particle and rigid-body kinematics and kinetics, energy, momentum, and engineering applications."],
];

function CourseCards({ courses }: { courses: string[][] }) {
  return <div className="course-grid">{courses.map(([code,title,text]) => <article className="course-card" key={code}><span>{code}</span><h3>{title}</h3><p>{text}</p><a href="/contact">Course and professional links <Arrow /></a></article>)}</div>;
}

export default function CourseworkPage() {
  return <main>
    <PageHero eyebrow="Coursework" title="Courses built around understanding, practice, and transfer." intro="Students connect engineering fundamentals with systems thinking, professional judgment, and real applications." />
    <section className="section shell course-group">
      <div className="section-heading compact-heading"><div><p className="eyebrow dark">Thermal and energy systems</p><h2>From sustainable energy to complete thermal-system design.</h2></div><p>Engineers from industry and public-sector organizations join these courses to discuss operating systems, design decisions, career pathways, and the realities of engineering practice.</p></div>
      <CourseCards courses={thermalCourses} />
    </section>
    <section className="section soft-section"><div className="shell course-group">
      <div className="section-heading compact-heading"><div><p className="eyebrow dark">Mechanical engineering foundations</p><h2>Building the mechanics and design reasoning engineers use every day.</h2></div><p>Fundamentals, Statics, and Dynamics combine visual models, hands-on work, structured problem solving, and professional context.</p></div>
      <CourseCards courses={mechanicalCourses} />
    </div></section>
    <section className="section"><div className="shell teaching-principles"><div><span>01</span><h3>See the system</h3><p>Visual models and physical demonstrations reveal how individual equations fit a larger engineering system.</p></div><div><span>02</span><h3>Practice the reasoning</h3><p>Structured problem-solving develops judgment, verification habits, and confidence.</p></div><div><span>03</span><h3>Connect to practice</h3><p>Industry voices and open-ended work connect technical choices to people, organizations, and measurable value.</p></div></div></section>
  </main>;
}
