import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface AboutProps {
  bio: string;
}

export default function About({ bio }: AboutProps) {
  return (
    <section id="about" className="py-16 relative">
      {/* Subtle top divider to separate from the Hero section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="container mx-auto px-6 mt-8">
        <div className="flex flex-col-reverse lg:flex-row items-stretch gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Content Side (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="h-full bg-white border border-slate-200 p-8 md:p-10 rounded-2xl shadow-sm flex flex-col relative">
            
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Oscar A. Mpala
              </h2>
              
              <h3 className="text-lg text-slate-500 font-semibold mb-6">
                Engineering <span className="text-slate-300 mx-2">|</span>Software <span className="text-slate-300 mx-2">|</span> Web Development
              </h3>
              
              <div className="text-slate-600 text-lg leading-relaxed whitespace-pre-line mb-8 flex-1">
                {bio}
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-slate-100 mt-auto">
                  <a href="https://linkedin.com/in/oscar-mpala" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/Oscar-Mpala" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="mailto:oscaranashempala@gmail.com" className="text-slate-400 hover:text-sky-600 transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
              </div>
            </div>
          </motion.div>

          {/* Image Side (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            {/* 
              REMOVED: The blue neon blur div.
              REMOVED: bg-white and p-2 padding.
              ADDED: overflow-hidden so the image perfectly fills the container and respects the rounded corners.
            */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img 
                src="/profile.webp" 
                alt="Oscar Mpala" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}