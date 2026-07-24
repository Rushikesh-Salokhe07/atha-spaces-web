"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

/* Stagger reveal for footer columns */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const colVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const linkHover = {
  x: 4,
  color: "#c98b82",
  transition: { duration: 0.2 },
};

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Gradient accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-400 origin-left"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand */}
          <motion.div variants={colVariants}>
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo/1Atha White Logo.png"
                  alt="Atha Spaces"
                  className="h-9 w-auto max-w-[200px]"
                />
              </motion.div>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Crafting spaces that inspire. Civil engineering, architecture, and
              interior design under one roof.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={colVariants}>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/services", label: "Our Services" },
                { href: "/architecture", label: "Architecture" },
                { href: "/interiors", label: "Interiors" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <motion.div key={l.href} whileHover={linkHover}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 transition-colors w-fit inline-block"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={colVariants}>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              {[
                { icon: Mail, text: "athaspaces0@gmail.com", href: "mailto:athaspaces0@gmail.com" },
                { icon: Phone, text: "+91 XXXXX XXXXX", href: null },
                { icon: MapPin, text: "Your Office Address", href: null },
                { icon: Instagram, text: "@athaspaces", href: "https://instagram.com/athaspaces" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-colors"
                    >
                      <item.icon size={14} /> {item.text}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-gray-400">
                      <item.icon size={14} /> {item.text}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar — fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} AthaSpaces. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Designed with precision. Built with passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
