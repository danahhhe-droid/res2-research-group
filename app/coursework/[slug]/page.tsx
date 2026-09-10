import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Arrow, PageHero } from "../../site-shell";
import { courses, getCourse } from "../courses";

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  return course ? { title: `${course.title} | Dana Marmolejo`, description: course.summary } : {};
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return <main>
    <PageHero eyebrow={course.code} title={course.title} intro={course.summary} />
    <section className="section shell course-detail">
      <div className="course-detail-intro">
        <div><p className="eyebrow dark">Course overview</p><h2>Connecting principles with engineering decisions.</h2></div>
        <p>{course.description}</p>
      </div>
      <div className="course-detail-grid">
        <article><span>01</span><h3>Core focus</h3><ul>{course.focus.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article className="course-application-card"><span>02</span><h3>Industrial applications</h3><ul>{course.applications.map((item) => <li key={item}>{item}</li>)}</ul></article>
      </div>
    </section>
    <section className="course-detail-cta"><div className="shell"><div><p className="eyebrow">Coursework</p><h2>Explore the complete teaching portfolio.</h2></div><div><a className="button button-light" href="/coursework">All courses <Arrow /></a><a className="text-link light-link" href="https://www.linkedin.com/in/dmc2023/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a></div></div></section>
  </main>;
}
