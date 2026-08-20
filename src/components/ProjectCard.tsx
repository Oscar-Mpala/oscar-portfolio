import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    shortDesc: string;
    techStack: string[];
    thumbnailUrl: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      {/* Bypassing Tailwind's group-hover entirely. 
        Setting whileHover="hover" here will trigger all child animations automatically.
      */}
      <motion.div whileHover="hover" initial="initial" className="h-full">
        <Link 
          to={`/project/${project.id}`}
          className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full"
        >
          {/* Image Section - Locked to 16:9 Aspect Ratio */}
          <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200 bg-slate-100">
            
            {/* Hover Overlay & Button */}
            <motion.div 
              variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 }
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-slate-900/40 z-20 flex items-center justify-center backdrop-blur-sm"
            >
              <motion.span 
                variants={{
                  initial: { y: 20 },
                  hover: { y: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-sky-600 text-white font-bold py-2.5 px-6 rounded-full shadow-lg flex items-center gap-2"
              >
                View Case Study <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.div>

            <motion.img 
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src={project.thumbnailUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content Section */}
          <div className="p-8 flex-1 flex flex-col">
            <motion.h3 
              variants={{
                initial: { color: "#0f172a" }, // Tailwind's slate-900 hex
                hover: { color: "#0284c7" } // Tailwind's sky-600 hex
              }}
              transition={{ duration: 0.2 }}
              className="text-2xl font-bold mb-3"
            >
              {project.title}
            </motion.h3>
            <p className="text-slate-600 mb-6 leading-relaxed flex-1">
              {project.shortDesc}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-bold text-sky-700 bg-sky-50 rounded-full border border-sky-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;