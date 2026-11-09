import type { Metadata } from "next";
import { PageIntro, SectionReveal } from "@/components/sections";
import { GalleryGrid } from "@/components/gallery-grid";
import { photos } from "@/data/brand";

export const metadata: Metadata = { title: "Gallery", description: "Six original moments from the world of MNCH Brews." };

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      <PageIntro label="REAL MOMENTS, REAL MNCH" title="LIFE LOOKS" highlight="BETTER IN MNCH." description="The everyday, with a little more flavor. Take a look around." />
      <section className="gallery-content section-pad"><SectionReveal className="gallery-intro-row"><p>THE MNCH CAMERA ROLL<br /><span>Six moments. One different kind of energy.</span></p><span>CLICK ANY PHOTO TO TAKE A CLOSER LOOK ↗</span></SectionReveal><GalleryGrid images={photos} /></section>
    </main>
  );
}
