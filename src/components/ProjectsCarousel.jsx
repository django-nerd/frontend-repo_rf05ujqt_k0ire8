import React from 'react';
import { motion } from 'framer-motion';

const projects = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  desc: 'Exploration of form, function, and futuristic interfaces.',
  img: `https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop`
}));

export default function ProjectsCarousel() {
  return (
    <section id="projects" className="relative py-24 bg-[#0a0a0a]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/10 to-transparent blur-2xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">Featured Work</h2>
          <p className="text-zinc-400 text-sm md:text-base">A selection of digital worlds and interfaces.</p>
        </div>

        <div className="overflow-x-auto no-scrollbar [scrollbar-width:none]" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="grid grid-flow-col auto-cols-[75%] sm:auto-cols-[50%] md:auto-cols-[33%] gap-6">
            {projects.map((p, idx) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative rounded-2xl overflow-hidden bg-[#111827] ring-1 ring-white/5 shadow-2xl">
                <div className="relative h-56 sm:h-60 md:h-64 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white tracking-wide">{p.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
                </div>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-cyan-300/10 to-transparent blur-2xl" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
