import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, Plus, Trash2, Edit } from 'lucide-react';

interface AdminDashboardProps {
  siteInfo: any; setSiteInfo: any;
  heroData: any; setHeroData: any;
  aboutData: any; setAboutData: any;
  skillsData: any; setSkillsData: any;
  projectsData: any[]; setProjectsData: any;
}

export default function AdminDashboard({
  siteInfo, setSiteInfo,
  heroData, setHeroData,
  aboutData, setAboutData,
  skillsData, setSkillsData,
  projectsData, setProjectsData
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'content' | 'projects'>('content');
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>({
    id: 0, title: '', thumbnailUrl: '', shortDesc: '', longDesc: '', techStack: '', briefDocUrl: '', documentationUrl: '', githubUrl: '', liveUrl: ''
  });

  const handleSaveContent = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Content updated successfully! Changes are reflected in the UI.');
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedProject = {
      ...currentProject,
      techStack: typeof currentProject.techStack === 'string' 
        ? currentProject.techStack.split(',').map((s: string) => s.trim()) 
        : currentProject.techStack
    };

    if (currentProject.id === 0) {
      // New project
      formattedProject.id = Date.now();
      setProjectsData([...projectsData, formattedProject]);
    } else {
      // Update existing
      setProjectsData(projectsData.map((p) => p.id === currentProject.id ? formattedProject : p));
    }
    setIsEditingProject(false);
    alert('Project saved successfully!');
  };

  const handleDeleteProject = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjectsData(projectsData.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="flex-1 p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8 bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-slate-400 hover:text-sky-400 transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          </div>
        </header>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('content')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'content' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'bg-slate-900/50 text-slate-400 border border-white/10 hover:bg-slate-800/50'}`}
          >
            Site Content
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'projects' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'bg-slate-900/50 text-slate-400 border border-white/10 hover:bg-slate-800/50'}`}
          >
            Projects
          </button>
        </div>

        {activeTab === 'content' ? (
          <form onSubmit={handleSaveContent} className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Hero Section</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Tagline (Title)</label>
                  <input 
                    type="text" value={heroData.title} onChange={(e) => setHeroData({...heroData, title: e.target.value})}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Subtitle</label>
                  <input 
                    type="text" value={heroData.subtitle} onChange={(e) => setHeroData({...heroData, subtitle: e.target.value})}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">About Section</h2>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Bio</label>
                <textarea 
                  rows={5} value={aboutData.bio} onChange={(e) => setAboutData({bio: e.target.value})}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none resize-none"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Contact Info</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input 
                    type="email" value={siteInfo.email} onChange={(e) => setSiteInfo({...siteInfo, email: e.target.value})}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">GitHub URL</label>
                  <input 
                    type="url" value={siteInfo.github} onChange={(e) => setSiteInfo({...siteInfo, github: e.target.value})}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">LinkedIn URL</label>
                  <input 
                    type="url" value={siteInfo.linkedin} onChange={(e) => setSiteInfo({...siteInfo, linkedin: e.target.value})}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-3 px-8 rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
              <Save size={20} /> Save Content Changes
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            {!isEditingProject ? (
              <>
                <div className="flex justify-end">
                  <button 
                    onClick={() => {
                      setCurrentProject({ id: 0, title: '', thumbnailUrl: '', shortDesc: '', longDesc: '', techStack: '', briefDocUrl: '', documentationUrl: '', githubUrl: '', liveUrl: '' });
                      setIsEditingProject(true);
                    }}
                    className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-2 px-6 rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  >
                    <Plus size={20} /> Add New Project
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectsData.map(project => (
                    <div key={project.id} className="bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-slate-400 text-sm mt-2 line-clamp-2">{project.shortDesc}</p>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => {
                            setCurrentProject({
                              ...project,
                              techStack: Array.isArray(project.techStack) ? project.techStack.join(', ') : project.techStack
                            });
                            setIsEditingProject(true);
                          }}
                          className="p-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
                        >
                          <Edit size={18} />
                        </button>
                        <button 
                          onClick={() => handleDeleteProject(project.id)}
                          className="p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg">
                <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">{currentProject.id ? 'Edit Project' : 'New Project'}</h2>
                <form onSubmit={handleSaveProject} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Title</label>
                      <input 
                        type="text" value={currentProject.title} onChange={(e) => setCurrentProject({...currentProject, title: e.target.value})}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none" required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Thumbnail URL</label>
                      <input 
                        type="url" value={currentProject.thumbnailUrl} onChange={(e) => setCurrentProject({...currentProject, thumbnailUrl: e.target.value})}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none" required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Short Description</label>
                    <input 
                      type="text" value={currentProject.shortDesc} onChange={(e) => setCurrentProject({...currentProject, shortDesc: e.target.value})}
                      className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none" required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Long Description</label>
                    <textarea 
                      rows={4} value={currentProject.longDesc} onChange={(e) => setCurrentProject({...currentProject, longDesc: e.target.value})}
                      className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none resize-none" required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Tech Stack (comma separated)</label>
                    <input 
                      type="text" value={currentProject.techStack} onChange={(e) => setCurrentProject({...currentProject, techStack: e.target.value})}
                      className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none" required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Brief Document URL</label>
                      <input 
                        type="url" value={currentProject.briefDocUrl} onChange={(e) => setCurrentProject({...currentProject, briefDocUrl: e.target.value})}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Documentation URL</label>
                      <input 
                        type="url" value={currentProject.documentationUrl} onChange={(e) => setCurrentProject({...currentProject, documentationUrl: e.target.value})}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">GitHub URL</label>
                      <input 
                        type="url" value={currentProject.githubUrl} onChange={(e) => setCurrentProject({...currentProject, githubUrl: e.target.value})}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Live Demo URL</label>
                      <input 
                        type="url" value={currentProject.liveUrl} onChange={(e) => setCurrentProject({...currentProject, liveUrl: e.target.value})}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-2 px-8 rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                      Save Project
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setIsEditingProject(false)}
                      className="bg-slate-800/50 hover:bg-slate-700/50 border border-white/10 text-white font-bold py-2 px-8 rounded-lg transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
