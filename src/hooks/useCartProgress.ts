"use client";

import { useEffect, useRef } from "react";
import { invalidate } from "@react-three/fiber";

/**
 * 0→1 progress toward "arrived at the map" rather than plain page-scroll
 * fraction: reaches 1 when #map-destination (RestaurantMap) is roughly
 * centered in view, and stays at 1 for any scroll beyond that (through the
 * footer) — same technique the old ScrollCart used, just re-measuring
 * against the map instead of computing a 2D path.
 */
export function useCartProgress() {
  const progress = useRef(0);

  useEffect(() => {
    let endScroll = 1;

    function measure() {
      const destination = document.getElementById("map-destination");
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      if (!destination) {
        endScroll = maxScroll;
        return;
      }
      const destTop = destination.getBoundingClientRect().top + window.scrollY;
      endScroll = Math.min(Math.max(destTop - window.innerHeight * 0.5, 1), maxScroll);
    }

    function onScroll() {
      progress.current = Math.min(Math.max(window.scrollY / endScroll, 0), 1);
      invalidate();
    }

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return progress;
}
