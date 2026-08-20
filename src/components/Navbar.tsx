import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  siteInfo?: any;
}

export default function Navbar({ siteInfo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
       <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          {/* Precision text logo mimicking Canva Sans (Adjusted Weight) */}
          <div className="flex items-center text-sky-600 font-bold text-3xl select-none font-sans">
            <span className="-translate-y-[2px]">&lt;</span>
            <span className="tracking-[0.05em] mx-[3px]">OM</span>
            <span className="-translate-y-[2px]">&gt;</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-sm border border-slate-200 px-6 py-2 rounded-full shadow-sm">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-sky-600 transition-colors text-sm font-semibold"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-slate-600 hover:text-sky-600 transition-colors text-sm font-semibold"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
        
        <div className="hidden md:block">
          <a 
            href="/#contact" 
            className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full text-sm transition-all shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-slate-600 hover:text-sky-600 font-medium py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="text-slate-600 hover:text-sky-600 font-medium py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a 
                href="/#contact" 
                className="bg-sky-600 text-white font-bold py-3 rounded-lg text-center mt-4 block shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}