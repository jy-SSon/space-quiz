
import React, { useState } from 'react';

const TimelineNode = ({ time, title, desc, icon, active = false }: any) => (
  <div className="flex gap-8 group">
    <div className="flex flex-col items-center">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${active ? 'bg-blue-600 glow-blue text-white rotate-12 scale-110' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700'}`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="w-0.5 flex-grow bg-slate-800 my-3 group-last:hidden"></div>
    </div>
    <div className={`pb-14 pt-2 transition-all duration-500 ${active ? 'opacity-100 translate-x-0' : 'opacity-60 translate-x-4'}`}>
      <div className="text-sm font-black text-blue-400 mb-2 uppercase tracking-tighter">{time}</div>
      <h3 className="text-2xl font-black mb-3">{title}</h3>
      <p className="text-slate-400 text-base leading-relaxed max-w-lg">{desc}</p>
      
      {active && (
        <div className="mt-5 p-5 rounded-2xl bg-blue-900/30 border border-blue-500/30 text-sm text-blue-200 shadow-xl backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-400">💡</span>
            <span className="font-black text-blue-400 uppercase tracking-widest text-xs">Science Point</span>
          </div>
          {active.point}
        </div>
      )}
    </div>
  </div>
);

const LaunchTimeline: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "49QP1MYpH1A";

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">발사의 순간: 역사가 되다</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">긴장과 기다림 끝에 얻은 환희의 기록, 발사 성공의 서사를 확인하세요.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-4">
          {[
            {
              time: "T-26:00",
              title: "마히아 반도 발사장 준비",
              desc: "뉴질랜드 마히아 반도의 거친 바람을 뚫고 로켓이 기립했습니다. 2번의 연기가 있었지만 우리의 의지는 꺾이지 않았어요.",
              icon: "📍",
              active: { point: "기상 조건(바람, 구름, 번개)은 로켓 발사의 가장 중요한 결정 변수입니다." }
            },
            {
              time: "LIFT OFF",
              title: "강력한 엔진 점화, 이륙!",
              desc: "지축을 울리는 굉음과 함께 로켓이 하늘을 향해 솟구쳤습니다. 9개의 엔진이 엄청난 추력을 토해냅니다.",
              icon: "🚀",
              active: { point: "작용-반작용의 법칙을 통해 로켓은 자신의 무게보다 큰 힘을 아래로 내뿜으며 위로 올라갑니다." }
            },
            {
              time: "T + 03:00",
              title: "1단 부스터 분리",
              desc: "역할을 다한 1단 로켓이 분리되어 바다로 떨어집니다. 이제 더 가벼운 몸으로 우주를 향해 가속합니다.",
              icon: "⬇️",
            },
            {
              time: "ORBIT ENTRY",
              title: "위성 분리 및 궤도 안착",
              desc: "우주 공간에서 초소형 위성이 조용히 분리되었습니다. 이제 지구를 도는 '우주의 눈'이 되었습니다.",
              icon: "🛰",
              active: { point: "초속 약 7.9km의 속도를 내야 지구 중력에 끌려 내려오지 않고 궤도를 돌 수 있습니다." }
            }
          ].map((e, idx) => (
            <TimelineNode key={idx} {...e} active={e.active} />
          ))}
        </div>
        
        <div className="sticky top-32 rounded-[3rem] overflow-hidden glass-card border border-white/10 shadow-2xl transition-all duration-700 hover:shadow-blue-900/20">
          <div className="p-8 border-b border-white/10 flex justify-between items-center bg-slate-900/80 backdrop-blur-xl">
            <div className="flex items-center gap-3">
               <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></div>
               <span className="font-black text-sm tracking-widest text-blue-400 uppercase">Mission Data Stream</span>
            </div>
            <div className="text-[10px] font-mono text-slate-500 tracking-tighter">SECURE LINK: ACTIVE</div>
          </div>
          
          <div className="p-10 space-y-10 bg-slate-900/40">
            <div className="relative rounded-3xl overflow-hidden group aspect-video bg-black shadow-inner border border-white/5 ring-1 ring-white/10">
               {isPlaying ? (
                 <iframe 
                   className="w-full h-full"
                   src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                   title="실제 발사 영상"
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   allowFullScreen
                 ></iframe>
               ) : (
                 <div className="relative w-full h-full cursor-pointer overflow-hidden" onClick={() => setIsPlaying(true)}>
                    <img 
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt="Launch Preview"
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <div className="w-20 h-20 bg-white/5 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform group-hover:bg-blue-600/40 group-hover:border-blue-400/50 shadow-2xl">
                         <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                       </div>
                       <span className="mt-5 text-white font-black text-xs uppercase tracking-[0.4em] drop-shadow-lg">Mission Replay</span>
                    </div>
                 </div>
               )}
            </div>
            
            <div className="bg-slate-950 p-8 rounded-3xl font-mono text-xs border border-blue-500/20 shadow-inner relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all"></div>
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 <div className="text-green-400 font-black uppercase tracking-widest">Control Room Log</div>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                발사 26분 전, 예상치 못한 장비 신호 이상이 감지되었습니다. 
                현장의 엔지니어들은 침착하게 시스템을 재점검했습니다. 
                <span className="text-blue-400 font-bold italic"> "과학은 완벽한 한 번이 아니라 수정과 기다림의 연속이다." </span>
                이 짧은 문장은 현장의 긴장을 성공으로 바꾸는 마법이 되었습니다.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
               {['긴장', '기다림', '환호', '안도'].map(tag => (
                 <span key={tag} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-400 font-bold hover:text-blue-400 hover:border-blue-400/30 transition-all cursor-default">#{tag}</span>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchTimeline;
