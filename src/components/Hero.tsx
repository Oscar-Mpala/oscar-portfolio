import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
} 

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
          Available for New Projects
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 font-bold rounded-xl transition-all shadow-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}