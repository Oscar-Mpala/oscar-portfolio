import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  projects: any[];
}

export default function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured <span className="text-sky-600">Projects</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A selection of my recent full-stack web development work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 hover:border-sky-300 text-slate-800 hover:text-sky-700 font-bold rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
            View All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}