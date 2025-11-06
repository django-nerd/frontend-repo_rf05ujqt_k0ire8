import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative py-24 bg-[#0a0a0a]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
          About — Philosophy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-zinc-300 text-lg leading-relaxed">
          ATLAS is a symbol of strength, responsibility, and creativity. Each project carries the weight of intention — designed to be resilient, elegant, and meaningful. The aesthetic blends deep shadows with luminous accents, evoking a futuristic monument carved from light and steel.
        </motion.p>
      </div>
    </section>
  );
}
