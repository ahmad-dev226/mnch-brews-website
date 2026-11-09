"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { photos } from "@/data/brand";

type GalleryPhoto = (typeof photos)[number];

export function GalleryGrid({ images, preview = false }: { images: readonly GalleryPhoto[]; preview?: boolean }) {
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (active === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => current === null ? null : (current + 1) % images.length);
      if (event.key === "ArrowLeft") setActive((current) => current === null ? null : (current - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [active, images.length]);

  return (
    <>
      <div className={preview ? "gallery-grid gallery-preview" : "gallery-grid"}>
        {images.map((photo, index) => (
          <motion.button className={`gallery-item gallery-item-${index + 1}`} key={photo.src} type="button" onClick={() => setActive(index)} aria-label={`View photo ${index + 1}: ${photo.alt}`} whileHover={reduceMotion ? undefined : { y: -5 }}>
            <Image src={photo.src} alt={photo.alt} fill sizes={preview ? "(max-width: 700px) 45vw, 30vw" : "(max-width: 700px) 46vw, 31vw"} />
            <span className="gallery-item-index">MNCH / 0{index + 1}</span><span className="gallery-item-view">VIEW ↗</span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {active !== null && <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }} onClick={() => setActive(null)}>
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close gallery"><X size={22} /></button>
          <button className="lightbox-arrow lightbox-prev" onClick={(event) => { event.stopPropagation(); setActive((active - 1 + images.length) % images.length); }} aria-label="Previous photo"><ArrowLeft /></button>
          <motion.div className="lightbox-image" key={images[active].src} initial={reduceMotion ? false : { scale: 0.96 }} animate={{ scale: 1 }} transition={{ duration: reduceMotion ? 0 : 0.2 }} onClick={(event) => event.stopPropagation()}>
            <Image src={images[active].src} alt={images[active].alt} fill sizes="90vw" />
            <p>{images[active].alt} <span>0{active + 1} / 0{images.length}</span></p>
          </motion.div>
          <button className="lightbox-arrow lightbox-next" onClick={(event) => { event.stopPropagation(); setActive((active + 1) % images.length); }} aria-label="Next photo"><ArrowRight /></button>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
