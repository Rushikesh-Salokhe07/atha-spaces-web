"use client";

import { motion } from "framer-motion";

/* ══════════════════════════════════════════════════════
   DECORATIVE ELEMENTS — Cozy "home" aesthetic
   Renders real images from /public/images/decor/.
   ══════════════════════════════════════════════════════ */

interface DecorProps {
  className?: string;
  opacity?: number;
}

/* ── Helper wrapper — shared fade-in + positioning ── */
function DecorImage({
  src,
  alt,
  width,
  height,
  className = "",
  opacity = 0.18,
  initial,
  animate,
  transition,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  opacity?: number;
  initial?: Record<string, number>;
  animate?: Record<string, number>;
  transition?: Record<string, unknown>;
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      width={width}
      height={height}
      draggable={false}
      initial={initial ?? { opacity: 0, y: 20 }}
      animate={animate ?? { opacity, y: 0 }}
      transition={transition ?? { duration: 1.4, ease: "easeOut" }}
      className={`pointer-events-none select-none object-contain ${className}`}
    />
  );
}

/* ── MONEY PLANT / MONSTERA in Oslo Pot ── */
export function MoneyPlant({ className = "", opacity = 0.9 }: DecorProps) {
  return (
    <DecorImage
      src="/images/decor/MONSTERA PLANT IN OSLO POT-Photoroom.png"
      alt="Monstera plant in pot"
      width={220}
      height={320}
      className={className}
      opacity={opacity}
    />
  );
}

/* ── MONSTERA VASE — two leaves in slim bottle vase ── */
export function MonsteraVase({ className = "", opacity = 0.9 }: DecorProps) {
  return (
    <DecorImage
      src="/images/decor/Modern Flower in Vase Ideas That Will Blow Your Mind-Photoroom.png"
      alt="Monstera leaves in vase"
      width={180}
      height={300}
      className={className}
      opacity={opacity}
      transition={{ duration: 1.4, delay: 0.15, ease: "easeOut" }}
    />
  );
}

/* ── SNAKE PLANT / BIRD OF PARADISE in dark pot ── */
export function SnakePlant({ className = "", opacity = 0.9 }: DecorProps) {
  return (
    <DecorImage
      src="/images/decor/%F0%9F%8E%8D-Photoroom.png"
      alt="Bird of paradise plant"
      width={160}
      height={360}
      className={className}
      opacity={opacity}
      transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
    />
  );
}

/* ── DIEFFENBACHIA — variegated leaves in stone pot ── */
export function Dieffenbachia({ className = "", opacity = 0.9 }: DecorProps) {
  return (
    <DecorImage
      src="/images/decor/Dieffenbachia-Photoroom.png"
      alt="Dieffenbachia plant"
      width={200}
      height={300}
      className={className}
      opacity={opacity}
      transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
    />
  );
}

/* ── GROUP OF PLANTERS — terracotta planters together ── */
export function PlanterGroup({ className = "", opacity = 0.9 }: DecorProps) {
  return (
    <DecorImage
      src="/images/decor/MAYA _ handmade terracotta planters-Photoroom.png"
      alt="Group of terracotta planters"
      width={260}
      height={280}
      className={className}
      opacity={opacity}
      transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
    />
  );
}

/* ── WALL SHELF — three-tier with books, plants, vases ── */
export function WallShelf({ className = "" }: { className?: string }) {
  return (
    <DecorImage
      src="/images/decor/How to Style Open Shelves_ Step-by-Step-Photoroom.png"
      alt="Styled open wall shelves"
      width={240}
      height={400}
      className={className}
      opacity={0.9}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 0.9, x: 0 }}
      transition={{ duration: 1.2 }}
    />
  );
}

/* ── MINIMALIST SHELF — two-tier modern floating shelves ── */
export function MinimalistShelf({ className = "" }: { className?: string }) {
  return (
    <DecorImage
      src="/images/decor/1038501995340687716-Photoroom.png"
      alt="Minimalist floating shelves"
      width={280}
      height={220}
      className={className}
      opacity={0.9}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 0.9, x: 0 }}
      transition={{ duration: 1.2, delay: 0.2 }}
    />
  );
}

/* ── HANGING PLANT — reuses monstera vase image, positioned from top ── */
export function HangingPlant({ className = "" }: { className?: string }) {
  return (
    <DecorImage
      src="/images/decor/Modern Flower in Vase Ideas That Will Blow Your Mind-Photoroom.png"
      alt="Hanging plant"
      width={120}
      height={200}
      className={className}
      opacity={0.9}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 0.9, y: 0 }}
      transition={{ duration: 1.5 }}
    />
  );
}

/* ── ARCHITECTURAL GRID (subtle background pattern) ── */
export function ArchitecturalGrid({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.03 }}
      transition={{ duration: 2 }}
      className={`pointer-events-none select-none absolute inset-0 w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="archGrid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C0766B" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#archGrid)" />
    </motion.svg>
  );
}

/* ── WARM ARCH FRAME (doorway / arch motif) ── */
export function ArchFrame({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.06 }}
      transition={{ duration: 1.5 }}
      className={`pointer-events-none select-none ${className}`}
      width="300"
      height="400"
      viewBox="0 0 300 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40 400 L40 140 Q40 40 150 40 Q260 40 260 140 L260 400" stroke="#C0766B" strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M55 400 L55 150 Q55 60 150 60 Q245 60 245 150 L245 400" stroke="#c98b82" strokeWidth="1.5" fill="none" opacity="0.3" />
    </motion.svg>
  );
}

/* ── WINDOW FRAME with plant — uses dieffenbachia image ── */
export function WindowWithPlant({ className = "" }: { className?: string }) {
  return (
    <DecorImage
      src="/images/decor/Dieffenbachia-Photoroom.png"
      alt="Plant in window"
      width={180}
      height={220}
      className={className}
      opacity={0.9}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
  );
}
