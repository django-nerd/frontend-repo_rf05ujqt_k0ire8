import React from 'react';
import { motion } from 'framer-motion';
import AtlasFigure from './AtlasFigure.jsx';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-[#07090f]">
      {/* Background: layered gradients + subtle grid */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_20%,rgba(34,211,238,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_90%_80%,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage:
            'linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)',
          backgroundSize: '48px 48px, 48px 48px',
        }} />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#07090f] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 text-cyan-300/80 bg-cyan-400/10 ring-1 ring-cyan-300/30 px-3 py-1 rounded-full text-xs sm:text-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
              New look — Atmospheric Landing
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.8, ease: 'easeOut' }}
              className="mt-5 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-cyan-300 to-sky-400 drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]">
                Atlas — Design Under Pressure
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-6 text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
              A portfolio inspired by myth and engineered for motion. Less cubes, more cosmos — gradients, glow, and gravity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold tracking-wide text-[#0a0a0a] bg-cyan-300/90 hover:bg-cyan-300 focus:ring-2 focus:ring-cyan-400/60 focus:outline-none shadow-[0_0_30px_rgba(0,255,255,0.45)] transition">
                Explore Projects
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold tracking-wide text-cyan-300/90 hover:text-cyan-200 ring-1 ring-cyan-300/40 hover:ring-cyan-300/60 transition">
                Learn More
              </a>
            </motion.div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="absolute -inset-10 pointer-events-none" aria-hidden>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.16),transparent_60%)] blur-2xl" />
            </div>
            <AtlasFigure className="w-full h-[420px] md:h-[560px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
