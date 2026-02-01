
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "49QP1MYpH1A"; 

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-24 bg-slate-950">
      {/* 고정 배경 이미지 (우주 테마) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072" 
          alt="Space Background" 
          className="w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950"></div>
      </div>

      {/* 배경 글로우 효과 */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-bold mb-8 animate-fade-in backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          NEONSAT: KOREA'S MICRO-SATELLITE PROJECT
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          우주로 향한 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600">
            대한민국의 눈
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          “지금 이 순간에도, 우리가 만든 ‘눈’이 <br className="hidden md:block" />
          우주에서 대한민국을 바라보고 있습니다.”
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <button 
            onClick={handlePlay}
            className="group relative px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <span className="text-2xl group-hover:animate-bounce">🚀</span>
            발사 이야기 보기
          </button>
          <a 
            href="#quiz" 
            className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-400 to-red-600 text-white font-black transition-all shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <span className="text-2xl group-hover:rotate-12">🧩</span>
            우주 퀴즈 도전
          </a>
          <a href="#satellite" className="px-10 py-5 rounded-2xl glass-card hover:bg-white/10 text-white font-bold transition-all border border-white/20 hover:scale-105 backdrop-blur-xl">
            🛰 군집위성 알아보기
          </a>
        </div>
      </div>

      {/* 비디오 플레이어 컨테이너 */}
      <div className="relative w-full max-w-6xl aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] group bg-slate-950 z-10">
        {isPlaying ? (
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1&showinfo=0&autohide=1`}
            title="대한민국 우주 발사 영상"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="relative w-full h-full cursor-pointer overflow-hidden" onClick={handlePlay}>
            <img 
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Mission Preview"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072';
              }}
            />
            
            {/* 플레이 버튼 레이어 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
               <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center glow-blue transition-all duration-500 group-hover:scale-110 shadow-[0_0_50px_rgba(37,99,235,0.6)] border-4 border-white/20">
                  <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[28px] border-l-white border-b-[14px] border-b-transparent ml-2"></div>
               </div>
               <div className="mt-8 px-6 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-black text-lg tracking-widest">MISSION START</p>
               </div>
            </div>

            {/* 비디오 오버레이 텍스트 */}
            <div className="absolute bottom-12 left-12 text-left z-30 pointer-events-none">
              <div className="flex items-center gap-2 mb-3">
                 <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></span>
                 <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.3em] drop-shadow-md">Mission Highlight</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">초소형 군집위성 발사 성공의 순간</h3>
            </div>
            
            {/* 그라데이션 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 pointer-events-none"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
