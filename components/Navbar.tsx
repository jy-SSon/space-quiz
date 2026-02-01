
import React from 'react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const menuItems = [
    { id: Section.Home, label: 'HOME', icon: '' },
    { id: Section.Launch, label: '발사', icon: '🚀' },
    { id: Section.Satellite, label: '위성', icon: '🛰' },
    { id: Section.Monitoring, label: '기술', icon: '🌍' },
    { id: Section.Roadmap, label: '로드맵', icon: '🛰🛰' },
    { id: Section.Quiz, label: '퀴즈', icon: '🧩' },
    { id: Section.Career, label: '진로', icon: '🌱' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-card border border-white/10 rounded-full px-8 py-3 w-[92%] max-w-7xl flex items-center justify-between shadow-2xl backdrop-blur-3xl animate-fade-in transition-all duration-500">
      <a href="#home" className="flex items-center gap-3 group">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center glow-blue transition-all group-hover:rotate-12 group-hover:scale-110 shadow-lg">
          <span className="text-white font-black text-xs">KR</span>
        </div>
        <div className="flex flex-col">
          <span className="font-black text-lg leading-none tracking-tighter group-hover:text-blue-400 transition-colors uppercase">
            KOREA SPACE
          </span>
          <span className="font-bold text-[10px] text-slate-500 tracking-[0.2em]">EXPLORER</span>
        </div>
      </a>

      <div className="hidden lg:flex items-center gap-1">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`px-4 py-2 rounded-full text-xs font-black transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
              activeSection === item.id
                ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)] scale-105'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.icon && <span className="text-sm">{item.icon}</span>}
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a 
          href="#quiz" 
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-400 to-red-600 text-white text-[11px] font-black shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:scale-110 active:scale-95 transition-all animate-pulse hover:animate-none flex items-center gap-2"
        >
          PLAY QUIZ <span className="text-base">🧩</span>
        </a>
        <div className="lg:hidden text-2xl cursor-pointer text-slate-300 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
