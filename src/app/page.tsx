import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { GalleryGrid } from "@/components/gallery-grid";
import { InstagramSection, SectionReveal } from "@/components/sections";
import { photos } from "@/data/brand";

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> A DIFFERENT KIND OF BREW</p>
          <h1>NOT YOUR<br /><span>USUAL</span> BREW<span className="hero-period">.</span></h1>
          <p className="hero-description">Different moods. Different brews.<br />One MNCH kind of energy.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/menu">EXPLORE THE MENU <ArrowUpRight size={16} /></Link>
            <Link className="text-link" href="/our-story">DISCOVER OUR STORY <span>↗</span></Link>
          </div>
          <div className="hero-note"><span>01 / 06</span><span>GOOD TASTE, NO RULES</span></div>
        </div>
        <div className="hero-product-wrap" aria-label="MNCH layered strawberry and matcha drink">
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <span className="hero-sticker"><Sparkles size={15} /> MADE FOR YOUR MOOD</span>
          <Image className="hero-product" src="/images/mnch-floating-can.png" alt="The original MNCH layered strawberry, milk and matcha can" width={280} height={735} priority />
          <span className="hero-product-caption">A LITTLE DIFFERENT. A LOT MNCH.</span>
        </div>
        <a className="scroll-cue" href="#intro"><ArrowDown size={15} /> SCROLL TO FEEL IT</a>
        <span className="hero-side-label">A DIFFERENT KIND OF BREW</span>
      </section>

      <section className="intro-section section-pad" id="intro">
        <SectionReveal className="intro-mark"><span>m</span><span>n</span><span>c</span><span>h</span></SectionReveal>
        <SectionReveal className="intro-copy">
          <p className="eyebrow">A FRESH TAKE ON YOUR EVERYDAY</p>
          <h2>WE DON&apos;T DO<br /><span>ORDINARY.</span></h2>
          <p>Good taste. Different energy. Welcome to MNCH. A little ritual, a little reset, and always room to make it your own.</p>
          <Link className="arrow-link" href="/our-story">GET TO KNOW US <ArrowUpRight size={17} /></Link>
        </SectionReveal>
        <SectionReveal className="intro-photo photo-frame">
          <Image src={photos[1].src} alt={photos[1].alt} fill sizes="(max-width: 700px) 90vw, 38vw" />
          <span className="photo-index">A MOMENT, IN MNCH</span>
        </SectionReveal>
        <span className="intro-star" aria-hidden="true">✳</span>
      </section>

      <section className="signature-section section-pad">
        <div className="section-heading">
          <SectionReveal><p className="eyebrow">GOOD THINGS, IN A CAN</p><h2>MEET YOUR NEXT<br /><span>OBSESSION.</span></h2></SectionReveal>
          <SectionReveal><p className="heading-aside">A peek at the MNCH world.<br />Details are still brewing.</p><Link className="arrow-link" href="/menu">SEE THE MENU <ArrowUpRight size={17} /></Link></SectionReveal>
        </div>
        <div className="drink-cards">
          {photos.slice(0, 3).map((photo, index) => (
            <SectionReveal className={`drink-card drink-card-${index + 1}`} key={photo.src}>
              <Link href="/menu" className="drink-image">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 86vw, 31vw" />
                <span className="drink-number">0{index + 1}</span><span className="drink-arrow"><ArrowUpRight size={18} /></span>
              </Link>
              <div className="drink-caption"><span>MNCH / DETAILS TO COME</span><span>VIEW MENU ↗</span></div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="experience-section section-pad">
        <SectionReveal className="experience-photo photo-frame">
          <Image src={photos[3].src} alt={photos[3].alt} fill sizes="(max-width: 700px) 90vw, 54vw" />
          <span className="photo-index">OUT OF OFFICE, INTO THE MOMENT</span>
        </SectionReveal>
        <SectionReveal className="experience-copy">
          <p className="eyebrow">MORE THAN JUST A DRINK</p>
          <h2>MAKE ROOM<br />FOR <span>THE GOOD</span><br />STUFF.</h2>
          <p>For the long catch-ups, quick pick-me-ups and plans that turn into stories. Find your moment, then make it MNCH.</p>
          <Link className="arrow-link" href="/gallery">STEP INTO OUR WORLD <ArrowUpRight size={17} /></Link>
          <span className="experience-scribble" aria-hidden="true">good<br />energy!</span>
        </SectionReveal>
      </section>

      <section className="manifesto-section">
        <div className="manifesto-shape shape-a" /><div className="manifesto-shape shape-b" />
        <SectionReveal>
          <p className="eyebrow eyebrow-light">THE MNCH STATE OF MIND</p>
          <h2>GOOD BREWS.<br /><span>BETTER MOODS.</span><br />ALWAYS MNCH<span className="red-period">.</span></h2>
          <Link className="button button-cream" href="/our-story">A LITTLE MORE ABOUT US <ArrowUpRight size={16} /></Link>
        </SectionReveal>
        <span className="manifesto-side">SIP INTO SOMETHING DIFFERENT</span>
      </section>

      <section className="gallery-section section-pad">
        <div className="section-heading gallery-heading">
          <SectionReveal><p className="eyebrow">THE MNCH CAMERA ROLL</p><h2>GOOD TIMES.<br /><span>GREAT TASTE.</span></h2></SectionReveal>
          <SectionReveal><p className="heading-aside">Six little windows into<br />the world of MNCH.</p><Link className="arrow-link" href="/gallery">VIEW THE GALLERY <ArrowUpRight size={17} /></Link></SectionReveal>
        </div>
        <GalleryGrid images={photos} preview />
      </section>

      <InstagramSection />

      <section className="final-cta">
        <SectionReveal><p className="eyebrow">YOUR NEXT GOOD THING STARTS HERE</p><h2>READY FOR A<br /><span>DIFFERENT</span> KIND<br />OF BREW<span className="hero-period">?</span></h2><Link className="button button-dark" href="/menu">DISCOVER MNCH <ArrowUpRight size={16} /></Link></SectionReveal>
        <span className="final-cta-stamp">MADE FOR<br />YOUR MOOD</span>
      </section>
    </main>
  );
}
