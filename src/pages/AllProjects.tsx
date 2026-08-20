import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

interface AllProjectsProps {
  projectsData: any[];
  siteInfo: any;
}

export default function AllProjects({ projectsData, siteInfo }: AllProjectsProps) {
  
  // Instantly snap to the top of the page when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar siteInfo={siteInfo} />
      {/* Added relative z-10 so it sits properly above the blueprint background */}
      <main className="flex-1 pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            {/* Fixed the dark-theme text colors to match the light-theme palette */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              All <span className="text-sky-600">Projects</span>
            </h1>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg">
              A complete archive of my full-stack web development work, showcasing various technologies and solutions.
            </p>
          </motion.div>

          {/* Grid Layout for the new 16:9 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}