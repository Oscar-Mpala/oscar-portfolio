import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 min-h-[75vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden relative p-8 md:p-12 lg:p-20"
      >
        {/* Faint Inner Blueprint Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-50" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #f1f5f9 2px, transparent 2px), linear-gradient(to bottom, #f1f5f9 2px, transparent 2px)', 
            backgroundSize: '4rem 4rem' 
          }}
        ></div>

        {/* Strict CSS Grid prevents any text overlapping */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Left Content Area (Takes up 7 out of 12 columns) */}
          <div className="col-span-1 md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-slate-500 font-bold mb-4 text-xs tracking-[0.2em] uppercase">
              404 Not Found
            </p>
            
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Oops! We couldn't<br className="hidden lg:block" /> find that page.
            </h1>
            
            <p className="text-slate-500 text-lg mb-10 max-w-md leading-relaxed">
              We can't find the page that you're looking for. The link might be broken, or the endpoint was removed from this architecture.
            </p>
            
            {/* Premium Pill Button with nested icon circle */}
            <Link 
              to="/" 
              className="group inline-flex items-center gap-4 py-2 pl-6 pr-2 bg-slate-900 text-white rounded-full hover:bg-sky-600 transition-colors duration-300 shadow-md"
            >
              <span className="font-bold text-sm tracking-wider uppercase">Back to Home</span>
              <div className="bg-white text-slate-900 rounded-full p-2 group-hover:text-sky-600 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Right Structural Typography (Takes up 5 out of 12 columns) */}
          <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end select-none">
            <span className="text-[9rem] md:text-[10rem] lg:text-[14rem] font-black text-slate-700 leading-none tracking-tighter drop-shadow-sm">
              404
            </span>
          </div>

        </div>
      </motion.div>
    </div>
  );
}