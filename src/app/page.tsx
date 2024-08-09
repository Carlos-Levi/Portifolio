import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProjectsPage from './components/ProjectsPage'; 
import AboutMeSection from './components/AboutMeSection';
import Footer from './components/Footer';

const Page: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <HomeSection />
        <ProjectsPage /> 
        <AboutMeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Page;