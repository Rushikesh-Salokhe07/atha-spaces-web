"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, ContactShadows } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

/* ── Wireframe building geometry ── */
function Building() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15 + state.clock.elapsedTime * 0.08;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });

  const edgeMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: new THREE.Color("#0ea5e9"),
        transparent: true,
        opacity: 0.6,
      }),
    []
  );

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#0ea5e9"),
        transparent: true,
        opacity: 0.08,
        roughness: 0.1,
        metalness: 0.1,
        side: THREE.DoubleSide,
      }),
    []
  );

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group
        ref={groupRef}
        scale={hovered ? 1.05 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Main building block */}
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[1.2, 1.8, 0.8]} />
          <primitive object={glassMaterial} attach="material" />
        </mesh>
        <lineSegments position={[0, 0.6, 0]}>
          <edgesGeometry args={[new THREE.BoxGeometry(1.2, 1.8, 0.8)]} />
          <primitive object={edgeMaterial} attach="material" />
        </lineSegments>

        {/* Right wing */}
        <mesh position={[0.9, 0.3, 0]}>
          <boxGeometry args={[0.6, 1.2, 0.7]} />
          <primitive object={glassMaterial} attach="material" />
        </mesh>
        <lineSegments position={[0.9, 0.3, 0]}>
          <edgesGeometry args={[new THREE.BoxGeometry(0.6, 1.2, 0.7)]} />
          <primitive object={edgeMaterial} attach="material" />
        </lineSegments>

        {/* Left extension */}
        <mesh position={[-0.8, 0.15, 0.1]}>
          <boxGeometry args={[0.4, 0.9, 0.6]} />
          <primitive object={glassMaterial} attach="material" />
        </mesh>
        <lineSegments position={[-0.8, 0.15, 0.1]}>
          <edgesGeometry args={[new THREE.BoxGeometry(0.4, 0.9, 0.6)]} />
          <primitive object={edgeMaterial} attach="material" />
        </lineSegments>

        {/* Roof / top element */}
        <mesh position={[0, 1.65, 0]}>
          <boxGeometry args={[1.0, 0.15, 0.6]} />
          <meshPhysicalMaterial color="#0ea5e9" transparent opacity={0.2} roughness={0} metalness={0.5} />
        </mesh>

        {/* Floor plane */}
        <mesh position={[0.1, -0.32, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.8, 2]} />
          <meshPhysicalMaterial color="#0ea5e9" transparent opacity={0.04} side={THREE.DoubleSide} />
        </mesh>

        {/* Window grid lines on main building */}
        {[-0.3, 0, 0.3].map((x) =>
          [0.2, 0.6, 1.0].map((y) => (
            <mesh key={`w-${x}-${y}`} position={[x, y, 0.401]}>
              <planeGeometry args={[0.18, 0.22]} />
              <meshPhysicalMaterial color="#38bdf8" transparent opacity={0.15} side={THREE.DoubleSide} />
            </mesh>
          ))
        )}

        {/* Floating particles */}
        <Particles />
      </group>
    </Float>
  );
}

/* ── Floating particles around the building ── */
function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 60;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 4;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 3;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#38bdf8" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

/* ── Mouse-reactive camera ── */
function CameraRig() {
  useFrame((state) => {
    const { pointer } = state;
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      pointer.x * 0.3,
      0.05
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      1 + pointer.y * 0.2,
      0.05
    );
    state.camera.lookAt(0, 0.5, 0);
  });
  return null;
}

/* ── Main exported scene ── */
export default function HeroScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="absolute inset-0 -z-10"
    >
      <Canvas
        camera={{ position: [0, 1, 3.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-3, 3, -3]} intensity={0.3} color="#38bdf8" />
        <pointLight position={[0, 2, 2]} intensity={0.4} color="#0ea5e9" />

        <Building />
        <CameraRig />

        <ContactShadows
          position={[0, -0.35, 0]}
          opacity={0.15}
          scale={5}
          blur={2}
          far={3}
          color="#0ea5e9"
        />
      </Canvas>
    </motion.div>
  );
}
