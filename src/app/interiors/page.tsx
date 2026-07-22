"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/sections/ScrollReveal";
import PretextHeader from "@/components/sections/PretextHeader";
import Gallery3D from "@/components/3d/Gallery3D";
import MagneticButton from "@/components/3d/MagneticButton";
import ParallaxFloat from "@/components/3d/ParallaxFloat";
import { SnakePlant, WallShelf, HangingPlant, WindowWithPlant } from "@/components/sections/PlantDecor";

const intIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C0766B" strokeWidth="1.5">
    <path d="M3 21h18" />
    <path d="M5 21V7l8-4v18" />
    <path d="M19 21V11l-6-4" />
    <rect x="9" y="9" width="2" height="3" rx="0.5" />
    <rect x="9" y="14" width="2" height="3" rx="0.5" />
  </svg>
);

const projects = [
  { id: 1, title: "Scandinavian Living Room", category: "Living Room", description: "Light oak furnishings, soft neutral tones, and strategic greenery for a calming Scandinavian living area.", icon: intIcon, gradient: "bg-gradient-to-br from-warm-100/80 via-surface-linen to-brand-50/30" },
  { id: 2, title: "Modern Kitchen Design", category: "Kitchen", description: "Handleless cabinets, quartz countertops, and an island with integrated seating.", icon: intIcon, gradient: "bg-gradient-to-br from-brand-50/40 to-warm-100" },
  { id: 3, title: "Luxury Master Bedroom", category: "Bedroom", description: "Velvet headboard, ambient cove lighting, and a walk-in wardrobe with custom millwork.", icon: intIcon, gradient: "bg-gradient-to-br from-warm-200/30 to-terracotta-100/20" },
  { id: 4, title: "Home Office Suite", category: "Workspace", description: "A productivity-optimised office with built-in bookshelves and acoustic panels.", icon: intIcon, gradient: "bg-gradient-to-br from-sage-100/50 to-brand-50/30" },
  { id: 5, title: "Spa Bathroom", category: "Bathroom", description: "Floor-to-ceiling marble, rainfall shower, freestanding tub, and warm indirect lighting.", icon: intIcon, gradient: "bg-gradient-to-br from-brand-100/30 to-warm-100/50" },
  { id: 6, title: "Cosy Kids Playroom", category: "Kids Room", description: "A vibrant, child-safe play zone with modular storage and a cosy reading nook.", icon: intIcon, gradient: "bg-gradient-to-br from-warm-100 to-sage-100/30" },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function InteriorsPage() {
  return (
    <div className="relative overflow-hidden">
      <ParallaxFloat speed={-0.12} className="absolute top-2 right-16 hidden xl:block">
        <HangingPlant />
      </ParallaxFloat>
      <ParallaxFloat speed={0.1} className="absolute top-[600px] -left-4 hidden lg:block">
        <SnakePlant opacity={0.9} />
      </ParallaxFloat>
      <ParallaxFloat speed={0.2} rotate={2} className="absolute top-[500px] right-8 hidden xl:block">
        <WallShelf />
      </ParallaxFloat>
      <ParallaxFloat speed={-0.15} className="absolute bottom-[400px] -right-12 hidden xl:block">
        <WindowWithPlant />
      </ParallaxFloat>

      {/* ═══════ HEADER ═══════ */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="absolute inset-0 bg-surface-cozy texture-linen" />
        <div className="relative max-w-3xl mx-auto text-center">
          <PretextHeader
            label="Portfolio"
            title="Interior"
            titleAccent="Projects"
            subtitle="Spaces designed to feel like home — where every detail is intentional and every room tells a story."
            warm
          />
        </div>
      </section>

      {/* ═══════ 3D GALLERY ═══════ */}
      <section className="py-12 px-6 bg-surface-warm">
        <div className="max-w-6xl mx-auto">
          <Gallery3D items={projects} categories={categories} />
        </div>
      </section>

      {/* ═══════ COZY CTA ═══════ */}
      <section className="relative py-section px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-100/50 via-surface-warm to-sage-100/30" />
        <ScrollReveal>
          <div className="relative max-w-xl mx-auto text-center">
            <span className="pretext-label text-brand-500">Inspired?</span>
            <div className="pretext-divider" />
            <h2 className="font-display text-display-sm text-gray-900 mb-4">
              Every Home Deserves Interiors That{" "}
              <span className="gradient-text-warm">Feel Like You</span>
            </h2>
            <p className="text-gray-500 mb-8 text-body-lg">
              Let&apos;s create a space where you truly belong.
            </p>
            <MagneticButton>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-brand-500 text-white text-sm font-medium px-7 py-3.5 rounded-2xl shadow-lg shadow-brand-200/40 hover:bg-brand-600 transition-colors"
                >
                  Start Your Project <ArrowRight size={16} />
                </motion.span>
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
