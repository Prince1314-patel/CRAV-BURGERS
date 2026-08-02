"use client";

import * as React from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";

import Reveal from "@/components/Reveal";

// Hand-placed points on the 200x100 viewBox below — a stylised route
// illustration, not a geo-projected map.
const MUMBAI = { x: 158, y: 62, label: "Mumbai" };
const LONDON = { x: 40, y: 30, label: "London" };

type Point = { x: number; y: number };

function quadPoint(p0: Point, p1: Point, p2: Point, t: number): Point {
  const mt = 1 - t;
  return {
    x: mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x,
    y: mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y,
  };
}

function quadTangentAngle(p0: Point, p1: Point, p2: Point, t: number): number {
  const dx = 2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
  const dy = 2 * (1 - t) * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

const control: Point = { x: (MUMBAI.x + LONDON.x) / 2, y: Math.min(MUMBAI.y, LONDON.y) - 24 };
const pathD = `M ${MUMBAI.x} ${MUMBAI.y} Q ${control.x} ${control.y} ${LONDON.x} ${LONDON.y}`;

function FlightPath() {
  const prefersReducedMotion = useReducedMotion();
  const t = useMotionValue(0);

  React.useEffect(() => {
    if (prefersReducedMotion) return;
    const controls = animate(t, 1, {
      duration: 3.4,
      ease: [0.45, 0.05, 0.55, 0.95],
      repeat: Infinity,
      repeatDelay: 0.6,
    });
    return () => controls.stop();
  }, [prefersReducedMotion, t]);

  const x = useTransform(t, (v) => quadPoint(MUMBAI, control, LONDON, v).x);
  const y = useTransform(t, (v) => quadPoint(MUMBAI, control, LONDON, v).y);
  const angle = useTransform(t, (v) => quadTangentAngle(MUMBAI, control, LONDON, v));

  if (prefersReducedMotion) return null;

  return (
    <motion.g style={{ x, y, rotate: angle }}>
      <path
        d="M -1.8 0 L 1.6 -0.65 L 0.5 0 L 1.6 0.65 Z"
        fill="var(--maroon)"
        stroke="var(--cream)"
        strokeWidth={0.15}
        strokeLinejoin="round"
      />
    </motion.g>
  );
}

function CityDot({ point }: { point: Point & { label: string } }) {
  return (
    <g>
      <circle cx={point.x} cy={point.y} r={1.4} fill="var(--maroon)" />
      <text
        x={point.x}
        y={point.y - 3.8}
        textAnchor="middle"
        fontSize={4.5}
        fill="var(--ink)"
        className="font-body font-semibold"
      >
        {point.label}
      </text>
    </g>
  );
}

export default function JourneyMap() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <Reveal className="text-center">
          <p className="font-body text-sm font-semibold tracking-[0.2em] text-maroon/60 uppercase">
            Our Journey
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight text-ink">
            Mumbai to Wolverhampton
          </h2>
        </Reveal>

        <Reveal
          delay={100}
          className="relative mt-12 aspect-[2/1] w-full overflow-hidden rounded-lg bg-maroon/[0.03]"
        >
          <svg viewBox="0 0 200 100" className="h-full w-full">
            <path
              d={pathD}
              fill="none"
              stroke="var(--gold)"
              strokeWidth={0.35}
              strokeDasharray="1.6 1.4"
              strokeLinecap="round"
              opacity={0.55}
            />
            <FlightPath />
            <CityDot point={MUMBAI} />
            <CityDot point={LONDON} />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
