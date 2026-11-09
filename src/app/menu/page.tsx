import type { Metadata } from "next";
import { PageIntro, SectionReveal } from "@/components/sections";
import { MenuBrowser } from "@/components/menu-browser";

export const metadata: Metadata = { title: "Menu", description: "Browse the MNCH menu, from hot coffee and matcha to frost shakes, chillers, frappes and soft serve." };

export default function MenuPage() {
  return (
    <main className="menu-page">
      <PageIntro label="SIPS MENU / FIND YOUR FAVORITE" title="GOOD TASTE." highlight="NO SAME-SAME." description="Hot coffee, bright chillers, frosty shakes and a little something soft. Find your next MNCH moment." />
      <section className="menu-content section-pad">
        <SectionReveal className="menu-note"><span className="menu-note-mark">✳</span><p>MADE FOR YOUR MOOD.<br /><span>Find a classic, try a new favorite, make it an MNCH moment.</span></p></SectionReveal>
        <MenuBrowser />
      </section>
    </main>
  );
}
