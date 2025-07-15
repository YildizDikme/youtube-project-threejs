"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  ScrollControls,
  useProgress,
  Html,
  ContactShadows,
} from "@react-three/drei";
import Model from "./Model";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)}% loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas
      shadows
      gl={{ antialias: true }}
      className="pointer-events-none absolute top-0 left-0 w-full h-svh z-10"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={3} castShadow />
      <pointLight position={[0, 2, 2]} intensity={0.5} />

      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={2}>
          <Model path="/animated-astronaut.glb" />
        </ScrollControls>

        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4}
        />
      </Suspense>
    </Canvas>
  );
}
