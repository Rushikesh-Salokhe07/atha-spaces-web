"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Send, Clock } from "lucide-react";
import ScrollReveal from "@/components/sections/ScrollReveal";
import PretextHeader from "@/components/sections/PretextHeader";
import TiltCard from "@/components/3d/TiltCard";
import MagneticButton from "@/components/3d/MagneticButton";
import ParallaxFloat from "@/components/3d/ParallaxFloat";
import { SnakePlant, WallShelf, HangingPlant, WindowWithPlant } from "@/components/sections/PlantDecor";

const contactInfo = [
  { icon: MapPin, label: "Visit Us", value: "Your Office Address Here", subtext: "Walk-ins welcome for a consultation", href: null, accent: "bg-sage-100 text-sage-500", glare: "rgba(122,173,109,0.15)" },
  { icon: Phone, label: "Call Us", value: "+91 XXXXX XXXXX", subtext: "Mon–Sat, 10 am – 7 pm", href: "tel:+91XXXXXXXXXX", accent: "bg-brand-50 text-brand-500", glare: "rgba(192,118,107,0.12)" },
  { icon: Mail, label: "Email Us", value: "athaspaces0@gmail.com", subtext: "We reply within 24 hours", href: "mailto:athaspaces0@gmail.com", accent: "bg-terracotta-100 text-terracotta-400", glare: "rgba(212,132,90,0.12)" },
  { icon: Instagram, label: "Follow Us", value: "@athaspaces", subtext: "Explore our latest projects", href: "https://instagram.com/athaspaces", accent: "bg-brand-50 text-brand-500", glare: "rgba(212,162,155,0.15)" },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <ParallaxFloat speed={-0.12} className="absolute top-2 left-12 hidden xl:block">
        <HangingPlant />
      </ParallaxFloat>
      <ParallaxFloat speed={0.1} className="absolute top-[500px] -right-6 hidden lg:block">
        <SnakePlant opacity={0.9} />
      </ParallaxFloat>
      <ParallaxFloat speed={0.2} rotate={2} className="absolute top-[380px] left-8 hidden xl:block">
        <WallShelf />
      </ParallaxFloat>
      <ParallaxFloat speed={-0.15} className="absolute bottom-[200px] -left-10 hidden xl:block">
        <WindowWithPlant />
      </ParallaxFloat>

      {/* ═══════ HEADER ═══════ */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="absolute inset-0 bg-surface-cozy texture-linen" />
        <div className="relative max-w-3xl mx-auto text-center">
          <PretextHeader
            label="Get in Touch"
            title="Let's"
            titleAccent="Connect"
            subtitle="Have a project in mind or just curious? We'd love to hear from you."
            warm
          />
        </div>
      </section>

      {/* ═══════ 3D TILT CONTACT CARDS ═══════ */}
      <section className="relative py-section px-6">
        <div className="absolute top-0 left-0 right-0 h-40 bg-surface-cozy -z-10" />
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
          {contactInfo.map((c, i) => (
            <ScrollReveal key={c.label} delay={i * 0.1} direction={["zoom", "flip", "spring", "rotate"][i] as "zoom" | "flip" | "spring" | "rotate"}>
              <TiltCard intensity={8} glareColor={c.glare}>
                <div className="group cozy-card p-7 flex items-start gap-5 h-full">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl ${c.accent} flex items-center justify-center`}
                  >
                    <c.icon size={22} strokeWidth={1.8} />
                  </motion.div>
                  <div>
                    <p className="text-overline font-semibold uppercase tracking-[0.1em] text-brand-400 mb-1">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-display text-xl text-gray-900 group-hover:text-brand-600 transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-display text-xl text-gray-900">{c.value}</p>
                    )}
                    <p className="text-sm text-gray-400 mt-1">{c.subtext}</p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════ CONTACT FORM — 3D tilt wrapper ═══════ */}
      <section className="relative py-section px-6 bg-surface-cozy texture-grain overflow-hidden">
        <div className="relative max-w-2xl mx-auto">
          <PretextHeader
            label="Send a Message"
            title="Tell Us About"
            titleAccent="Your Vision"
            subtitle="We'll get back to you within 24 hours."
            warm
          />

          <ScrollReveal delay={0.15} direction="blur" duration={1}>
            <TiltCard intensity={4} glareColor="rgba(192,118,107,0.08)" className="mt-12">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="bg-white rounded-3xl border border-warm-200/50 shadow-warm p-8 sm:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-caption font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-5 py-3.5 rounded-2xl border border-warm-200/60 bg-surface-warm text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-caption font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="w-full px-5 py-3.5 rounded-2xl border border-warm-200/60 bg-surface-warm text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-caption font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-5 py-3.5 rounded-2xl border border-warm-200/60 bg-surface-warm text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-caption font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-5 py-3.5 rounded-2xl border border-warm-200/60 bg-surface-warm text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all appearance-none">
                    <option value="">Select a service</option>
                    <option>Planning</option>
                    <option>Consulting</option>
                    <option>Interiors</option>
                    <option>Renovation</option>
                    <option>Construction</option>
                    <option>Facade Design</option>
                    <option>3D Interior Design</option>
                    <option>Elevation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-caption font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your dream space..."
                    className="w-full px-5 py-3.5 rounded-2xl border border-warm-200/60 bg-surface-warm text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all resize-none"
                  />
                </div>

                <MagneticButton className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-500 text-white font-medium py-4 rounded-2xl shadow-lg shadow-brand-200/40 hover:bg-brand-600 transition-colors text-sm"
                  >
                    <Send size={16} /> Send Message
                  </motion.button>
                </MagneticButton>
              </form>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ BUSINESS HOURS ═══════ */}
      <section className="py-section px-6">
        <ScrollReveal>
          <motion.div
            whileHover={{ rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{ perspective: 800 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center mx-auto mb-5">
              <Clock size={26} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-2xl text-gray-900 mb-3">
              Business Hours
            </h3>
            <div className="w-8 h-px bg-warm-300/50 mx-auto mb-4" />
            <p className="text-gray-500 text-body-md">
              Monday – Saturday: 10:00 AM – 7:00 PM
            </p>
            <p className="text-gray-400 text-sm mt-1">Sunday: Closed</p>
          </motion.div>
        </ScrollReveal>
      </section>
    </div>
  );
}
