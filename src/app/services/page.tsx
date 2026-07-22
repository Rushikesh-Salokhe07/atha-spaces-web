"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ClipboardList, MessageSquare, Sofa, Hammer,
  HardHat, Building, Box, TrendingUp, ArrowRight,
} from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/sections/ScrollReveal";
import PretextHeader from "@/components/sections/PretextHeader";
import TiltCard from "@/components/3d/TiltCard";
import FlipCard from "@/components/3d/FlipCard";
import MagneticButton from "@/components/3d/MagneticButton";
import ParallaxFloat from "@/components/3d/ParallaxFloat";
import { MoneyPlant, SnakePlant, WallShelf, MinimalistShelf, HangingPlant, PlanterGroup } from "@/components/sections/PlantDecor";

const services = [
  { icon: ClipboardList, title: "Planning", desc: "Strategic site analysis, zoning compliance, and comprehensive project planning.", detail: "We study every constraint — soil, sunlight, regulations — so your build starts on the strongest possible foundation.", color: "from-blue-500 to-cyan-400", lightColor: "bg-blue-50 border border-blue-100" },
  { icon: MessageSquare, title: "Consulting", desc: "Expert guidance on design feasibility, material selection, and compliance.", detail: "One-on-one sessions with our senior architects to resolve design dilemmas and navigate building codes effortlessly.", color: "from-sky-500 to-blue-400", lightColor: "bg-sky-50 border border-sky-100" },
  { icon: Sofa, title: "Interiors", desc: "Curated interior experiences — from mood boards to the final accent.", detail: "We handpick materials, furniture, lighting, and textiles to create spaces that feel uniquely yours.", color: "from-teal-500 to-emerald-400", lightColor: "bg-teal-50 border border-teal-100" },
  { icon: Hammer, title: "Renovation", desc: "Breathing new life into existing structures while preserving character.", detail: "Structural assessments, permit handling, and meticulous restoration — old bones, fresh soul.", color: "from-orange-500 to-amber-400", lightColor: "bg-orange-50 border border-orange-100" },
  { icon: HardHat, title: "Construction", desc: "End-to-end construction with rigorous quality control.", detail: "Our site managers oversee every pour, beam, and finish with weekly progress reports and transparent budgeting.", color: "from-red-500 to-rose-400", lightColor: "bg-red-50 border border-red-100" },
  { icon: Building, title: "Facade Design", desc: "Eye-catching exterior treatments with modern materials.", detail: "ACP, HPL, stone cladding, or parametric screens — we design facades that make people stop and stare.", color: "from-violet-500 to-purple-400", lightColor: "bg-violet-50 border border-violet-100" },
  { icon: Box, title: "3D Interior Design", desc: "Photorealistic 3D walkthroughs before a single wall is built.", detail: "Walk through your living room, kitchen, and bedroom in VR-ready 3D before construction even begins.", color: "from-pink-500 to-fuchsia-400", lightColor: "bg-pink-50 border border-pink-100" },
  { icon: TrendingUp, title: "Elevation", desc: "Detailed elevation drawings capturing every specification.", detail: "Front, rear, and side elevations with material callouts, dimensions, and shadow studies for planning approvals.", color: "from-indigo-500 to-blue-400", lightColor: "bg-indigo-50 border border-indigo-100" },
];

const process = [
  { step: "01", title: "Discover", desc: "We listen to your vision, study the site, and understand every aspiration." },
  { step: "02", title: "Design", desc: "Detailed plans, 3D renders, and material palettes — crafted to match your lifestyle." },
  { step: "03", title: "Develop", desc: "Construction begins with meticulous management and continuous quality checks." },
  { step: "04", title: "Deliver", desc: "Your space is handed over — polished, inspected, and ready to call home." },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      {/* ════════════ 3D HERO ════════════ */}
      <section className="relative pt-24 pb-28 px-6 min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-surface-cozy" />

        <div className="relative max-w-3xl mx-auto text-center z-10">
          <PretextHeader
            label="Our Expertise"
            title="Services We"
            titleAccent="Offer"
            subtitle="Comprehensive solutions from first sketch to final finish — tailored to bring your vision to life."
            warm
          />
        </div>
      </section>

      {/* ═══════ SERVICES — 3D Flip Cards ═══════ */}
      <section className="relative py-section px-6">
        <ParallaxFloat speed={-0.15} className="absolute top-20 -right-6 hidden lg:block">
          <MoneyPlant opacity={0.9} />
        </ParallaxFloat>
        <ParallaxFloat speed={0.1} className="absolute bottom-20 -left-4 hidden lg:block">
          <SnakePlant opacity={0.9} />
        </ParallaxFloat>

        <StaggerContainer staggerDelay={0.09} className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((s, i) => (
            <StaggerItem key={s.title}>
              <FlipCard
                className="h-[280px]"
                front={
                  <TiltCard className="h-full" intensity={10}>
                    <div className="cozy-card p-7 h-full flex flex-col items-start">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center mb-5 shadow-lg`}>
                        <s.icon size={24} strokeWidth={1.8} />
                      </div>
                      <h3 className="font-display text-xl text-gray-900 mb-2 tracking-tight">{s.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">{s.desc}</p>
                      <span className="mt-3 text-xs text-brand-500 font-medium uppercase tracking-wider">Hover to learn more</span>
                    </div>
                  </TiltCard>
                }
                back={
                  <div className={`h-full rounded-3xl ${s.lightColor} p-7 flex flex-col justify-center shadow-sm`}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center mb-4`}>
                      <s.icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{s.detail}</p>
                  </div>
                }
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══════ PROCESS — 3D animated timeline ═══════ */}
      <section className="relative py-section bg-surface-cozy texture-grain overflow-hidden">
        <ParallaxFloat speed={0.2} className="absolute top-10 left-10 hidden xl:block">
          <MinimalistShelf />
        </ParallaxFloat>
        <ParallaxFloat speed={-0.1} className="absolute top-4 right-16 hidden xl:block">
          <HangingPlant />
        </ParallaxFloat>
        <ParallaxFloat speed={0.15} className="absolute bottom-20 right-8 hidden xl:block">
          <PlanterGroup opacity={0.9} />
        </ParallaxFloat>

        <div className="relative max-w-5xl mx-auto px-6">
          <PretextHeader
            label="How We Work"
            title="Our"
            titleAccent="Process"
            subtitle="Four deliberate steps from dream to doorstep."
            warm
          />

          <div className="mt-20 grid md:grid-cols-4 gap-8 md:gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.15} direction="spring">
                <motion.div
                  whileHover={{ y: -8, rotateZ: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative text-center md:text-left"
                >
                  <span className="font-display text-[5rem] leading-none text-warm-200/50 select-none block">
                    {p.step}
                  </span>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-px">
                      <motion.div
                        className="w-full h-px bg-gradient-to-r from-warm-300/40 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                        style={{ originX: 0 }}
                      />
                    </div>
                  )}
                  <h3 className="font-display text-xl text-gray-900 -mt-5 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="relative py-section px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-100/60 via-surface-warm to-brand-50/30" />
        <ScrollReveal>
          <div className="relative max-w-xl mx-auto text-center">
            <span className="pretext-label text-brand-500">Ready?</span>
            <div className="pretext-divider" />
            <h2 className="font-display text-display-sm sm:text-display-md text-gray-900 mb-4">
              Let&apos;s Build Something <span className="gradient-text-warm">Beautiful</span>
            </h2>
            <p className="text-gray-500 mb-8 text-body-lg">
              Every great space starts with a conversation.
            </p>
            <MagneticButton>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-brand-500 text-white font-medium px-7 py-3.5 rounded-2xl shadow-lg shadow-brand-200/40 hover:bg-brand-600 transition-colors text-sm"
                >
                  Start a Project <ArrowRight size={16} />
                </motion.span>
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
