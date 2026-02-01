
import React from 'react';

const RoadmapSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4">11개의 위성 군단: 대한민국 우주 로드맵</h2>
        <p className="text-slate-400">누리호와 함께 완성될 우리의 독자적인 관측 체계입니다.</p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-800 hidden md:block"></div>
        
        <div className="grid md:grid-cols-4 gap-8 relative z-10">
          {[
            { year: "2024년", status: "시제기 & 검증기", desc: "성공적인 발사와 첫 교신, 기술 검증 완료!", active: true },
            { year: "2025년", status: "양산기 5기 발사", desc: "우리 손으로 만든 누리호에 실려 올라갑니다.", active: false },
            { year: "2026년", status: "추가 5기 발사", desc: "총 11기의 군집을 완성하는 마지막 단계!", active: false },
            { year: "최종 목표", status: "24시간 정밀 감시", desc: "대한민국 어디든 매일 3번 이상 지켜봅니다.", active: false },
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center mb-6 transition-all ${
                step.active ? 'bg-blue-600 border-blue-400 glow-blue text-white' : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}>
                {idx + 1}
              </div>
              <div className={`p-6 rounded-2xl glass-card border transition-all ${step.active ? 'border-blue-500/50 ring-1 ring-blue-500/20' : 'border-white/5'}`}>
                <div className="text-xs font-bold text-blue-400 mb-1">{step.year}</div>
                <h3 className="font-bold text-lg mb-3">{step.status}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-white/10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-black mb-4">"외국 발사체가 아닌 우리 로켓으로"</h3>
          <p className="text-slate-300 leading-relaxed">
            지금까지는 외국의 로켓(일렉트론 등)을 빌려 위성을 올렸지만, 
            내년부터는 우리 기술의 결정체인 <span className="text-blue-400 font-bold">누리호</span>가 이 임무를 맡습니다. 
            발사체부터 위성까지, 완전한 독자 기술을 갖추게 되는 것이죠.
          </p>
        </div>
        <div className="w-full md:w-64 aspect-video rounded-xl bg-slate-950 flex items-center justify-center border border-white/10">
          <span className="text-4xl">🇰🇷</span>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
