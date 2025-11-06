import React from 'react';
import { motion } from 'framer-motion';

const projects = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  desc: 'Exploration of form, function, and futuristic interfaces.',
  img: `https://source.unsplash.com/random/800x600?technology,design&sig=${i + 1}`,
}));

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProjectsCarousel() {
  return (
    <section id="projects" className="relative py-24 bg-[#0a0a0a]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/10 to-transparent blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,255,0.12),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">Projects Grid</h2>
          <p className="text-zinc-400 text-sm md:text-base">9 pieces with smooth scroll reveal.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.article
              key={p.id}
              variants={item}
              className="group relative rounded-2xl overflow-hidden bg-[#0f1220]/80 backdrop-blur ring-1 ring-white/10 shadow-2xl">
              <div className="relative h-56 sm:h-60 md:h-56 overflow-hidden">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                  className="w-full h-full object-cover opacity-90" />
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
        </motion.div>
      </div>
    </section>
  );
}
