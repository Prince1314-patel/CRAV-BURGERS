"use client";

import { type RefObject, useEffect, useRef } from "react";
import { invalidate } from "@react-three/fiber";

/**
 * 0→1 progress through a tall container as it scrolls past — 0 when its
 * top reaches the viewport top, 1 when its bottom reaches the viewport
 * bottom. Pair with a `sticky top-0 h-screen` inner wrapper so content
 * stays pinned on screen while this progress scrubs from 0 to 1.
 */
export function useSectionProgress(containerRef: RefObject<HTMLElement | null>) {
  const progress = useRef(0);

  useEffect(() => {
    function onScroll() {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      progress.current = Math.min(Math.max(scrolled / Math.max(total, 1), 0), 1);
      invalidate();
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [containerRef]);

  return progress;
}
