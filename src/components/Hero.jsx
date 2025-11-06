import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* Cinematic gradient vignettes */}
          <div className="absolute -inset-20 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.18),transparent_60%)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.35)]">
              ATLAS
            </span>
            <span className="block mt-3 text-zinc-100">— Strength Through Creation.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto">
            Building digital worlds that carry meaning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-10">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold tracking-wide text-[#0a0a0a] bg-cyan-300/90 hover:bg-cyan-300 focus:ring-2 focus:ring-cyan-400/60 focus:outline-none shadow-[0_0_30px_rgba(0,255,255,0.45)] transition">
              Explore Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
