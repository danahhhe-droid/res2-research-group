import ToolLab from "../tool-lab";
import { PageHero } from "../site-shell";

export default function ToolsPage() {
  return <main>
    <PageHero eyebrow="Interactive tools" title="Explore the engineering before opening the full model." intro="Fast, transparent tools help students and partners test assumptions, build intuition, and frame better questions." />
    <section className="tools section"><div className="shell"><ToolLab /></div></section>
    <section className="section shell"><div className="section-heading compact-heading"><div><p className="eyebrow dark">How to use these tools</p><h2>Screen first. Verify next. Design with the right model.</h2></div><p>Each calculator is intended for learning and early-stage screening. The equations and assumptions should be checked before any engineering design decision.</p></div></section>
  </main>;
}
