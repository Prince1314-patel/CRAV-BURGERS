"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useSectionProgress } from "@/hooks/useSectionProgress";

const MUMBAI: [number, number] = [19.076, 72.8777];
const LONDON: [number, number] = [51.5074, -0.1278];
const BG = "#0a0705";

function locationToPhi(lon: number) {
  return -lon * (Math.PI / 180);
}

function shortestAngleLerp(from: number, to: number, t: number) {
  const diff = ((to - from + Math.PI) % (Math.PI * 2)) - Math.PI;
  return from + diff * t;
}

const mumbaiPhi = locationToPhi(MUMBAI[1]);
const londonPhi = locationToPhi(LONDON[1]);

function Globe({ progress, reducedMotion }: { progress: React.RefObject<number>; reducedMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let drift = 0;
    let frameId = 0;
    const width = canvas.offsetWidth;

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: width * 2,
      height: width * 2,
      phi: mumbaiPhi,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.9, 0.85, 0.75],
      markerColor: [0.91, 0.7, 0.29],
      glowColor: [0.35, 0.2, 0.1],
      opacity: 0.9,
      markers: [
        { location: MUMBAI, size: 0.09 },
        { location: LONDON, size: 0.09 },
      ],
      arcs: [{ from: MUMBAI, to: LONDON, color: [0.91, 0.7, 0.29] }],
      arcColor: [0.91, 0.7, 0.29],
      arcWidth: 2,
      arcHeight: 0.5,
    });

    // cobe has no onRender callback in this version — driving phi from our
    // own rAF loop and calling globe.update(), the same pattern the
    // reference GlobePulse component uses.
    function loop() {
      if (!reducedMotion) drift += 0.0015;
      globe.update({
        phi: shortestAngleLerp(mumbaiPhi, londonPhi, progress.current) + drift,
        theta: 0.3,
      });
      frameId = requestAnimationFrame(loop);
    }
    frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
      globe.destroy();
    };
  }, [progress, reducedMotion]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", contain: "layout paint size" }} />;
}

/**
 * A tall (300vh) section with a sticky, pinned dark stage inside it — the
 * globe and heading stay fixed on screen while the extra scroll height
 * rotates the globe from facing Mumbai to facing London, the same
 * "scroll drives progress" model as CartProgressStrip rather than an
 * autoplaying timeline.
 */
export default function JourneyGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useSectionProgress(containerRef);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden"
        style={{ background: BG }}
      >
        <div className="relative z-10 text-center">
          <p className="font-body text-sm font-semibold tracking-[0.2em] text-gold/80 uppercase">Our Journey</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight text-cream">
            Mumbai to Wolverhampton
          </h2>
        </div>

        <div className="relative mt-6 aspect-square w-full max-w-[65vh]">
          <Globe progress={progress} reducedMotion={reducedMotion} />
        </div>
      </div>
    </section>
  );
}
