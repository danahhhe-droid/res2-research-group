import { Arrow, PageHero } from "../site-shell";

export default function ThankYouPage() {
  return <main>
    <PageHero eyebrow="Request received" title="Thank you for reaching out." intro="Your message has been submitted through the RES² inquiry form." />
    <section className="section shell thank-you-panel">
      <h2>What happens next?</h2>
      <p>Your inquiry will be reviewed and routed according to the topic you selected. Please allow one to two business days for a response.</p>
      <a className="button button-accent" href="/">Return to the home page <Arrow /></a>
    </section>
  </main>;
}
