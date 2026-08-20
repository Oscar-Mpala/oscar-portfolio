import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ZapOff } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center min-h-[75vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white border border-slate-200 p-10 md:p-16 rounded-3xl shadow-sm max-w-2xl w-full relative overflow-hidden"
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-100 rounded-full blur-3xl opacity-60"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
            <ZapOff className="w-10 h-10 text-slate-400" />
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black text-slate-900 mb-4 tracking-tighter">
            4<span className="text-sky-600">0</span>4
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Signal Lost
          </h2>
          
          <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The page or project you are looking for has been moved, deleted, or doesn't exist within this architecture.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl transition-all shadow-md shadow-sky-600/20 hover:-translate-y-1"
          >
            <Home className="w-5 h-5" />
            <span>Return to Base</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}