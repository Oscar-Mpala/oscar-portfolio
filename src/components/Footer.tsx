import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-8 border-t border-slate-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Oscar Anashe Mpala. All rights reserved.</p>
        <div className="flex items-center gap-1 mt-4 md:mt-0 font-medium">
          <span>Built with</span>
          <Heart className="w-4 h-4 text-sky-500 fill-sky-500" />
          <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
}