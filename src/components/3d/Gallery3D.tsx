"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import TiltCard from "./TiltCard";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  year?: string;
  icon: ReactNode;
  gradient: string;
}

interface Gallery3DProps {
  items: GalleryItem[];
  categories: string[];
}

export default function Gallery3D({ items, categories }: Gallery3DProps) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered =
    filter === "All" ? items : items.filter((p) => p.category === filter);

  return (
    <>
      {/* Category pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === cat
                ? "bg-brand-500 text-white shadow-lg shadow-brand-300/30"
                : "bg-white text-gray-500 border border-warm-200/60 hover:border-brand-300 hover:text-brand-600 hover:shadow-md"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* 3D Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: -15 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <TiltCard
                className="h-full"
                glareColor="rgba(14, 165, 233, 0.12)"
                intensity={12}
              >
                <div
                  onClick={() => setSelected(item)}
                  className={`group cursor-pointer relative rounded-3xl overflow-hidden ${
                    i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                  } shadow-warm border border-warm-200/30`}
                >
                  {/* Background */}
                  <div
                    className={`absolute inset-0 ${item.gradient} flex items-center justify-center transition-transform duration-700 group-hover:scale-110`}
                  >
                    <div className="text-center" style={{ transform: "translateZ(30px)" }}>
                      <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/50 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        {item.icon}
                      </div>
                      <p className="text-xs text-brand-500/70 font-medium">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay with 3D push */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex flex-col justify-end p-7"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="text-overline font-semibold uppercase tracking-wider text-brand-300 mb-1 block">
                        {item.category} {item.year ? `· ${item.year}` : ""}
                      </span>
                      <h3 className="font-display text-xl text-white mb-2">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-sm text-brand-200 font-medium">
                        <Maximize2 size={14} /> View Details
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-lg flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, rotateY: -10, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotateY: 10, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
              style={{ perspective: 1200 }}
            >
              <div
                className={`aspect-video ${selected.gradient} flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-white/50 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                    {selected.icon}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <span className="text-overline font-semibold uppercase tracking-wider text-brand-500 block mb-2">
                  {selected.category} {selected.year ? `· ${selected.year}` : ""}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl text-gray-900 mb-3">
                  {selected.title}
                </h2>
                <div className="w-8 h-px bg-warm-300/50 mb-4" />
                <p className="text-gray-500 text-body-md leading-relaxed">
                  {selected.description}
                </p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur text-gray-500 flex items-center justify-center hover:bg-white hover:text-gray-900 shadow-lg transition-all hover:scale-110"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
