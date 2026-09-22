import { motion } from 'motion/react';

// 自动收集 src/assets/photos/ 下的所有照片 —— 把照片丢进该目录即可，无需改代码。
// 相框数量会随照片数量自动增减。
const modules = import.meta.glob(
  '../assets/photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
) as Record<string, string>;

const photos = Object.keys(modules)
  .sort()
  .map((path) => ({ id: path, url: modules[path] }));

// 相框底部的标签（按顺序对应照片；超出部分自动回退为编号）
const LABELS = ['初见', '同行', '许诺', '相守', '余生'];

export default function PhotoWall() {
  if (photos.length === 0) return null;

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
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-72 h-96 bg-white p-3 shadow-2xl snap-center"
          >
            <div className="w-full h-[85%] overflow-hidden bg-slate-100">
              <img
                src={photo.url}
                alt={`婚礼照片 ${index + 1}`}
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="h-[15%] flex items-center justify-center">
              <p className="text-slate-400 font-serif text-xs tracking-[0.25em] ml-1">
                {LABELS[index] ?? `No.${String(index + 1).padStart(2, '0')}`}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
