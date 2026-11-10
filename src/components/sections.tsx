"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { buildingPhoto, instagramUrl, photos } from "@/data/brand";

export function SectionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div className={`section-reveal ${className}`} initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function InstagramSection() {
  return (
    <section className="instagram-section section-pad">
      <SectionReveal className="instagram-title">
        <p className="eyebrow">THE GOOD STUFF, ON YOUR FEED</p>
        <h2>YOUR FEED NEEDS<br /><span>SOME MNCH.</span></h2>
        <p>Follow along for all things MNCH.</p>
        <a className="button button-dark" href={instagramUrl} target="_blank" rel="noreferrer">FOLLOW @MNCHBREWS <Camera size={16} /></a>
      </SectionReveal>
      <div className="instagram-strip">
        {photos.slice(0, 4).map((photo, index) => (
          <SectionReveal className={`instagram-tile tile-${index + 1}`} key={photo.src}>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label={`Open MNCH on Instagram: ${photo.alt}`}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 45vw, 19vw" />
              <span><ArrowUpRight size={20} /></span>
            </a>
          </SectionReveal>
        ))}
      </div>
      <span className="instagram-handle">@MNCHBREWS</span>
    </section>
  );
}

type PageIntroVariant = "story" | "menu" | "gallery" | "contact";

const pageIntroCaptions: Record<PageIntroVariant, string> = {
  story: "OUR PLACE / SIALKOT",
  menu: "GOOD TASTE STARTS HERE",
  gallery: "THE MNCH CAMERA ROLL / 07",
  contact: "FIND US / KENT PADEL COURT",
};

function PageIntroVisual({ variant }: { variant: PageIntroVariant }) {
  const reduceMotion = useReducedMotion();
  const visualRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: visualRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-14, 14]);

  return (
    <motion.div
      className={`page-intro-visual page-intro-visual-${variant}`}
      initial={reduceMotion ? false : { opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.12 }}
    >
      <motion.div ref={visualRef} className="page-intro-visual-inner" style={{ y: reduceMotion ? 0 : parallaxY }}>
        <Image
          className={`page-intro-image page-intro-image-${variant}`}
          src={buildingPhoto.src}
          alt={buildingPhoto.alt}
          fill
          priority
          sizes="(max-width: 700px) 86vw, (max-width: 1000px) 38vw, 34vw"
        />
      </motion.div>
      <span className="page-intro-photo-caption">{pageIntroCaptions[variant]}</span>
    </motion.div>
  );
}

export function PageIntro({ label, title, highlight, description, variant }: { label: string; title: string; highlight?: string; description?: string; variant: PageIntroVariant }) {
  return (
    <section className={`page-intro page-intro-${variant}`}>
      <SectionReveal>
        <p className="eyebrow"><span className="eyebrow-dot" /> {label}</p>
        <h1>{title}{highlight && <><br /><span>{highlight}</span></>}</h1>
        {description && <p className="page-intro-description">{description}</p>}
      </SectionReveal>
      <PageIntroVisual variant={variant} />
      <span className="page-intro-index">MNCH / A DIFFERENT KIND OF BREW</span>
    </section>
  );
}

export function PageLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="arrow-link" href={href}>{children} <ArrowUpRight size={17} /></Link>;
}
