"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Camera, Menu, X } from "lucide-react";
import { instagramUrl, navigation } from "@/data/brand";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="MNCH Brews home" onClick={() => setOpen(false)}>MNCH</Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={pathname === item.href ? "nav-link active" : "nav-link"}>{item.label}</Link>)}
      </nav>
      <Link className="header-cta" href="/menu">DISCOVER MNCH <ArrowUpRight size={15} /></Link>
      <button className="mobile-menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
      <AnimatePresence>
        {open && <motion.nav className="mobile-nav" aria-label="Mobile navigation" initial={reduceMotion ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -12 }} transition={{ duration: reduceMotion ? 0 : 0.22 }}>
          {navigation.map((item, index) => <motion.div key={item.href} initial={reduceMotion ? false : { opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 0.18, delay: reduceMotion ? 0 : index * 0.045 }}><Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={19} /></Link></motion.div>)}
          <a className="mobile-instagram" href={instagramUrl} target="_blank" rel="noreferrer"><Camera size={17} /> @MNCHBREWS</a>
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top"><span className="eyebrow eyebrow-light">A DIFFERENT KIND OF BREW</span><a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="MNCH Brews on Instagram"><Camera size={19} /></a></div>
      <Link href="/" className="footer-wordmark">MNCH</Link>
      <div className="footer-bottom">
        <div><p className="footer-name">MNCH BREWS</p><p className="footer-tagline">Good taste. Different energy.</p></div>
        <nav className="footer-nav" aria-label="Footer navigation">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label === "OUR STORY" ? "Our Story" : item.label.charAt(0) + item.label.slice(1).toLowerCase()}</Link>)}</nav>
        <a className="footer-social" href={instagramUrl} target="_blank" rel="noreferrer">FOLLOW @MNCHBREWS <ArrowUpRight size={15} /></a>
      </div>
      <div className="footer-legal"><span>© 2026 MNCH BREWS</span><span>STAY A LITTLE DIFFERENT.</span><span>MADE FOR YOUR MOOD <b>✳</b></span></div>
    </footer>
  );
}
