import React, { useState, useEffect } from 'react';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import AdminDashboard from './pages/AdminDashboard';
import AllProjects from './pages/AllProjects';
import { initialSiteInfo, initialHeroData, initialAboutData, initialSkillsData, initialProjectsData } from './mockData';

const useReferralTracking = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const refCode = params.get('ref');

    // Nuke the old permanent storage bug
    localStorage.removeItem('affiliate_ref');

    // If they have a new referral link, save it to the temporary session ONLY
    if (refCode) {
      sessionStorage.setItem('affiliate_ref', refCode);
    }
  }, []);
};

// 1. We create a PageWrapper to handle the fade/slide animation for every page automatically
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="flex flex-col flex-1"
  >
    {children}
  </motion.div>
);

// 2. We extract the routes into a sub-component so we can use the useLocation hook
const AnimatedRoutes = ({ siteInfo, setSiteInfo, heroData, setHeroData, aboutData, setAboutData, skillsData, setSkillsData, projectsData, setProjectsData }: any) => {
  const location = useLocation();

  return (
    // AnimatePresence mode="wait" ensures the old page completely fades out before the new one fades in
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <Home 
                siteInfo={siteInfo} 
                heroData={heroData} 
                aboutData={aboutData} 
                skillsData={skillsData} 
                projectsData={projectsData} 
              />
            </PageWrapper>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <PageWrapper>
              <AllProjects projectsData={projectsData} siteInfo={siteInfo} />
            </PageWrapper>
          } 
        />
        <Route 
          path="/project/:id" 
          element={
            <PageWrapper>
              <ProjectDetail projectsData={projectsData} siteInfo={siteInfo} />
            </PageWrapper>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <PageWrapper>
              <AdminDashboard 
                siteInfo={siteInfo} setSiteInfo={setSiteInfo}
                heroData={heroData} setHeroData={setHeroData}
                aboutData={aboutData} setAboutData={setAboutData}
                skillsData={skillsData} setSkillsData={setSkillsData}
                projectsData={projectsData} setProjectsData={setProjectsData}
              />
            </PageWrapper>
          } 
        />
        <Route 
          path="*" 
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          } 
        />
        <Route 
  path="*" 
  element={
    <PageWrapper>
      <NotFound siteInfo={siteInfo} />
    </PageWrapper>
  } 
/>
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  useReferralTracking();

  const [siteInfo, setSiteInfo] = useState(initialSiteInfo);
  const [heroData, setHeroData] = useState(initialHeroData);
  const [aboutData, setAboutData] = useState(initialAboutData);
  const [skillsData, setSkillsData] = useState(initialSkillsData);
  const [projectsData, setProjectsData] = useState(initialProjectsData);

  return (
    <div className="min-h-screen bg-[#ececec] text-slate-900 selection:bg-sky-500/30 selection:text-sky-900 font-sans relative overflow-hidden flex flex-col">
      
      {/* Subtle Engineering Blueprint Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', 
            backgroundSize: '4rem 4rem',
            opacity: 0.35
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ececec]/70 to-[#ececec]"></div>
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col">
        <Router>
          <AnimatedRoutes 
            siteInfo={siteInfo} setSiteInfo={setSiteInfo}
            heroData={heroData} setHeroData={setHeroData}
            aboutData={aboutData} setAboutData={setAboutData}
            skillsData={skillsData} setSkillsData={setSkillsData}
            projectsData={projectsData} setProjectsData={setProjectsData}
          />
        </Router>
      </div>
    </div>
  );
}