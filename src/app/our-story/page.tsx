import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro, PageLink, SectionReveal } from "@/components/sections";
import { photos } from "@/data/brand";
import { FloatingMNCHCan } from "@/components/floating-can";

export const metadata: Metadata = { title: "Our Story", description: "Get to know the MNCH identity, philosophy and community." };

export default function OurStoryPage() {
  return (
    <main className="story-page">
      <PageIntro label="THE MNCH POINT OF VIEW" title="IT STARTED WITH" highlight="A DIFFERENT KIND OF BREW." description="Not a history lesson. Just a little more about the energy behind MNCH." variant="story" />
      <section className="story-lead section-pad">
        <SectionReveal className="story-lead-copy"><p className="eyebrow">01 / THE IDENTITY</p><h2>MADE TO<br /><span>STAND OUT.</span></h2><p>MNCH is a name with its own rhythm. A bold little mark for a brand that doesn&apos;t feel like everything else. Recognizable, unpretentious, and ready to make an ordinary moment feel like yours.</p></SectionReveal>
        <SectionReveal className="story-lead-image photo-frame"><Image src={photos[0].src} alt={photos[0].alt} fill sizes="(max-width: 700px) 90vw, 44vw" /><span className="photo-index">THE MNCH POINT OF VIEW</span></SectionReveal>
      </section>
      <section className="story-philosophy">
        <SectionReveal><p className="eyebrow eyebrow-light">02 / THE PHILOSOPHY</p><h2>NO RULEBOOK.<br /><span>JUST GOOD TASTE.</span></h2><p>Different moods call for different things. MNCH is about finding your kind of good, making space for the unexpected and bringing a little more color to the everyday.</p></SectionReveal><FloatingMNCHCan className="story-floating-can" />
      </section>
      <section className="story-experience section-pad">
        <SectionReveal className="story-experience-image photo-frame"><Image src={photos[3].src} alt={photos[3].alt} fill sizes="(max-width: 700px) 90vw, 50vw" /><span className="photo-index">03 / THE EXPERIENCE</span></SectionReveal>
        <SectionReveal className="story-experience-copy"><p className="eyebrow">03 / THE EXPERIENCE</p><h2>GOOD SIPS.<br /><span>GOOD PEOPLE.</span><br />GOOD MOMENTS.</h2><p>It&apos;s not only what&apos;s in your cup. It&apos;s who you&apos;re with, where you are, and the little moment you make out of it.</p><PageLink href="/gallery">SEE THE MNCH WORLD</PageLink></SectionReveal>
      </section>
      <section className="story-community section-pad"><SectionReveal><p className="eyebrow">04 / THE COMMUNITY</p><h2>THE BEST PART?<br /><span>YOU&apos;RE IN IT.</span></h2><p>MNCH is for the people who bring their own energy. Come say hi, share your moment and make the MNCH community yours.</p><PageLink href="/contact">SAY HELLO</PageLink></SectionReveal><SectionReveal className="story-community-image photo-frame"><Image src={photos[1].src} alt={photos[1].alt} fill sizes="(max-width: 700px) 90vw, 40vw" /></SectionReveal></section>
    </main>
  );
}
