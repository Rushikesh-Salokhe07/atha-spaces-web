"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/architecture", label: "Architecture" },
  { href: "/interiors", label: "Interiors" },
  { href: "/contact", label: "Contact" },
];

/* Stagger variants for mobile items */
const mobileContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const mobileItem = {
  hidden: { opacity: 0, x: -30, rotateZ: -3 },
  show: {
    opacity: 1,
    x: 0,
    rotateZ: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/60"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo — 3D tilt on hover */}
        <Link href="/" className="flex items-center group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="relative"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/ATHA LOGO Detail png.png"
              alt="Atha Spaces"
              className="h-9 w-auto max-w-[200px]"
            />
          </motion.div>
        </Link>

        {/* Desktop navigation — hover reveals a background pill */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                    isActive
                      ? "text-brand-600"
                      : "text-gray-500 hover:text-gray-900"
                  )}
                >
                  {/* Hover background pill */}
                  {!isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-gray-100/0 -z-10"
                      whileHover={{ backgroundColor: "rgba(243,244,246,0.7)" }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  {link.label}

                  {/* Active indicator — sliding underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.span>
              </Link>
            );
          })}
        </div>

        {/* CTA button — desktop, subtle 3D tilt */}
        <Link href="/contact" className="hidden md:block">
          <motion.span
            whileHover={{ scale: 1.04, rotateX: -3, y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 18 }}
            style={{ perspective: 400 }}
            className="inline-flex items-center gap-2 bg-brand-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-md shadow-brand-200/50 hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-300/40 transition-colors"
          >
            Get in Touch
          </motion.span>
        </Link>

        {/* Animated hamburger / X morphing */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.85 }}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile dropdown — staggered + slide */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-gray-100"
          >
            <motion.div
              variants={mobileContainer}
              initial="hidden"
              animate="show"
              exit="exit"
              className="px-6 py-4 flex flex-col gap-1"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.href} variants={mobileItem}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        isActive
                          ? "bg-brand-50 text-brand-600"
                          : "text-gray-600 hover:bg-gray-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
