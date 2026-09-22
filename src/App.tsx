/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Countdown from './components/Countdown';
import PhotoWall from './components/PhotoWall';
import Details from './components/Details';
import CheckInForm from './components/CheckInForm';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-[#81D8D0] font-serif selection:bg-white/30 overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-50 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        style={{ scaleX }}
      />

      <Hero />
      <Countdown />
      <PhotoWall />
      <Details />
      <CheckInForm />

      <footer className="py-20 bg-[#81D8D0] text-center">
        <div className="w-12 h-[1px] bg-white/20 mx-auto mb-8" />
        <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-serif">
          Eternal Love &bull; 2026
        </p>
      </footer>
    </main>
  );
}
