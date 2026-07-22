"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface PretextHeaderProps {
  label: string;
  title: string;
  titleAccent?: string;       /* gradient-colored portion */
  subtitle?: string;
  align?: "center" | "left";
  warm?: boolean;             /* use warm copper accent */
}

/**
 * Pretext-style editorial section header.
 * Large serif heading + small overline label + thin divider.
 */
export default function PretextHeader({
  label,
  title,
  titleAccent,
  subtitle,
  align = "center",
  warm = false,
}: PretextHeaderProps) {
  const centered = align === "center";

  return (
    <ScrollReveal className={centered ? "text-center" : ""}>
      {/* Overline label */}
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-block text-overline font-semibold uppercase tracking-[0.14em] mb-4 ${
          warm ? "text-brand-400" : "text-brand-500"
        }`}
      >
        {label}
      </motion.span>

      {/* Thin divider */}
      <div
        className={`w-10 h-px mb-6 ${warm ? "bg-brand-300/50" : "bg-brand-300/40"} ${
          centered ? "mx-auto" : ""
        }`}
      />

      {/* Main heading — serif, large, tight tracking */}
      <h2 className={`pretext-heading mb-4 ${centered ? "" : ""}`}>
        {title}{" "}
        {titleAccent && (
          <span className={warm ? "gradient-text-warm" : "gradient-text"}>
            {titleAccent}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`pretext-subheading ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
