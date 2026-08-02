"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export default function ScrollCart() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const left = useTransform(scrollYProgress, [0, 1], ["0%", "calc(100% - 24px)"]);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-[var(--nav-h)] z-40 hidden h-6 sm:top-[var(--nav-h-sm)] md:block"
      aria-hidden="true"
    >
      <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 border-t border-dashed border-gold/50 lg:inset-x-12" />
      <div className="absolute inset-x-6 top-1/2 h-6 -translate-y-1/2 lg:inset-x-12">
        <motion.div
          style={prefersReducedMotion ? undefined : { left }}
          className="absolute top-0 left-0 h-6 w-6"
        >
          <Image
            src="/img/cart-icon.png"
            alt=""
            width={24}
            height={24}
            className="h-full w-full object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
