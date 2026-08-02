"use client";

import * as React from "react";
import { createMap } from "piri";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";

import Reveal from "@/components/Reveal";
import { DottedMap } from "@/registry/magicui/dotted-map";
import type { Marker } from "@/registry/magicui/dotted-map";

type CityMarker = Marker & { label: string };

const MUMBAI: CityMarker = { lat: 19.076, lng: 72.8777, size: 1.4, label: "Mumbai" };
const LONDON: CityMarker = { lat: 51.5074, lng: -0.1278, size: 1.4, label: "London" };

const markers: CityMarker[] = [MUMBAI, LONDON];

const MAP_WIDTH = 160;
const MAP_HEIGHT = 80;

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

function FlightPath({ from, to }: { from: Point; to: Point }) {
  const prefersReducedMotion = useReducedMotion();
  const t = useMotionValue(0);

  const control: Point = {
    x: (from.x + to.x) / 2,
    y: Math.min(from.y, to.y) - MAP_HEIGHT * 0.3,
  };

  const pathD = `M ${from.x} ${from.y} Q ${control.x} ${control.y} ${to.x} ${to.y}`;

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

  const x = useTransform(t, (v) => quadPoint(from, control, to, v).x);
  const y = useTransform(t, (v) => quadPoint(from, control, to, v).y);
  const angle = useTransform(t, (v) => quadTangentAngle(from, control, to, v));

  return (
    <g style={{ pointerEvents: "none" }}>
      <path
        d={pathD}
        fill="none"
        stroke="var(--gold)"
        strokeWidth={0.35}
        strokeDasharray="1.6 1.4"
        strokeLinecap="round"
        opacity={0.55}
      />

      {!prefersReducedMotion && (
        <motion.g style={{ x, y, rotate: angle }}>
          <path
            d="M -1.8 0 L 1.6 -0.65 L 0.5 0 L 1.6 0.65 Z"
            fill="var(--maroon)"
            stroke="var(--cream)"
            strokeWidth={0.15}
            strokeLinejoin="round"
          />
        </motion.g>
      )}
    </g>
  );
}

export default function JourneyMap() {
  // Computed independently of DottedMap's own internal projection so both
  // marker positions are known up front (needed to draw the connecting path).
  const positions = React.useMemo(() => {
    const { addMarkers } = createMap({
      width: MAP_WIDTH,
      height: MAP_HEIGHT,
      mapSamples: 1,
    });
    return (addMarkers as unknown as (m: CityMarker[]) => (CityMarker & Point)[])(
      markers,
    );
  }, []);

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
          <DottedMap<CityMarker>
            markers={markers}
            width={MAP_WIDTH}
            height={MAP_HEIGHT}
            className="text-maroon/20"
            markerColor="var(--maroon)"
            dotRadius={0.35}
            renderMarkerOverlay={({ marker, x, y, r, index }) => {
              const isLast = index === markers.length - 1;

              return (
                <g>
                  {isLast && (
                    <FlightPath from={positions[0]} to={positions[1]} />
                  )}
                  <text
                    x={x}
                    y={y - r - 1.4}
                    textAnchor="middle"
                    fontSize={2.4}
                    fill="var(--ink)"
                    className="font-body font-semibold"
                  >
                    {marker.label}
                  </text>
                </g>
              );
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}
