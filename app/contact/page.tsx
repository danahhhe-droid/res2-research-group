import { PageHero } from "../site-shell";

const inquiryTypes = [
  "Course information",
  "Research opportunity",
  "Research collaboration",
  "Consultancy or industry project",
  "Speaking or professional activity",
  "News, award, or website correction",
  "Other",
];

export default function ContactPage() {
  return <main>
    <PageHero eyebrow="Request information" title="Start a conversation." intro="Select the purpose of your inquiry so your message can be reviewed and directed efficiently." />
    <section className="section shell inquiry-layout">
      <div className="inquiry-intro">
        <p className="eyebrow dark">RES² inquiries</p>
        <h2>How can we connect?</h2>
        <p>Use this form for questions about research, courses, collaboration, consulting, speaking, or RES² activities. Your contact information is used only to respond to your request.</p>
      </div>
      <form className="inquiry-form" name="res2-inquiry" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="res2-inquiry" />
        <p className="form-hidden"><label>Do not fill this out: <input name="bot-field" /></label></p>
        <label className="form-field"><span>What information are you requesting?</span><select name="inquiry-type" defaultValue="" required><option value="" disabled>Select one</option>{inquiryTypes.map((type) => <option value={type} key={type}>{type}</option>)}</select></label>
        <div className="form-row"><label className="form-field"><span>Your name</span><input type="text" name="name" autoComplete="name" required /></label><label className="form-field"><span>Your email</span><input type="email" name="email" autoComplete="email" required /></label></div>
        <label className="form-field"><span>Organization or institution <small>(optional)</small></span><input type="text" name="organization" autoComplete="organization" /></label>
        <label className="form-field"><span>Subject</span><input type="text" name="subject" required /></label>
        <label className="form-field"><span>Message</span><textarea name="message" rows={7} required /></label>
        <button className="button button-accent" type="submit">Send request</button>
        <p className="form-note">This form is protected by Netlify’s built-in spam filtering. No personal phone number or direct email address is displayed on the website.</p>
      </form>
    </section>
  </main>;
}
