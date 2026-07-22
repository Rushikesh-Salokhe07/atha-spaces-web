"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxFloatProps {
  children: ReactNode;
  speed?: number;       /* negative = moves opposite to scroll */
  className?: string;
  rotate?: number;      /* max rotation degrees */
}

export default function ParallaxFloat({
  children,
  speed = 0.3,
  className = "",
  rotate = 0,
}: ParallaxFloatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);
  const r = useTransform(scrollYProgress, [0, 1], [-rotate, rotate]);

  return (
    <motion.div ref={ref} style={{ y, rotate: r }} className={className}>
      {children}
    </motion.div>
  );
}
