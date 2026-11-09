"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function FloatingMNCHCan({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div className={`floating-can ${className}`} animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-2, 1, -2] }} transition={reduceMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
      <Image src="/images/mnch-floating-can.png" alt="The original MNCH layered strawberry, milk and matcha can" width={280} height={735} />
    </motion.div>
  );
}

export function FloatingCanLayer() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.28, 0.57, 0.82, 1], ["5vh", "29vh", "8vh", "25vh", "3vh"]);
  const x = useTransform(scrollYProgress, [0, 0.45, 1], [0, -28, 6]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-7, 5, -4]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.62, 1], [1, 0.84, 0.96, 0.78]);
  return (
    <motion.div className="floating-can-layer" style={{ y: reduceMotion ? 0 : y, x: reduceMotion ? 0 : x, rotate: reduceMotion ? 0 : rotate, scale: reduceMotion ? 0.9 : scale }} aria-hidden="true">
      <Image src="/images/mnch-floating-can.png" alt="" width={280} height={735} loading="eager" />
    </motion.div>
  );
}
