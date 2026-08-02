"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Placeholder journey state for the Phase 4 integration proof.
 * Phase 5/6 replace this with real values driven by `src/content/journey.ts`
 * (camera waypoints, cart state, light preset per beat).
 */
export type JourneyState = {
  progress: number;
  cameraZ: number;
  spinY: number;
};

/**
 * Sets up the single master ScrollTrigger for the whole page and exposes a
 * mutable ref that the 3D layer reads via useFrame. Deliberately not React
 * state: GSAP writes into this ref on every scroll tick, and pushing that
 * through React would re-render on every pixel of scroll — the ref plus
 * useFrame keeps the hot path off React entirely.
 */
export function useJourneyScroll() {
  const journey = useRef<JourneyState>({ progress: 0, cameraZ: 8, spinY: 0 });

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        journey.current.progress = self.progress;
        journey.current.cameraZ = 8 - self.progress * 6;
        journey.current.spinY = self.progress * Math.PI * 4;
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return journey;
}
