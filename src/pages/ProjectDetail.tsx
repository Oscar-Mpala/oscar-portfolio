import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink, FileText, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ProjectDetailProps {
  projectsData: any[];
  siteInfo: any;
}

export default function ProjectDetail({ projectsData, siteInfo }: ProjectDetailProps) {
  const { id } = useParams<{ id: string }>();
  const project = projectsData?.find((p) => String(p.id) === id) || projectsData?.[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const gallery = project?.gallery?.length ? project.gallery : [
    project?.thumbnailUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  ];
  
  // The index the user is trying to navigate to
  const [activeIndex, setActiveIndex] = useState(0);
  // The index of the image that is currently fully loaded and visible
  const [displayedIndex, setDisplayedIndex] = useState(0);
  // Initial load is false so the thumbnail doesn't have an artificial delay
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setActiveIndex(newIndex);
    setIsLoading(true);
  };

  const prevImage = () => {
    handleImageChange(activeIndex === 0 ? gallery.length - 1 : activeIndex - 1);
  };

  const nextImage = () => {
    handleImageChange(activeIndex === gallery.length - 1 ? 0 : activeIndex + 1);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-900">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar siteInfo={siteInfo} />
      
      <main className="flex-1 pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <Link to="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-600 mb-10 transition-colors font-semibold">
            <ArrowLeft size={20} /> Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-10"
          >
            {/* Title & Tech Stack */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">{project.title}</h1>
              <div className="flex flex-wrap justify-center gap-2">
                {project.techStack.map((tag: string, idx: number) => (
                  <span key={idx} className="px-4 py-1.5 text-xs font-bold text-sky-700 bg-sky-50 rounded-full border border-sky-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Image Carousel */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm group w-full">
              <div className="aspect-video w-full relative flex items-center justify-center bg-slate-100 overflow-hidden">
                
                {/* 1. BASE LAYER (Previous Image): Stays visible, blurs and darkens when a new image is loading */}
                <img 
                  src={gallery[displayedIndex]} 
                  alt="Previous preview" 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out ${
                    isLoading ? 'blur-md scale-105 brightness-75' : 'blur-0 scale-100 brightness-100'
                  }`}
                />

                {/* 2. TARGET LAYER (Next Image): Invisible until onLoad fires */}
                <img 
                  src={gallery[activeIndex]} 
                  alt={`${project.title} preview ${activeIndex + 1}`} 
                  onLoad={() => {
                    setIsLoading(false);
                    setDisplayedIndex(activeIndex);
                  }}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out z-10 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Spinner Overlay */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 text-white drop-shadow-md">
                    <Loader2 className="w-10 h-10 animate-spin" />
                  </div>
                )}
              </div>

              {/* Controls */}
              {gallery.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white text-slate-900 shadow-lg border border-slate-200 hover:scale-110 hover:bg-slate-50 transition-all z-30"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white text-slate-900 shadow-lg border border-slate-200 hover:scale-110 hover:bg-slate-50 transition-all z-30"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Dots - Tied to activeIndex */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/40 backdrop-blur-sm z-30">
                    {gallery.map((_: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => handleImageChange(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-white w-5' : 'bg-white/50 hover:bg-white'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Description & Details */}
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="text-xl leading-relaxed mb-8 text-center px-4">{project.shortDesc}</p>
              
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-900 font-bold text-2xl mb-6">Project Overview</h3>
                  <p className="whitespace-pre-line leading-relaxed text-slate-600">
                    {project.longDesc || "Detailed project documentation and architecture overview goes here."}
                  </p>
              </div>
            </div>

            {/* Action Buttons (Bottom) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <a 
                href={project.briefDocUrl || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded-xl transition-all font-bold shadow-sm hover:border-sky-300 hover:text-sky-600"
              >
                <FileText size={20} /> Download Brief
              </a>

              {project.githubUrl ? (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded-xl transition-all font-bold shadow-sm hover:border-slate-400"
                >
                  <Github size={20} /> GitHub Repo
                </a>
              ) : (
                <button disabled className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-50 border border-slate-200 text-slate-400 rounded-xl font-bold opacity-60 cursor-not-allowed">
                  <Github size={20} /> Repo Private
                </button>
              )}

              {project.liveUrl ? (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl transition-all font-bold shadow-sm"
                >
                  <ExternalLink size={20} /> Live Demo
                </a>
              ) : (
                <button disabled className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-200 border border-slate-300 text-slate-500 rounded-xl font-bold opacity-60 cursor-not-allowed">
                  <ExternalLink size={20} /> Offline
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}