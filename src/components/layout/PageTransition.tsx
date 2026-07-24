"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

/**
 * Route-change fade — mount-only.
 *
 * We deliberately do NOT use AnimatePresence + mode="wait" here.
 * In the Next.js App Router, `children` is swapped for the new route
 * BEFORE Framer Motion gets to play an exit animation, which caused the
 * new page to render invisible until a hard refresh.
 *
 * Instead we key the motion.div on the pathname so React unmounts + remounts
 * on every route change, and the enter animation plays cleanly each time.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
