"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Perf notes:
 * - We only animate transform + opacity. These are compositor-only in every
 *   modern browser (no layout, no paint), so they hit 60fps easily.
 * - We DELIBERATELY do NOT animate `filter: blur()` — it forces a full
 *   repaint every frame and is the #1 cause of laggy Framer Motion sites.
 * - Durations are kept short (0.35–0.5s). Anything ≥0.7s reads as sluggish
 *   on a scroll reveal.
 */

// Loose type + `as never` cast at the prop site avoids TS "union too complex"
// errors that framer-motion's target union produces.
type AnimState = Record<string, string | number>;

type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "none"
  | "zoom"
  | "flip"
  | "rotate"
  | "spring"
  | "blur" /* kept for API compatibility — now just a fast fade-in */
  | "stagger";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealVariant;
  duration?: number;
}

const variantMap: Record<
  RevealVariant,
  { initial: AnimState; easing: number[] | string }
> = {
  up:      { initial: { opacity: 0, y: 24 },                 easing: [0.22, 1, 0.36, 1] },
  down:    { initial: { opacity: 0, y: -24 },                easing: [0.22, 1, 0.36, 1] },
  left:    { initial: { opacity: 0, x: -32 },                easing: [0.22, 1, 0.36, 1] },
  right:   { initial: { opacity: 0, x: 32 },                 easing: [0.22, 1, 0.36, 1] },
  none:    { initial: { opacity: 0 },                        easing: "easeOut" },
  zoom:    { initial: { opacity: 0, scale: 0.92 },           easing: [0.16, 1, 0.3, 1] },
  flip:    { initial: { opacity: 0, rotateX: 20, y: 20 },    easing: [0.22, 1, 0.36, 1] },
  rotate:  { initial: { opacity: 0, rotate: -4, x: -20 },    easing: [0.22, 1, 0.36, 1] },
  spring:  { initial: { opacity: 0, y: 32, scale: 0.95 },    easing: [0.34, 1.3, 0.64, 1] },
  blur:    { initial: { opacity: 0 },                        easing: "easeOut" },
  stagger: { initial: { opacity: 0, y: 16 },                 easing: [0.22, 1, 0.36, 1] },
};

const finalState: AnimState = {
  opacity: 1,
  y: 0,
  x: 0,
  scale: 1,
  rotate: 0,
  rotateX: 0,
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.45,
}: ScrollRevealProps) {
  const variant = variantMap[direction];

  return (
    <motion.div
      initial={variant.initial as never}
      whileInView={finalState as never}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: variant.easing as number[],
      }}
      style={{
        willChange: "transform, opacity",
        ...(direction === "flip"
          ? { perspective: 800, transformStyle: "preserve-3d" as const }
          : {}),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger container — wrap children for wave reveals ── */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.06,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
