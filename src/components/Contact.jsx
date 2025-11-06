import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0a0a0a]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,255,0.12),transparent_60%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-white text-center">
          Contact
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="bg-[#0f1220]/60 backdrop-blur rounded-2xl p-6 ring-1 ring-white/10 shadow-2xl">
            <div className="space-y-5">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Name</label>
                <input type="text" className="w-full rounded-lg bg-black/50 border border-cyan-400/30 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/40 outline-none text-white px-4 py-3 placeholder-zinc-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Email</label>
                <input type="email" className="w-full rounded-lg bg-black/50 border border-cyan-400/30 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/40 outline-none text-white px-4 py-3 placeholder-zinc-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Message</label>
                <textarea rows="4" className="w-full rounded-lg bg-black/50 border border-cyan-400/30 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/40 outline-none text-white px-4 py-3 placeholder-zinc-500" placeholder="Tell me about your project..." />
              </div>
              <button className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold tracking-wide text-[#0a0a0a] bg-cyan-300/90 hover:bg-cyan-300 focus:ring-2 focus:ring-cyan-400/60 focus:outline-none shadow-[0_0_30px_rgba(0,255,255,0.45)] transition">
                Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-[#0f1220]/60 backdrop-blur rounded-2xl p-6 ring-1 ring-white/10 shadow-2xl flex flex-col items-center justify-center text-center">
            <p className="text-zinc-300">Connect on socials</p>
            <div className="mt-6 flex items-center gap-5">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="group">
                <div className="p-3 rounded-xl bg-black/50 border border-white/10 group-hover:border-cyan-300/40 transition shadow-lg">
                  <Github className="w-6 h-6 text-zinc-300 group-hover:text-cyan-300 transition" />
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group">
                <div className="p-3 rounded-xl bg-black/50 border border-white/10 group-hover:border-cyan-300/40 transition shadow-lg">
                  <Linkedin className="w-6 h-6 text-zinc-300 group-hover:text-cyan-300 transition" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="p-3 rounded-xl bg-black/50 border border-white/10 group-hover:border-cyan-300/40 transition shadow-lg">
                  <Globe className="w-6 h-6 text-zinc-300 group-hover:text-cyan-300 transition" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
