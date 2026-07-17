import { Arrow, PageHero } from "../site-shell";

const news = [
  {date:"November 2025", category:"Publications · LinkedIn announcement", title:"Two RES² undergraduate research papers are published through ASME IMECE 2025", text:"The publications examine energy use in McDonnell Douglas Hall and the transportation sector of the Saint Louis metropolitan energy inventory. The work was developed with undergraduate researchers and in collaboration with Dr. J. S. Onésimo Sándoval.", links:[{label:"Building energy paper",href:"https://lnkd.in/gkThABR7"},{label:"Transportation energy paper",href:"https://lnkd.in/gr3PYjJP"}]},
  {date:"April 2026", category:"Student recognition", title:"RES²-associated student team earns second place at the SLU Sigma Xi Research Symposium", text:"The project mapped data-center clusters and estimated energy–water demand across cooling strategies, connecting infrastructure growth with resource planning.", href:"https://www.slu.edu/news/announcements/2026/april/sigma-xi-reseach-symposium-awards.php"},
  {date:"July 2026", category:"Faculty development", title:"National workshop advances entrepreneurial mindset in energy and thermo-fluids", text:"Faculty from multiple KEEN institutions worked together in Boise to develop learning experiences for mechanical engineering energy and thermo-fluids courses.", href:"https://engineeringunleashed.com/meet-july-2026"},
  {date:"2024", category:"Student research", title:"Students present St. Louis energy and exergy research", text:"Undergraduate researchers advanced an energy and exergy analysis of St. Louis City and the metropolitan area and shared the work with professional audiences.", href:"https://www.slu.edu/science-and-engineering/student-resources/undergraduate-resources/senior-design-projects.php"},
];

export default function NewsPage() {
  return <main>
    <PageHero eyebrow="News" title="Updates from RES² research, education, and student work." intro="Recognition, presentations, workshops, collaborations, and milestones from the group and its broader professional community." />
    <section className="section shell"><div className="news-list">{news.map((item,index) => <article className={index === 0 ? "news-item featured" : "news-item"} key={item.title}><div><span>{item.date}</span><small>{item.category}</small></div><div><h2>{item.title}</h2><p>{item.text}</p>{item.links ? <div className="news-links">{item.links.map((link) => <a className="text-link profile-link" href={link.href} key={link.href}>{link.label} <Arrow /></a>)}</div> : <a className="text-link profile-link" href={item.href}>Read more <Arrow /></a>}</div></article>)}</div></section>
    <section className="news-submit"><div className="shell news-submit-grid"><h2>Have a RES² update to share?</h2><div><p>Send the date, title, a short description, a link, and one approved image. The item can then be added to this page.</p><a className="button button-accent" href="mailto:danahe.marmolejo@slu.edu?subject=RES2%20news%20update">Submit a news update <Arrow /></a></div></div></section>
  </main>;
}
