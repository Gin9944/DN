import { motion } from 'motion/react';

const photos = [
  { id: '1', url: '/src/assets/images/wedding_cover_tiffany_blue_1784772814073.jpg' },
  { id: '2', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
  { id: '3', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
  { id: '4', url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800' },
  { id: '5', url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800' },
];

export default function PhotoWall() {
  return (
    <section className="py-24 bg-[#81D8D0] relative overflow-hidden">
      <div className="px-10 mb-12 text-center">
        <h2 className="text-white text-xs tracking-[0.4em] uppercase mb-2 opacity-80 font-serif">相册珍藏</h2>
        <p className="text-white/60 text-[10px] tracking-widest italic font-serif">Swipe to explore our story</p>
      </div>
      
      <div className="flex overflow-x-auto gap-8 px-10 pb-12 no-scrollbar snap-x scroll-smooth">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, rotate: index % 2 === 0 ? -5 : 5, y: 20 }}
            whileInView={{ opacity: 1, rotate: index % 2 === 0 ? -2 : 2, y: 0 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-72 h-96 bg-white p-3 shadow-2xl snap-center"
          >
            <div className="w-full h-[85%] overflow-hidden bg-slate-100">
              <img 
                src={photo.url} 
                alt={`Wedding moment ${index + 1}`} 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="h-[15%] flex items-center justify-center">
              <p className="text-slate-400 font-serif italic text-xs tracking-widest">Selection 0{index + 1}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
