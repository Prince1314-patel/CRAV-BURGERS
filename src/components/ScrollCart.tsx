"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const START_TOP = 96;
const CART_SIZE = 44;

export default function ScrollCart() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const [path, setPath] = useState<{
    endProgress: number;
    startLeft: number;
    endTop: number;
    endLeft: number;
  } | null>(null);

  useEffect(() => {
    function measure() {
      const destination = document.getElementById("map-destination");
      if (!destination) return;

      const rect = destination.getBoundingClientRect();
      const docHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = Math.max(docHeight - viewportHeight, 1);

      const destinationTop = rect.top + window.scrollY;
      const destinationLeft = rect.left + window.scrollX + rect.width / 2 - CART_SIZE / 2;
      const reachedScrollY = Math.max(destinationTop - viewportHeight * 0.6, 0);

      setPath({
        endProgress: Math.min(Math.max(reachedScrollY / maxScroll, 0.1), 1),
        startLeft: 24,
        endTop: destinationTop,
        endLeft: destinationLeft,
      });
    }

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    const timeout = window.setTimeout(measure, 1000);

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      window.clearTimeout(timeout);
    };
  }, []);

  const y = useTransform(
    scrollYProgress,
    [0, path?.endProgress ?? 1],
    [START_TOP, path?.endTop ?? START_TOP],
  );
  const x = useTransform(
    scrollYProgress,
    [0, path?.endProgress ?? 1],
    [path?.startLeft ?? 24, path?.endLeft ?? 24],
  );
  const wheelRotation = useTransform(scrollYProgress, [0, path?.endProgress ?? 1], [0, 1080]);
  const transform = useMotionTemplate`translate(${x}px, ${y}px)`;
  const wheelTransform = useMotionTemplate`rotate(${wheelRotation}deg)`;

  if (!path) return null;

  const wheelSize = CART_SIZE * 0.34;
  const wheelCenterLeft = CART_SIZE * 0.28;
  const wheelCenterTop = CART_SIZE * 0.82;

  return (
    <motion.div
      className="pointer-events-none absolute top-0 left-0 z-40"
      style={
        prefersReducedMotion
          ? { transform: `translate(${path.endLeft}px, ${path.endTop}px)` }
          : { transform }
      }
      aria-hidden="true"
    >
      <div className="relative" style={{ width: CART_SIZE, height: CART_SIZE }}>
        <Image
          src="/img/cart-icon.png"
          alt=""
          width={CART_SIZE}
          height={CART_SIZE}
          className="h-full w-full object-contain"
          priority
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: wheelSize,
            height: wheelSize,
            left: wheelCenterLeft - wheelSize / 2,
            top: wheelCenterTop - wheelSize / 2,
            ...(prefersReducedMotion ? {} : { transform: wheelTransform }),
          }}
        >
          <svg viewBox="0 0 20 20" className="h-full w-full overflow-visible">
            <line x1="10" y1="0" x2="10" y2="20" stroke="var(--cream)" strokeWidth="1.4" />
            <line x1="0" y1="10" x2="20" y2="10" stroke="var(--cream)" strokeWidth="1.4" />
            <line x1="2.9" y1="2.9" x2="17.1" y2="17.1" stroke="var(--cream)" strokeWidth="1.2" />
            <line x1="17.1" y1="2.9" x2="2.9" y2="17.1" stroke="var(--cream)" strokeWidth="1.2" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
