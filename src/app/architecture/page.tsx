"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/sections/ScrollReveal";
import PretextHeader from "@/components/sections/PretextHeader";
import Gallery3D from "@/components/3d/Gallery3D";
import MagneticButton from "@/components/3d/MagneticButton";
import ParallaxFloat from "@/components/3d/ParallaxFloat";
import { MoneyPlant, WallShelf, ArchFrame } from "@/components/sections/PlantDecor";

const archIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C0766B" strokeWidth="1.5">
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M3 8 L12 3 L21 8" />
  </svg>
);

const projects = [
  { id: 1, title: "Modern Villa Elevation", category: "Residential", year: "2024", description: "A contemporary 4-BHK villa featuring clean lines, expansive glazing, and a cantilevered first floor.", icon: archIcon, gradient: "bg-gradient-to-br from-warm-100 to-brand-50/50" },
  { id: 2, title: "Minimalist Row House", category: "Residential", year: "2024", description: "Space-efficient row house maximising natural light through strategically placed courtyards.", icon: archIcon, gradient: "bg-gradient-to-br from-brand-50 to-sage-100/40" },
  { id: 3, title: "Tropical Bungalow", category: "Residential", year: "2023", description: "A lush green bungalow with integrated landscaping and passive cooling strategies.", icon: archIcon, gradient: "bg-gradient-to-br from-sage-100/50 to-warm-100/40" },
  { id: 4, title: "Urban Apartment Complex", category: "Multi-Unit", year: "2023", description: "24-unit building with shared amenities, rooftop gardens, and a striking facade rhythm.", icon: archIcon, gradient: "bg-gradient-to-br from-brand-100/40 to-warm-100" },
  { id: 5, title: "Farmhouse Retreat", category: "Residential", year: "2023", description: "Weekend farmhouse blending traditional roof tiles with contemporary open-plan living.", icon: archIcon, gradient: "bg-gradient-to-br from-warm-200/40 to-terracotta-100/30" },
  { id: 6, title: "Commercial Office Block", category: "Commercial", year: "2024", description: "Energy-efficient commercial building with a double-skin facade and flexible floor plates.", icon: archIcon, gradient: "bg-gradient-to-br from-brand-50 to-brand-100/30" },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ArchitecturePage() {
  return (
    <div className="relative overflow-hidden">
      <ParallaxFloat speed={-0.15} className="absolute top-[500px] -right-8 hidden lg:block">
        <MoneyPlant opacity={0.9} />
      </ParallaxFloat>
      <ParallaxFloat speed={0.2} rotate={2} className="absolute top-[700px] left-6 hidden xl:block">
        <WallShelf />
      </ParallaxFloat>

      {/* ═══════ HEADER ═══════ */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="absolute inset-0 bg-surface-cozy texture-linen" />
        <ArchFrame className="absolute top-0 right-20 hidden xl:block" />
        <div className="relative max-w-3xl mx-auto text-center">
          <PretextHeader
            label="Portfolio"
            title="House"
            titleAccent="Projects"
            subtitle="A curated collection of our architectural work — residences, villas, and multi-unit developments."
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

      {/* ═══════ CTA ═══════ */}
      <section className="py-20 px-6">
        <ScrollReveal>
          <div className="max-w-xl mx-auto text-center">
            <span className="pretext-label text-brand-400">Like what you see?</span>
            <div className="pretext-divider" />
            <h3 className="font-display text-2xl text-gray-900 mb-5">
              Let&apos;s design your next home.
            </h3>
            <MagneticButton>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-brand-500 text-white text-sm font-medium px-7 py-3.5 rounded-2xl shadow-lg shadow-brand-200/40 hover:bg-brand-600 transition-colors"
                >
                  Get in Touch <ArrowRight size={16} />
                </motion.span>
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
