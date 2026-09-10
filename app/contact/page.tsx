import { Arrow, PageHero } from "../site-shell";

const profiles = [
  { label: "Saint Louis University", title: "Official faculty profile", description: "Academic appointment, education, research interests, publications, and university affiliation.", href: "https://www.slu.edu/science-and-engineering/academics/aerospace-and-mechanical-engineering/faculty/danahe-marmolejo.php" },
  { label: "LinkedIn", title: "Professional activity", description: "Announcements, teaching and research milestones, professional communities, and collaborations.", href: "https://www.linkedin.com/in/dmc2023/" },
  { label: "ResearchGate", title: "Research profile", description: "Publications, research interests, citations, and connections with the scientific community.", href: "https://www.researchgate.net/profile/Dana-Marmolejo" },
  { label: "Google Scholar", title: "Publication record", description: "Scholarly publications and citation information across energy systems and engineering education.", href: "https://scholar.google.com/citations?user=DFflEKgAAAAJ" },
];

export default function ContactPage() {
  return <main>
    <PageHero eyebrow="Connect" title="Professional profiles and official information." intro="Use the profile that best matches your interest in RES² research, publications, teaching, or professional collaboration." />
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
