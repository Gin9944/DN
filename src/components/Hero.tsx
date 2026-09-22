import { motion } from 'motion/react';
import COVER from '../assets/images/wedding_cover_tiffany_blue_1784772814073.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#81D8D0]">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] border-[20px] border-white rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] border-[20px] border-white rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={COVER} 
          alt="Wedding Cover" 
          className="w-full h-full object-cover opacity-20 grayscale-[30%]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white text-xs tracking-[0.5em] uppercase font-serif"
        >
          Wedding Invitation
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-white text-4xl md:text-6xl font-serif font-light tracking-[0.2em] py-6 whitespace-nowrap"
        >
          胡帆华 <span className="text-xl mx-1 font-normal opacity-60">&</span> 董妮
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "3rem" }}
          transition={{ delay: 1.5, duration: 1 }}
          className="h-[1px] bg-white/50 mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-white/90 text-lg font-serif italic tracking-widest"
        >
          2026年10月11日 · 11:38
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
