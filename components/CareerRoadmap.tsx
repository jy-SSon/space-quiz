
import React, { useState } from 'react';

const CareerRoadmap: React.FC = () => {
  const [level, setLevel] = useState<'초등' | '중등' | '고등' | '실전'>('초등');

  const levels = [
    { 
      id: '초등', 
      title: '호기심 단계', 
      desc: '왜 위성은 떨어지지 않을까? 질문을 시작하는 단계입니다.',
      icon: '🌱',
      actions: ['위성 관측 게임', '우주 퀴즈 도전', '페트병 로켓 만들기'],
      traits: ['관찰력', '질문하는 용기']
    },
    { 
      id: '중등', 
      title: '탐구 단계', 
      desc: '위성 설계자, 로켓 엔지니어 등 구체적인 역할을 알아봅니다.',
      icon: '🚀',
      actions: ['과학 탐구 보고서', '아두이노 메이커 활동', '천문 캠프 참여'],
      traits: ['수학/과학 기초', '협력하는 마음']
    },
    { 
      id: '고등', 
      title: '전공 단계', 
      desc: '실제 위성 궤도를 계산하고 시뮬레이션을 수행해봅니다.',
      icon: '🛰',
      actions: ['항공우주 캠프', '파이썬 데이터 분석', '물리 경시대회'],
      traits: ['전공 심화 지식', '문제 해결력']
    },
    { 
      id: '실전', 
      title: '전문가 단계', 
      desc: 'KAIST나 우주항공청에서 대한민국 우주 역사를 만듭니다.',
      icon: '🌍',
      actions: ['위성 설계 참여', '로켓 발사 지휘', '우주 정책 수립'],
      traits: ['전문성', '국가적 사명감']
    }
  ];

  const currentLevel = levels.find(l => l.id === level)!;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4">미래 과학자의 길: 꿈을 현실로</h2>
        <p className="text-slate-400">우주 과학자는 태어나는 게 아니라, 하나씩 경험하며 만들어집니다.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1 space-y-4">
           <h3 className="text-xl font-bold mb-6 text-blue-400 flex items-center gap-2">
             <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">STEP</span>
             나의 현재 위치는?
           </h3>
           {levels.map((l) => (
             <button
               key={l.id}
               onClick={() => setLevel(l.id as any)}
               className={`w-full p-5 rounded-2xl border text-left transition-all ${
                 level === l.id 
                 ? 'bg-blue-600 border-blue-400 text-white glow-blue' 
                 : 'bg-slate-900 border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/20'
               }`}
             >
               <div className="flex items-center gap-4">
                 <span className="text-2xl">{l.icon}</span>
                 <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-0.5">{l.id}</div>
                    <div className="font-bold">{l.title}</div>
                 </div>
               </div>
             </button>
           ))}
        </div>

        <div className="lg:col-span-2 glass-card p-10 rounded-[2.5rem] border border-white/10 animate-fade-in">
           <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-20 rounded-3xl bg-blue-600/20 flex items-center justify-center text-5xl">
                {currentLevel.icon}
              </div>
              <div>
                 <h3 className="text-3xl font-black mb-2">{currentLevel.title}</h3>
                 <p className="text-slate-400">{currentLevel.desc}</p>
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-8">
              <div>
                 <h4 className="font-bold text-sm text-blue-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                   추천 활동 카드
                 </h4>
                 <div className="space-y-3">
                   {currentLevel.actions.map(action => (
                     <div key={action} className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm font-medium hover:bg-white/10 transition-colors">
                       ✨ {action}
                     </div>
                   ))}
                 </div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-950 border border-white/5">
                 <h4 className="font-bold text-sm text-indigo-400 uppercase tracking-widest mb-6">
                   필요한 우주 핵심 역량
                 </h4>
                 <div className="flex flex-wrap gap-2">
                   {currentLevel.traits.map(trait => (
                     <span key={trait} className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold">
                       # {trait}
                     </span>
                   ))}
                 </div>
                 
                 <div className="mt-8 pt-8 border-t border-white/5">
                    <p className="text-xs text-slate-500 italic leading-relaxed">
                      "지금 우주에서 일하고 있는 사람들도 모두 한때는 여러분과 같은 호기심 가득한 과학 꿈나무였습니다."
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="mt-20 text-center bg-indigo-600 p-12 rounded-[3rem] glow-blue">
         <h3 className="text-3xl font-black text-white mb-4">여러분의 꿈이 우주의 별이 될 때까지</h3>
         <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
           실패와 지연은 끝이 아니라, 더 높은 곳으로 가기 위한 계단입니다. 
           대한민국 우주 탐험대는 언제나 여러분의 도전을 응원합니다!
         </p>
         <button className="px-12 py-5 bg-white text-indigo-600 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
           꿈의 우주 정거장 입장하기 🚀
         </button>
      </div>
    </div>
  );
};

export default CareerRoadmap;
