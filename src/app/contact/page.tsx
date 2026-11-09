import type { Metadata } from "next";
import { ArrowUpRight, Camera } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageIntro, SectionReveal } from "@/components/sections";
import { instagramUrl } from "@/data/brand";

export const metadata: Metadata = { title: "Contact", description: "Say hello to MNCH Brews on Instagram." };

export default function ContactPage() {
  return (
    <main className="contact-page">
      <PageIntro label="COME SAY HI" title="LET'S MAKE IT" highlight="A MNCH MOMENT." description="Got a question, idea or just want to say hey? We're listening." />
      <section className="contact-content section-pad">
        <SectionReveal className="contact-social"><p className="eyebrow">THE BEST WAY TO REACH US</p><h2>SLIDE INTO<br /><span>OUR DMS.</span></h2><p>Find MNCH on Instagram — it&apos;s the only contact channel we can verify right now.</p><a className="button button-dark" href={instagramUrl} target="_blank" rel="noreferrer"><Camera size={17} /> @MNCHBREWS <ArrowUpRight size={16} /></a><div className="contact-detail"><span>INSTAGRAM</span><a href={instagramUrl} target="_blank" rel="noreferrer">@mnchbrews ↗</a></div><div className="contact-detail"><span>LOCATION</span><a href="https://www.google.com/maps/search/?api=1&query=Kent%20Padel%20Court%2C%20B%20St%2C%20Kent%20Housing%2C%20Sialkot%2C%2051310%2C%20Pakistan" target="_blank" rel="noreferrer">Kent Padel Court, B St, Kent Housing, Sialkot, 51310, Pakistan ↗</a></div></SectionReveal>
        <SectionReveal className="contact-form-wrap"><p className="eyebrow">LEAVE A NOTE — CONCEPT FORM</p><ContactForm /></SectionReveal>
      </section>
    </main>
  );
}
