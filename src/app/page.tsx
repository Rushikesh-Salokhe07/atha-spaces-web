"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Palette, Ruler, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/sections/ScrollReveal";
import PretextHeader from "@/components/sections/PretextHeader";
import TiltCard from "@/components/3d/TiltCard";
import AnimatedCounter from "@/components/3d/AnimatedCounter";
import MagneticButton from "@/components/3d/MagneticButton";
import ParallaxFloat from "@/components/3d/ParallaxFloat";
import {
  MoneyPlant,
  SnakePlant,
  WallShelf,
  MinimalistShelf,
  MonsteraVase,
  Dieffenbachia,
  PlanterGroup,
  HangingPlant,
  WindowWithPlant,
} from "@/components/sections/PlantDecor";

/* ───── Stats ───── */
const stats = [
  { number: 50, suffix: "+", label: "Projects Completed" },
  { number: 8, suffix: "+", label: "Services Offered" },
  { number: 5, suffix: "+", label: "Years of Expertise" },
  { number: 100, suffix: "%", label: "Client Satisfaction" },
];

/* ───── Highlights ───── */
const highlights = [
  {
    icon: Building2,
    title: "Architecture",
    desc: "Timeless designs that balance form and function for residential and commercial spaces.",
    href: "/architecture",
    gradient: "from-brand-500/10 to-brand-400/5",
  },
  {
    icon: Palette,
    title: "Interiors",
    desc: "Thoughtful interior experiences that turn houses into homes you never want to leave.",
    href: "/interiors",
    gradient: "from-warm-200/40 to-terracotta-100/30",
  },
  {
    icon: Ruler,
    title: "Construction",
    desc: "End-to-end construction management with precision engineering and meticulous quality control.",
    href: "/services",
    gradient: "from-sage-100/50 to-brand-50/30",
  },
];

/* ───── Testimonials for the interactive marquee ───── */
const testimonials = [
  { text: "AthaSpaces transformed our vision into reality. Absolutely stunning work!", author: "Rajesh M." },
  { text: "Professional, creative, and incredibly detail-oriented. Highly recommended.", author: "Priya S." },
  { text: "Our home has never felt more alive. The interiors are simply breathtaking.", author: "Ankit & Neha" },
  { text: "From planning to handover, the process was seamless and stress-free.", author: "Vijay K." },
];

export default function HomePage() {
  /* Scroll tracking for the logo section only */
  const logoSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: logoSectionRef,
    offset: ["start start", "end start"],
  });

  /* Logo fades out as user scrolls past the first screen */
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <div className="relative overflow-hidden">
      {/* ══════════════════════════════════════════
          HERO SECTION 1 — Full-screen logo
          ══════════════════════════════════════════ */}
      <section
        ref={logoSectionRef}
        className="relative h-screen flex flex-col items-center justify-center px-6"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/20 to-white -z-10" />

        {/* Centered Logo */}
        <motion.div
          style={{ opacity: logoOpacity, scale: logoScale }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <Image
              src="/images/logo/ATHA LOGO Detail png.png"
              alt="Atha Spaces"
              width={1566}
              height={303}
              className="w-[300px] sm:w-[400px] lg:w-[500px] h-auto"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
            <div className="w-5 h-9 rounded-full border-2 border-gray-300 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-brand-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          HERO SECTION 2 — Tagline + CTAs
          ══════════════════════════════════════════ */}
      <section className="relative py-28 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/10 to-surface-cozy -z-10" />
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50/80 backdrop-blur-sm text-brand-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-6 border border-brand-200/40"
          >
            <Sparkles size={12} /> Architecture · Interiors · Engineering
          </motion.div>

          <h1 className="font-display text-display-md sm:text-display-lg lg:text-display-xl text-gray-900 tracking-tight text-balance">
            Crafting Spaces <br />
            <span className="gradient-text">That Inspire</span>
          </h1>

          <p className="mt-6 max-w-lg mx-auto text-gray-500 text-body-lg leading-relaxed">
            We design homes and spaces that feel as good as they look —
            where every wall tells a story and every room is a sanctuary.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <MagneticButton>
              <Link href="/services">
                <Button size="lg" className="gap-2 rounded-2xl shadow-lg shadow-brand-300/30">
                  Explore Services <ArrowRight size={16} />
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-2xl">
                  Get in Touch
                </Button>
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════
          STATS — animated counters, warm background
          ══════════════════════════════════════════ */}
      <section className="relative py-24 bg-surface-cozy texture-linen overflow-hidden">
        <ParallaxFloat speed={-0.15} className="absolute top-10 left-10 hidden lg:block">
          <MoneyPlant opacity={0.9} />
        </ParallaxFloat>
        <ParallaxFloat speed={0.1} className="absolute top-10 right-10 hidden lg:block">
          <SnakePlant opacity={0.9} />
        </ParallaxFloat>

        <StaggerContainer staggerDelay={0.12} className="relative max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <AnimatedCounter
                target={s.number}
                suffix={s.suffix}
                className="font-display text-display-sm text-brand-600 block"
              />
              <div className="mt-2 text-caption uppercase tracking-wider text-brand-400">
                {s.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ══════════════════════════════════════════
          HIGHLIGHTS — 3D tilt cards
          ══════════════════════════════════════════ */}
      <section className="relative py-section px-6">
        <ParallaxFloat speed={0.2} rotate={3} className="absolute top-20 -left-6 hidden xl:block">
          <WallShelf />
        </ParallaxFloat>
        <ParallaxFloat speed={-0.1} className="absolute bottom-16 -right-4 hidden xl:block">
          <Dieffenbachia opacity={0.9} />
        </ParallaxFloat>

        <div className="max-w-6xl mx-auto">
          <PretextHeader
            label="What We Do"
            title="Bringing Your Vision"
            titleAccent="Home"
            subtitle="From blueprint to finish line — we handle every phase with care and craft."
            warm
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 0.12} direction={["flip", "zoom", "spring"][i] as "flip" | "zoom" | "spring"}>
                <Link href={h.href}>
                  <TiltCard
                    className="h-full"
                    glareColor={
                      i === 0
                        ? "rgba(192,118,107,0.12)"
                        : i === 1
                        ? "rgba(212,162,155,0.15)"
                        : "rgba(122,173,109,0.12)"
                    }
                    intensity={10}
                  >
                    <div className={`group cozy-card p-8 h-full flex flex-col bg-gradient-to-br ${h.gradient}`}>
                      <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur border border-warm-200/40 text-brand-500 flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 group-hover:shadow-lg group-hover:shadow-brand-300/30 transition-all duration-300">
                        <h.icon size={24} strokeWidth={1.6} />
                      </div>
                      <h3 className="font-display text-2xl text-gray-900 mb-3 tracking-tight">
                        {h.title}
                      </h3>
                      <div className="w-8 h-px bg-warm-300/50 mb-3" />
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">
                        {h.desc}
                      </p>
                      <div className="mt-5 flex items-center gap-1.5 text-brand-500 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Explore <ArrowRight size={14} />
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PHILOSOPHY — parallax editorial
          ══════════════════════════════════════════ */}
      <section className="relative py-section bg-surface-cozy texture-grain overflow-hidden">
        <ParallaxFloat speed={-0.2} className="absolute top-0 left-16 hidden xl:block">
          <HangingPlant />
        </ParallaxFloat>
        <ParallaxFloat speed={0.15} className="absolute bottom-10 right-10 hidden xl:block">
          <PlanterGroup opacity={0.9} />
        </ParallaxFloat>

        <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="pretext-label text-brand-500">Our Philosophy</span>
            <div className="w-8 h-px bg-brand-300/50 my-4" />
            <h2 className="font-display text-display-sm sm:text-display-md text-gray-900 mb-6">
              We Don&apos;t Just Build Structures.{" "}
              <span className="gradient-text-warm">We Craft Homes.</span>
            </h2>
            <p className="text-body-lg text-gray-500 leading-relaxed mb-6">
              Every project begins with understanding how you live, what you love,
              and what makes a space feel like yours.
            </p>
            <MagneticButton>
              <Link href="/services">
                <motion.span
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-brand-600 font-medium text-sm"
                >
                  See Our Services <ArrowRight size={14} />
                </motion.span>
              </Link>
            </MagneticButton>
          </ScrollReveal>

          <ScrollReveal direction="rotate" delay={0.2}>
            <TiltCard intensity={8} glareColor="rgba(212,165,116,0.1)">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-warm-100 via-surface-linen to-sage-100/30 border border-warm-200/40 shadow-warm flex items-center justify-center overflow-hidden">
                <MonsteraVase opacity={0.85} />
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIAL MARQUEE — infinite scroll
          ══════════════════════════════════════════ */}
      <section className="py-20 px-6 overflow-hidden">
        <ScrollReveal>
          <PretextHeader
            label="What Clients Say"
            title="Voices of"
            titleAccent="Trust"
            warm
          />
        </ScrollReveal>

        <div className="mt-12 relative">
          <motion.div
            animate={{ x: [0, -1600] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-6"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[380px] p-7 rounded-3xl bg-surface-warm border border-warm-200/40 shadow-cozy"
              >
                <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">
                  — {t.author}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
          ══════════════════════════════════════════ */}
      <section className="relative py-section bg-brand-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-20 -right-20" />
          <div className="absolute w-72 h-72 bg-white rounded-full blur-3xl -bottom-10 -left-10" />
        </div>
        <motion.div
          initial={{ rotateX: 5 }}
          whileInView={{ rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ perspective: 800 }}
          className="relative max-w-3xl mx-auto text-center px-6"
        >
          <ScrollReveal>
            <span className="text-overline font-semibold uppercase tracking-[0.14em] text-brand-200">
              Let&apos;s Begin
            </span>
            <div className="w-8 h-px bg-white/30 mx-auto my-4" />
            <h2 className="font-display text-display-sm sm:text-display-md text-white mb-4">
              Ready to Build Your Dream Space?
            </h2>
            <p className="text-brand-100 mb-8 text-body-lg max-w-md mx-auto">
              Let&apos;s turn your vision into a space that feels like home.
            </p>
            <MagneticButton>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-brand-600 hover:bg-brand-50 shadow-lg rounded-2xl"
                >
                  Start a Project <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </motion.div>
      </section>
    </div>
  );
}
