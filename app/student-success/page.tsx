import { Arrow, PageHero } from "../site-shell";

const stories = [
  ["2026", "Energy–water research recognized", "A student team earned second place at the SLU Sigma Xi Research Symposium for mapping data-center clusters and estimating energy–water demand across cooling strategies.", "https://www.slu.edu/news/announcements/2026/april/sigma-xi-reseach-symposium-awards.php"],
  ["2024", "Urban exergy research on a national stage", "Undergraduate researchers advanced an energy and exergy analysis of St. Louis and presented their work at the AIChE Annual Meeting.", "https://www.slu.edu/science-and-engineering/student-resources/undergraduate-resources/senior-design-projects.php"],
  ["Ongoing", "The campus becomes the laboratory", "Students evaluate the McDonnell Douglas Hall thermal envelope, HVAC operation, comfort conditions, and energy losses using real facility data.", "https://www.slu.edu/science-and-engineering/student-resources/undergraduate-resources/senior-design-projects.php"],
];

export default function StudentSuccessPage() {
  return <main>
    <PageHero eyebrow="Student success" title="Students do consequential work—and learn to communicate it." intro="RES² creates pathways from a first research question to analysis, presentation, recognition, and professional confidence." />
    <section className="student-success section"><div className="shell"><div className="success-grid">{stories.map(([year,title,text,href]) => <article className="success-card" key={title}><span>{year}</span><h3>{title}</h3><p>{text}</p><a href={href}>View related source <Arrow /></a></article>)}</div><div className="student-path"><span>Question</span><i>→</i><span>Model</span><i>→</i><span>Test</span><i>→</i><span>Communicate</span><i>→</i><span>Lead</span></div></div></section>
  </main>;
}
