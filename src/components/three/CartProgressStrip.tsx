"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import type { Group } from "three";
import { useCartProgress } from "@/hooks/useCartProgress";

useGLTF.preload("/models/cart.glb");

const WHEEL_RADIUS = 0.35;
const MARGIN = 0.88; // leave a little room so the cart doesn't clip the edges

function TravelingCart() {
  const { scene } = useGLTF("/models/cart.glb");
  const wheel = useMemo(() => scene.getObjectByName("Wheel") ?? null, [scene]);
  const groupRef = useRef<Group>(null);
  const progress = useCartProgress();
  // The strip is extremely wide and short (~11:1), so the visible world
  // width at this fov/distance is much bigger than a guessed constant —
  // viewport.width is R3F's own computed value for it, kept in sync on
  // resize, which is what a hardcoded TRAVEL number got wrong before.
  const { viewport } = useThree();

  useFrame(() => {
    const travel = viewport.width * MARGIN;
    const x = (progress.current - 0.5) * travel;
    if (groupRef.current) groupRef.current.position.x = x;
    // Wheel's thin axis is Z after Blender's Z-up -> glTF Y-up export
    // (measured on the exported GLB, not assumed — see CinematicCanvas
    // history). Rotation driven by distance traveled, so idle vs rolling
    // falls out of whether x is actually changing.
    if (wheel) wheel.rotation.z = -x / WHEEL_RADIUS;
  });

  return (
    <group ref={groupRef} position={[0, -0.9, 0]} scale={0.95}>
      <primitive object={scene} />
    </group>
  );
}

/**
 * A small, always-visible "progress bar" pinned to the bottom of the
 * viewport — the cart itself is the progress indicator, sliding left to
 * right as the page scrolls and coming to rest once it reaches the map.
 */
export default function CartProgressStrip() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 h-28 overflow-hidden"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    >
      <div className="absolute inset-x-6 bottom-10 border-t-2 border-dashed border-gold/50 sm:inset-x-12" />
      {/* Orthographic, not perspective: this strip is ~11:1 wide-to-tall, and
          at any normal fov that works out to a huge effective horizontal
          fov — objects away from dead-center render visibly warped/tilted.
          Orthographic has no perspective distortion regardless of x. */}
      <Canvas frameloop="demand" orthographic camera={{ position: [0, 0.5, 5], zoom: 39 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={1} color="#e8b34b" />
        <TravelingCart />
      </Canvas>
    </div>
  );
}
