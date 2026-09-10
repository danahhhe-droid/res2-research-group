import { Arrow, PageHero } from "../site-shell";

const processSystemsCourses = [
  ["MENG 4930 / 5720", "Sustainable Energy Systems", "Sustainable energy resources, systems thinking, economics, environmental performance, and engineering decisions across interconnected energy systems."],
  ["MENG 4304", "Thermal Systems Design", "Thermodynamics, heat transfer, system modeling, economics, and open-ended design applied to feasible thermal-system concepts."],
  ["MENG 4930 / 5930", "Energy Systems Analysis and Optimization", "Pinch analysis, heat integration, energy targeting, process optimization, and systematic improvement of energy-intensive systems."],
  ["SLU / UGTO", "Thermodynamics", "Energy, entropy, properties, cycles, and the first and second laws as foundations for analyzing engineering systems."],
  ["SLU / UGTO", "Heat Transfer", "Conduction, convection, radiation, heat exchangers, and thermal analysis for equipment and system design."],
  ["UGTO", "Chemical Process Design", "Integrated chemical-process design, equipment selection, flowsheet development, economics, safety, and technical feasibility."],
  ["UGTO", "Alternative Energy Systems", "Renewable and alternative energy technologies evaluated through thermodynamic, environmental, and systems perspectives."],
  ["UGTO", "Exergy Analysis", "Second-law assessment, exergy destruction, efficiency definitions, and opportunities for improving industrial and energy processes."],
  ["UGTO", "Operations Research", "Mathematical modeling, optimization, and quantitative decision methods for engineering and operational systems."],
  ["NTNU · TEP4215", "Energy Utilization and Process Integration in Industrial Plants", "Theoretical and practical analysis of industrial energy use and process integration, taught at the Norwegian University of Science and Technology."],
];

const mechanicalCourses = [
  ["SE 1700", "Engineering Fundamentals", "Team-based systems design, disciplinary exploration, prototyping, communication, and entrepreneurial mindset."],
  ["MENG 2100", "Statics", "Equilibrium, structures, friction, centroids, and moments of inertia through visual models and problem-solving studios."],
  ["MENG 2150", "Dynamics", "Particle and rigid-body kinematics and kinetics, energy, momentum, and engineering applications."],
];

function CourseCards({ courses }: { courses: string[][] }) {
  return <div className="course-grid">{courses.map(([code,title,text]) => <article className="course-card" key={`${code}-${title}`}><span>{code}</span><h3>{title}</h3><p>{text}</p><a href="/contact">Course and professional links <Arrow /></a></article>)}</div>;
}

export default function CourseworkPage() {
  return <main>
    <PageHero eyebrow="Coursework" title="Courses built around understanding, practice, and transfer." intro="Students connect engineering fundamentals with systems thinking, professional judgment, and real applications." />
    <section className="section shell course-group">
      <div className="section-heading compact-heading"><div><p className="eyebrow dark">Engineering Process Systems Design</p><h2>From sustainable energy to integrated process and thermal-system design.</h2></div><p>These courses connect thermodynamics, process integration, optimization, and design. Practicing engineers and researchers join the classroom to discuss real systems, technical decisions, career pathways, and the realities of engineering practice.</p></div>
      <CourseCards courses={processSystemsCourses} />
    </section>
    <section className="section soft-section"><div className="shell course-group">
      <div className="section-heading compact-heading"><div><p className="eyebrow dark">Fundamentals in Engineering</p><h2>Building the mechanics and design reasoning engineers use every day.</h2></div><p>Engineering Fundamentals, Statics, and Dynamics combine visual models, hands-on work, structured problem solving, and professional context.</p></div>
      <CourseCards courses={mechanicalCourses} />
    </div></section>
    <section className="section"><div className="shell teaching-principles"><div><span>01</span><h3>See the system</h3><p>Visual models and physical demonstrations reveal how individual equations fit a larger engineering system.</p></div><div><span>02</span><h3>Practice the reasoning</h3><p>Structured problem-solving develops judgment, verification habits, and confidence.</p></div><div><span>03</span><h3>Connect to practice</h3><p>Industry voices and open-ended work connect technical choices to people, organizations, and measurable value.</p></div></div></section>
  </main>;
}
