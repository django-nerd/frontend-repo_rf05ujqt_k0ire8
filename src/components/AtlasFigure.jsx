import React from 'react';
import { motion } from 'framer-motion';

// Replaced Atlas with a clearer mythology-inspired illustration:
// An animated Poseidon trident emerging from luminous waves.
export default function AtlasFigure({ className = '' }) {
  return (
    <motion.svg
      viewBox="0 0 640 640"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <defs>
        <radialGradient id="seaGlow" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.6)" />
          <stop offset="60%" stopColor="rgba(34,211,238,0.25)" />
          <stop offset="100%" stopColor="rgba(34,211,238,0)" />
        </radialGradient>
        <linearGradient id="aquaStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="aquaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(103,232,249,0.25)" />
          <stop offset="100%" stopColor="rgba(96,165,250,0.05)" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <motion.ellipse
        cx="320"
        cy="380"
        rx="240"
        ry="160"
        fill="url(#seaGlow)"
        initial={{ opacity: 0.5, scale: 0.98 }}
        animate={{ opacity: [0.45, 0.65, 0.45], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Stars/sparkles */}
      <g fill="#a5f3fc" fillOpacity="0.8">
        {[{ x: 120, y: 120 }, { x: 520, y: 160 }, { x: 90, y: 240 }, { x: 560, y: 260 }, { x: 180, y: 70 }, { x: 420, y: 90 }].map((s, i) => (
          <motion.circle key={i} cx={s.x} cy={s.y} r={1.6} initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3 + i * 0.3, repeat: Infinity }} />
        ))}
      </g>

      {/* Trident shaft */}
      <g stroke="url(#aquaStroke)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <motion.line x1="320" y1="160" x2="320" y2="460" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }} />
      </g>

      {/* Trident head */}
      <g stroke="url(#aquaStroke)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <motion.path
          d="M320 100 L320 180"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
        />
        <motion.path
          d="M320 110 C330 120, 350 130, 360 150 L360 200"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        />
        <motion.path
          d="M320 110 C310 120, 290 130, 280 150 L280 200"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
        />
        {/* Crown curve connecting prongs */}
        <motion.path
          d="M280 180 Q320 150 360 180"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        />
      </g>

      {/* Subtle trident fill/shine */}
      <motion.path
        d="M320 180 L320 460"
        stroke="none"
        fill="url(#aquaFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      {/* Waves layer 1 */}
      <motion.path
        d="M40 420 Q120 380 200 420 T360 420 T520 420 T600 420 L600 520 L40 520 Z"
        fill="rgba(103,232,249,0.10)"
        stroke="url(#aquaStroke)"
        strokeWidth="2"
        initial={{ y: 12 }}
        animate={{ y: [12, 6, 12] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Waves layer 2 */}
      <motion.path
        d="M20 460 Q100 420 180 460 T340 460 T500 460 T620 460 L620 560 L20 560 Z"
        fill="rgba(59,130,246,0.10)"
        stroke="url(#aquaStroke)"
        strokeWidth="2"
        initial={{ y: -8 }}
        animate={{ y: [-8, -2, -8] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Wave sparkles */}
      <g fill="#67e8f9" fillOpacity="0.6">
        {[{ x: 140, y: 435 }, { x: 310, y: 445 }, { x: 480, y: 435 }, { x: 220, y: 475 }, { x: 400, y: 470 }].map((s, i) => (
          <motion.circle key={i} cx={s.x} cy={s.y} r={1.8} initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2.6 + i * 0.25, repeat: Infinity }} />
        ))}
      </g>

      {/* Caption hint */}
      <motion.text
        x="50%"
        y="605"
        textAnchor="middle"
        fill="#a5b4fc"
        fillOpacity="0.35"
        fontSize="12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Poseidon's Trident — Myth in Motion
      </motion.text>
    </motion.svg>
  );
}
