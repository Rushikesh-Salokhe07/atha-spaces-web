"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// framer-motion's TargetAndTransition union is huge; using a loose type
// and casting at the prop site avoids TS "union too complex" errors.
type AnimState = Record<string, string | number>;

type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "none"
  | "zoom"       /* scale from 0.8 */
  | "flip"       /* rotateX entrance */
  | "rotate"     /* slight rotation + slide */
  | "spring"     /* bouncy overshoot */
  | "blur"       /* pure blur-in, no movement */
  | "stagger";   /* for use inside a stagger parent */

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
  up: {
    initial: { opacity: 0, y: 50, filter: "blur(3px)" },
    easing: [0.25, 0.46, 0.45, 0.94],
  },
  down: {
    initial: { opacity: 0, y: -50, filter: "blur(3px)" },
    easing: [0.25, 0.46, 0.45, 0.94],
  },
  left: {
    initial: { opacity: 0, x: -60, filter: "blur(3px)" },
    easing: [0.25, 0.46, 0.45, 0.94],
  },
  right: {
    initial: { opacity: 0, x: 60, filter: "blur(3px)" },
    easing: [0.25, 0.46, 0.45, 0.94],
  },
  none: {
    initial: { opacity: 0 },
    easing: "easeOut",
  },
  zoom: {
    initial: { opacity: 0, scale: 0.75, filter: "blur(6px)" },
    easing: [0.16, 1, 0.3, 1],
  },
  flip: {
    initial: { opacity: 0, rotateX: 30, y: 30 },
    easing: [0.22, 1, 0.36, 1],
  },
  rotate: {
    initial: { opacity: 0, rotate: -6, x: -30, y: 20 },
    easing: [0.22, 1, 0.36, 1],
  },
  spring: {
    initial: { opacity: 0, y: 60, scale: 0.9 },
    easing: [0.34, 1.56, 0.64, 1],   /* overshoots slightly */
  },
  blur: {
    initial: { opacity: 0, filter: "blur(12px)" },
    easing: "easeOut",
  },
  stagger: {
    initial: { opacity: 0, y: 20 },
    easing: [0.25, 0.46, 0.45, 0.94],
  },
};

const finalState: AnimState = {
  opacity: 1,
  y: 0,
  x: 0,
  scale: 1,
  rotate: 0,
  rotateX: 0,
  filter: "blur(0px)",
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
}: ScrollRevealProps) {
  const variant = variantMap[direction];

  return (
    <motion.div
      initial={variant.initial as never}
      whileInView={finalState as never}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: variant.easing as number[],
      }}
      style={
        direction === "flip"
          ? { perspective: 800, transformStyle: "preserve-3d" as const }
          : undefined
      }
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
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
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
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
