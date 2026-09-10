"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (!response.ok) throw new Error("Submission failed");
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return <main>
    <PageHero eyebrow="Request information" title="Start a conversation." intro="Select the purpose of your inquiry so your message can be reviewed and directed efficiently." />
    <section className="section shell inquiry-layout">
      <div className="inquiry-intro">
        <p className="eyebrow dark">RES² inquiries</p>
        <h2>How can we connect?</h2>
        <p>Use this form for questions about research, courses, collaboration, consulting, speaking, or RES² activities. Your contact information is used only to respond to your request.</p>
      </div>
      <form className="inquiry-form" name="res2-inquiry" method="POST" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="res2-inquiry" />
        <label className="form-field"><span>What information are you requesting?</span><select name="inquiry-type" defaultValue="" required><option value="" disabled>Select one</option>{inquiryTypes.map((type) => <option value={type} key={type}>{type}</option>)}</select></label>
        <div className="form-row"><label className="form-field"><span>Your name</span><input type="text" name="name" autoComplete="name" required /></label><label className="form-field"><span>Your email</span><input type="email" name="email" autoComplete="email" required /></label></div>
        <label className="form-field"><span>Organization or institution <small>(optional)</small></span><input type="text" name="organization" autoComplete="organization" /></label>
        <label className="form-field"><span>Subject</span><input type="text" name="subject" required /></label>
        <label className="form-field"><span>Message</span><textarea name="message" rows={7} required /></label>
        <button className="button button-accent" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send request"}</button>
        {status === "error" && <p className="form-error" role="alert">The request could not be sent. Please wait a moment and try again.</p>}
        <p className="form-note">This form is protected by Netlify’s built-in spam filtering. No personal phone number or direct email address is displayed on the website.</p>
      </form>
    </section>
  </main>;
}
