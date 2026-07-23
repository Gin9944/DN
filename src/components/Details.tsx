import { MapPin, Phone, Calendar, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Details() {
  const handleNavigation = () => {
    // Standard map URL that works well on mobile to trigger app selection
    const address = encodeURIComponent('湖北省黄冈市黄州区黄州大道99号纽宾凯酒店');
    window.open(`https://api.map.baidu.com/geocoder?address=${address}&output=html&src=wedding_invite`);
  };

  return (
    <section className="py-24 px-10 bg-[#81D8D0]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-white text-xs tracking-[0.5em] uppercase opacity-70 font-serif">诚挚邀请</h2>
            <p className="text-white/90 text-2xl font-serif font-light leading-relaxed tracking-wide">
              爱是一个长久的诺言<br />
              我们满怀喜悦，邀您见证<br />
              我们的爱情开启新的篇章
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 text-white flex flex-col md:flex-row justify-between gap-12">
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-light mb-2">纽宾凯酒店</h2>
                <p className="text-sm opacity-80 leading-relaxed font-serif">
                  湖北省黄冈市黄州区黄州大道99号<br />
                  纽宾凯酒店二楼 宴会大厅
                </p>
              </div>
              <div className="flex gap-4 border-t border-white/10 pt-8">
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-widest opacity-60 uppercase font-serif">Date</span>
                  <span className="font-serif tracking-widest text-lg">2026.10.20</span>
                </div>
                <div className="w-[1px] h-full bg-white/10 mx-4" />
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-widest opacity-60 uppercase font-serif">Time</span>
                  <span className="font-serif tracking-widest text-lg">12:00 PM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center md:items-end gap-6">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                onClick={handleNavigation}
                className="bg-white text-[#81D8D0] w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-xl"
              >
                <MapPin className="w-8 h-8" />
              </motion.div>
              <div className="flex gap-4 w-full">
                <button 
                  onClick={handleNavigation}
                  className="flex-1 bg-white text-[#81D8D0] py-3 px-8 rounded-full text-xs font-bold tracking-[0.2em] shadow-lg hover:bg-slate-100 transition-all uppercase font-serif"
                >
                  开始导航
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
