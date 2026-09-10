import { Arrow, PageHero } from "../site-shell";
import { fundamentalsCourses, processSystemsCourses, type Course } from "./courses";

function CourseCards({ courses }: { courses: Course[] }) {
  return <div className="course-grid">{courses.map((course) => <article className="course-card" key={course.slug}>
    <span>{course.code}</span><h3>{course.title}</h3><p>{course.summary}</p><a href={`/coursework/${course.slug}`}>Explore course <Arrow /></a>
  </article>)}</div>;
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
      <CourseCards courses={fundamentalsCourses} />
    </div></section>
    <section className="section"><div className="shell teaching-principles"><div><span>01</span><h3>See the system</h3><p>Visual models and physical demonstrations reveal how individual equations fit a larger engineering system.</p></div><div><span>02</span><h3>Practice the reasoning</h3><p>Structured problem-solving develops judgment, verification habits, and confidence.</p></div><div><span>03</span><h3>Connect to practice</h3><p>Industry voices and open-ended work connect technical choices to people, organizations, and measurable value.</p></div></div></section>
  </main>;
}
