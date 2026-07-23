import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const weddingDate = new Date('2026-10-20T12:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const items = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HRS', value: timeLeft.hours },
    { label: 'MIN', value: timeLeft.minutes },
    { label: 'SEC', value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 bg-[#81D8D0] text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto px-6 relative z-10"
      >
        <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl border border-white/30 shadow-2xl">
          <h2 className="text-white text-[10px] tracking-[0.4em] uppercase mb-8 opacity-80 font-serif">仪式倒计时</h2>
          <div className="grid grid-cols-4 gap-4">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-3xl font-serif font-bold text-white mb-1">{String(item.value).padStart(2, '0')}</span>
                <span className="text-[8px] text-white/70 tracking-widest font-serif">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
