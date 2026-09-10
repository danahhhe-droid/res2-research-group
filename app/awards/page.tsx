import { Arrow, PageHero } from "../site-shell";

const recognitions = [
  { year: "2026", type: "Teaching excellence", title: "Banpu Professorship for Teaching Excellence", text: "Recognized by Saint Louis University’s School of Science and Engineering for sustained excellence and innovation in engineering education." },
  { year: "2026", type: "Faculty recognition", title: "SSE Excellence in Teaching Award · Engineering & Aviation", text: "Recognition from the Saint Louis University School of Science and Engineering for excellence in teaching and student learning." },
  { year: "2026", type: "Student & team recognition", title: "Second Place · SLU Sigma Xi Research Symposium", text: "Recognition for RES²-associated research on data-center clusters and energy–water demand across cooling strategies.", href: "https://www.slu.edu/news/announcements/2026/april/sigma-xi-reseach-symposium-awards.php" },
  { year: "2024", type: "Faculty recognition", title: "KEEN Campus Rising Star", text: "Recognition for advancing entrepreneurial-minded learning and student-centered engineering education." },
  { year: "2024", type: "Faculty fellowship", title: "Engineering Unleashed Fellow", text: "Selected for the Statics Studio faculty-development experience and its application to engineering learning." },
  { year: "2023–2024", type: "Professional service", title: "ASME Faculty All-Star Supporter Award", text: "Recognition connected to sustained faculty support of student professional development and engagement." },
  { year: "Since 2023", type: "Fellowship", title: "Chaifetz Fellow", text: "Participation in a cross-campus community that brings entrepreneurial thinking into teaching, research, and university life.", href: "https://www.slu.edu/business/centers/center-for-entrepreneurship/fellows.php" },
  { year: "2023–2024", type: "Advised student organization", title: "SLU–ASME student section recognition", text: "Student-section recognition for achievement and outstanding community engagement and project work." },
];

export default function AwardsPage() {
  return <main>
    <PageHero eyebrow="Awards & recognition" title="Recognition for scholarship, education, service, and student work." intro="A record of selected honors that reflect the RES² commitment to rigorous engineering, meaningful education, and student development." />
    <section className="section shell"><div className="recognition-list">{recognitions.map((item) => <article className="recognition-item" key={item.title}><div><span>{item.year}</span><small>{item.type}</small></div><div><h2>{item.title}</h2><p>{item.text}</p>{item.href && <a className="text-link profile-link" href={item.href}>View source <Arrow /></a>}</div></article>)}</div></section>
    <section className="award-note"><div className="shell"><p>This page highlights selected recognitions. Have a correction or an award to add?</p><a className="button button-accent" href="/contact">Send an update <Arrow /></a></div></section>
  </main>;
}
