import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Pricing from '../components/Pricing'; // NEW
import FAQ from '../components/FAQ';         // NEW
import Contact from '../components/Contact';
import Footer from '../components/Footer';

interface HomeProps {
  siteInfo: any;
  heroData: any;
  aboutData: any;
  skillsData: any;
  projectsData: any;
}

export default function Home({ siteInfo, heroData, aboutData, skillsData, projectsData }: HomeProps) {
  return (
    <>
      <Navbar siteInfo={siteInfo} />
      <main className="flex-1">
        <Hero title={heroData.title} subtitle={heroData.subtitle} />
        <About bio={aboutData.bio} />
        <Skills skills={skillsData} />
        <Projects projects={projectsData} />
        
        {/* New Sections Injected Here */}
        <Pricing />
        <FAQ />
        
        <Contact siteInfo={siteInfo} />
      </main>
      <Footer />
    </>
  );
}