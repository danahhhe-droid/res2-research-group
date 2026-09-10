import { Arrow, PageHero } from "../site-shell";

const profiles = [
  { label: "Saint Louis University", title: "Official faculty profile", description: "Academic appointment, education, research interests, publications, and university affiliation.", href: "https://www.slu.edu/science-and-engineering/academics/aerospace-and-mechanical-engineering/faculty/danahe-marmolejo.php" },
  { label: "LinkedIn", title: "Meet and connect with Dana", description: "Connect with Dana Marmolejo to follow announcements, discuss potential projects, and explore professional collaboration.", href: "https://www.linkedin.com/in/dmc2023/" },
  { label: "ResearchGate", title: "Research profile", description: "Publications, research interests, citations, and connections with the scientific community.", href: "https://www.researchgate.net/profile/Dana-Marmolejo" },
  { label: "Google Scholar", title: "Publication record", description: "Scholarly publications and citation information across energy systems and engineering education.", href: "https://scholar.google.com/citations?user=DFflEKgAAAAJ" },
];

export default function ContactPage() {
  return <main>
    <PageHero eyebrow="Connect" title="Meet Dana Marmolejo on LinkedIn." intro="Connect through LinkedIn to discuss a potential project, follow RES² activity, or explore professional collaboration. Official research and university profiles are also available below." />
    <section className="section shell">
      <div className="connection-grid">
        {profiles.map((profile) => <a className="connection-card" href={profile.href} target="_blank" rel="noreferrer" key={profile.label}>
          <span>{profile.label}</span><h2>{profile.title}</h2><p>{profile.description}</p><b>Open profile <Arrow /></b>
        </a>)}
      </div>
      <p className="connection-note">Direct phone numbers and personal email addresses are not displayed on this website. Official and professional platforms provide the appropriate contact pathways.</p>
    </section>
  </main>;
}
