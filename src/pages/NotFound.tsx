import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';

interface NotFoundProps {
  siteInfo?: any;
}

export default function NotFound({ siteInfo }: NotFoundProps) {
  // Snap the window to the top if they hit a broken link halfway down a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      
      {/* 1. Standard Navbar anchored at the top */}
      {siteInfo && <Navbar siteInfo={siteInfo} />}

      {/* Main Container - Constrained and centered to prevent massive scaling */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 max-w-5xl mx-auto w-full gap-6 pt-24 md:pt-32 pb-12">
        
        {/* 2. The 404 White Blueprint Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Inner Grid locked to the card bounds */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #f1f5f9 2px, transparent 2px), linear-gradient(to bottom, #f1f5f9 2px, transparent 2px)', 
              backgroundSize: '3rem 3rem' 
            }}
          ></div>

          <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <p className="text-slate-500 font-bold mb-2 text-xs tracking-widest uppercase">
              404 Not Found
            </p>
            
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              Oops! We couldn't<br className="hidden xl:block" /> find that page.
            </h1>
            
            <p className="text-slate-500 text-sm md:text-base mb-8 max-w-sm leading-relaxed">
              We can't find the page that you're looking for. Probably the link is broken or removed.
            </p>
            
            {/* Pill Button mirroring the reference design */}
            <Link 
              to="/" 
              className="group inline-flex items-center gap-3 py-2 pl-5 pr-2 bg-slate-900 text-white rounded-full hover:bg-sky-600 transition-colors duration-300 shadow-md"
            >
              <span className="font-bold text-xs tracking-wider uppercase">Back to Home</span>
              <div className="bg-white text-slate-900 rounded-full p-1.5 group-hover:text-sky-600 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end select-none order-1 md:order-2">
            <span className="text-[7rem] md:text-[9rem] font-black text-slate-700 leading-none tracking-tighter drop-shadow-sm">
              404
            </span>
          </div>
        </motion.div>

        {/* 3. The Dark Contact CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="w-full bg-[#0f172a] rounded-3xl shadow-md overflow-hidden relative p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Subtle dark grid specific to this box */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
              backgroundSize: '2rem 2rem' 
            }}
          ></div>

          <div className="relative z-10 flex-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Looking for my services?</h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-400 text-sm font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Full-Stack Development</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-sky-400" /> System Architecture</span>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-auto">
             <Link 
              to="/#contact" 
              className="w-full md:w-auto bg-white hover:bg-sky-50 text-slate-900 font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}