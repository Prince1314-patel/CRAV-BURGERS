"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useReducedMotion } from "motion/react";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [size, setSize] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new ResizeObserver(([entry]) => {
      const rect = entry.contentRect;
      setSize(direction === "horizontal" ? rect.width : rect.height);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [direction]);

  useEffect(() => {
    if (size === 0 || prefersReducedMotion) return;

    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    let controls: ReturnType<typeof animate>;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return () => controls.stop();
  }, [key, translation, currentDuration, size, gap, isTransitioning, direction, reverse, prefersReducedMotion]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  if (prefersReducedMotion) {
    return (
      <div
        className={className}
        style={{
          display: "flex",
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal" ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={containerRef}
        {...hoverProps}
      >
        {children}
        <div aria-hidden="true" style={{ display: "contents" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
