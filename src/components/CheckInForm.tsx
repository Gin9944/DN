import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Check, Send } from 'lucide-react';

export default function CheckInForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'guests'), {
        name,
        message,
        timestamp: serverTimestamp(),
        attendance: true
      });
      setIsSuccess(true);
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('提交失败，请稍后重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-10 bg-[#81D8D0]">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/30 shadow-2xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-white text-[10px] tracking-[0.5em] uppercase mb-4 opacity-70 font-serif">宾客签到</h2>
            <p className="text-white/60 text-[10px] tracking-widest italic font-serif">RSVP & Blessings</p>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 bg-white text-[#81D8D0] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">提交成功</h3>
                <p className="text-white/70 font-serif italic text-sm">感谢您的祝福！</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-10 text-white font-serif text-xs tracking-widest border-b border-white/30 pb-1"
                >
                  继续留言
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <label className="block text-[10px] text-white/50 tracking-widest uppercase ml-1 font-serif">姓名 / Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:bg-white/10 focus:ring-1 focus:ring-white/30 transition-all outline-none font-serif"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] text-white/50 tracking-widest uppercase ml-1 font-serif">寄语 / Wishes</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:bg-white/10 focus:ring-1 focus:ring-white/30 transition-all outline-none resize-none font-serif"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-[#81D8D0] py-4 rounded-full font-bold text-xs tracking-[0.3em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 uppercase font-serif"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-[#81D8D0]/30 border-t-[#81D8D0] rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3 h-3" />
                      确认提交
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
