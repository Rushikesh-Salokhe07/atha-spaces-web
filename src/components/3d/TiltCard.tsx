"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  intensity?: number;
}

export default function TiltCard({
  children,
  className = "",
  glareColor = "rgba(14, 165, 233, 0.15)",
  intensity = 15,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springConfig);
  const scale = useSpring(hovering ? 1.02 : 1, springConfig);

  // Glare position
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    setHovering(false);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {children}

      {/* Glare overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
        style={{
          opacity: hovering ? 1 : 0,
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx}% ${gy}%, ${glareColor}, transparent 60%)`
          ),
        }}
      />

      {/* Subtle border glow on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0"
        style={{
          opacity: hovering ? 0.5 : 0,
          boxShadow: `0 0 20px 2px ${glareColor}`,
        }}
      />
    </motion.div>
  );
}
