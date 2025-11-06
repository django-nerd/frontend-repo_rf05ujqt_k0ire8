import React from 'react';
import { motion } from 'framer-motion';

export default function AtlasFigure({ className = '' }) {
  return (
    <motion.svg
      viewBox="0 0 600 700"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(34,211,238,0.7)" />
          <stop offset="60%" stopColor="rgba(34,211,238,0.25)" />
          <stop offset="100%" stopColor="rgba(34,211,238,0)" />
        </radialGradient>
        <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>

      {/* Soft backdrop glow */}
      <motion.circle
        cx="300"
        cy="220"
        r="170"
        fill="url(#glow)"
        initial={{ scale: 0.95, opacity: 0.6 }}
        animate={{ scale: [0.95, 1.02, 0.95], opacity: [0.55, 0.7, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Globe outline */}
      <motion.circle
        cx="300"
        cy="220"
        r="160"
        fill="none"
        stroke="url(#strokeGrad)"
        strokeWidth="3"
        initial={{ rotate: -10 }}
        animate={{ rotate: 10 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />

      {/* Globe meridians */}
      <g stroke="url(#strokeGrad)" strokeOpacity="0.5">
        <ellipse cx="300" cy="220" rx="150" ry="45" fill="none" />
        <ellipse cx="300" cy="220" rx="150" ry="90" fill="none" />
        <ellipse cx="300" cy="220" rx="150" ry="120" fill="none" />
      </g>

      {/* Atlas stylized figure (kneeling, holding globe) */}
      <g strokeLinecap="round" strokeLinejoin="round" stroke="url(#strokeGrad)" fill="none">
        {/* Arms to globe */}
        <motion.path
          d="M210 250 C240 200, 260 180, 300 170"
          strokeWidth="10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <motion.path
          d="M390 250 C360 200, 340 180, 300 170"
          strokeWidth="10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.25 }}
        />

        {/* Head */}
        <motion.circle cx="300" cy="300" r="22" strokeWidth="8" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.35, duration: 0.4 }} />

        {/* Spine / torso */}
        <motion.path d="M300 322 L300 390" strokeWidth="10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.35 }} />

        {/* Back and leg (supporting) */}
        <motion.path d="M300 390 C260 420, 240 470, 240 520" strokeWidth="10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.45 }} />

        {/* Front leg (kneeling) */}
        <motion.path d="M300 390 C340 420, 360 470, 360 520" strokeWidth="10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.55 }} />

        {/* Ground base */}
        <motion.line x1="200" y1="520" x2="400" y2="520" strokeWidth="8" strokeOpacity="0.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.4 }} />
      </g>
    </motion.svg>
  );
}
