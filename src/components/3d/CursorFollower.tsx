"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 150, damping: 25, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Large ambient glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen hidden lg:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(192,118,107,0.06) 0%, rgba(192,118,107,0.02) 40%, transparent 70%)",
        }}
      />

      {/* Small dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "rgba(192,118,107,0.4)",
          boxShadow: "0 0 12px 4px rgba(192,118,107,0.15)",
        }}
      />
    </>
  );
}
