
import React, { useState, useEffect } from 'react';
import { Section } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LaunchTimeline from './components/LaunchTimeline';
import SatelliteDetails from './components/SatelliteDetails';
import MonitoringPrinciples from './components/MonitoringPrinciples';
import RoadmapSection from './components/RoadmapSection';
import QuizSection from './components/QuizSection';
import CareerRoadmap from './components/CareerRoadmap';
import SpaceAssistant from './components/SpaceAssistant';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.Home);

  // Scroll spy or simple hash tracking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Section;
      if (Object.values(Section).includes(hash)) {
        setActiveSection(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen star-field flex flex-col">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow pt-16">
        <section id="home">
          <Hero />
        </section>

        <section id="launch" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-24">
          <LaunchTimeline />
        </section>

        <section id="satellite" className="py-24 px-4 bg-slate-900/40 border-y border-white/5 scroll-mt-24">
          <SatelliteDetails />
        </section>

        <section id="monitoring" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-24">
          <MonitoringPrinciples />
        </section>

        <section id="roadmap" className="py-24 px-4 bg-slate-900/40 border-y border-white/5 scroll-mt-24">
          <RoadmapSection />
        </section>

        {/* 퀴즈 게임 섹션: PLAY QUIZ 버튼 클릭 시 바로 이동되는 대상 */}
        <section id="quiz" className="py-32 px-4 max-w-6xl mx-auto scroll-mt-32">
          <QuizSection />
        </section>

        <section id="career" className="py-32 px-4 bg-gradient-to-b from-slate-900/40 to-blue-900/20 border-t border-white/5 scroll-mt-24">
          <CareerRoadmap />
        </section>
      </main>

      <footer className="py-16 px-4 border-t border-slate-800 text-center text-slate-400 bg-black/50 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-6 mb-8">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">🚀</div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">🛰</div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">🌍</div>
          </div>
          <p className="font-black text-white text-lg mb-2">대한민국 우주 탐험대 (KOREA SPACE EXPLORER)</p>
          <p className="text-sm opacity-60 mb-6">© 2025 미래 과학 꿈나무를 위한 교육 플랫폼. All rights reserved.</p>
          <p className="text-xs italic text-blue-400 font-bold tracking-widest uppercase">"우리는 미래의 별이 될 아이들을 응원합니다."</p>
        </div>
      </footer>

      <SpaceAssistant />
    </div>
  );
};

export default App;
