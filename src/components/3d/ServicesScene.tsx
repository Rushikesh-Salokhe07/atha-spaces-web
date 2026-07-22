"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  const shapes = useMemo(
    () => [
      { pos: [-2, 1, -1] as [number, number, number], geo: "box", scale: 0.3, speed: 1 },
      { pos: [2, -0.5, -2] as [number, number, number], geo: "sphere", scale: 0.25, speed: 1.5 },
      { pos: [-1.5, -1, 0.5] as [number, number, number], geo: "cylinder", scale: 0.2, speed: 0.8 },
      { pos: [1.5, 1.5, -1] as [number, number, number], geo: "torus", scale: 0.2, speed: 1.2 },
      { pos: [0, -1.5, -1] as [number, number, number], geo: "cone", scale: 0.3, speed: 1.3 },
      { pos: [-2.5, 0, -2] as [number, number, number], geo: "octahedron", scale: 0.25, speed: 0.9 },
      { pos: [2.5, 0.5, 0] as [number, number, number], geo: "dodecahedron", scale: 0.2, speed: 1.1 },
      { pos: [0, 2, 0.5] as [number, number, number], geo: "tetrahedron", scale: 0.25, speed: 1.4 },
    ],
    []
  );

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#0ea5e9",
        transparent: true,
        opacity: 0.15,
        roughness: 0.2,
        metalness: 0.3,
        wireframe: true,
      }),
    []
  );

  const geoMap: Record<string, THREE.BufferGeometry> = useMemo(
    () => ({
      box: new THREE.BoxGeometry(1, 1, 1),
      sphere: new THREE.SphereGeometry(0.5, 16, 16),
      cylinder: new THREE.CylinderGeometry(0.3, 0.3, 1, 12),
      torus: new THREE.TorusGeometry(0.4, 0.15, 12, 24),
      cone: new THREE.ConeGeometry(0.4, 0.8, 8),
      octahedron: new THREE.OctahedronGeometry(0.5),
      dodecahedron: new THREE.DodecahedronGeometry(0.4),
      tetrahedron: new THREE.TetrahedronGeometry(0.5),
    }),
    []
  );

  return (
    <group ref={groupRef}>
      {shapes.map((s, i) => (
        <Float key={i} speed={s.speed} rotationIntensity={0.5} floatIntensity={0.8}>
          <mesh position={s.pos} scale={s.scale} geometry={geoMap[s.geo]} material={material} />
        </Float>
      ))}
    </group>
  );
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.8,
      0.03
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.5,
      0.03
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ServicesScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 -z-10"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <pointLight position={[0, 0, 3]} intensity={0.3} color="#38bdf8" />

        <FloatingShapes />
        <CameraRig />
      </Canvas>
    </motion.div>
  );
}
