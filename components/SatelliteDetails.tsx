
import React, { useState } from 'react';

const SatelliteDetails: React.FC = () => {
  const [activePart, setActivePart] = useState<string | null>(null);

  const satelliteParts = [
    { 
      id: 'camera', 
      name: '전자광학카메라 (EO)', 
      desc: '흑백 1m, 컬러 4m의 해상도로 지상을 관측합니다. 100kg급 소형 위성으로는 최고 수준의 성능이죠!',
      icon: '📸' 
    },
    { 
      id: 'solar', 
      name: '태양전지판', 
      desc: '태양 빛을 받아 위성이 작동하는 데 필요한 전기를 만듭니다. 우주에서의 밥줄이라고 할 수 있어요.',
      icon: '☀️' 
    },
    { 
      id: 'antenna', 
      name: '통신 안테나', 
      desc: '촬영한 사진을 지구로 보내고, 지상의 명령을 받는 귀와 입 역할을 합니다.',
      icon: '📡' 
    },
    { 
      id: 'body', 
      name: '위성 본체', 
      desc: '모든 핵심 부품을 보호하고 제어하는 두뇌입니다. KAIST에서 정성을 다해 만들었어요.',
      icon: '🧠' 
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4">대한민국의 새로운 눈: 초소형 군집위성이란?</h2>
        <p className="text-slate-400">작은 몸집에 숨겨진 거대한 기술을 만나보세요.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070" 
            alt="Satellite Technology" 
            className="relative z-10 w-full rounded-3xl shadow-2xl border border-white/10 aspect-square object-cover"
          />
          
          {/* Interactive Dots Over Image (Conceptual) */}
          <div className="absolute inset-0 z-20">
            <button 
              onMouseEnter={() => setActivePart('camera')}
              className="absolute top-1/4 left-1/3 w-6 h-6 bg-blue-500 rounded-full animate-ping cursor-pointer"
            />
            <button 
              onMouseEnter={() => setActivePart('solar')}
              className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-yellow-500 rounded-full animate-ping cursor-pointer"
            />
          </div>
        </div>

        <div className="space-y-6">
          {satelliteParts.map((part) => (
            <div 
              key={part.id}
              onMouseEnter={() => setActivePart(part.id)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activePart === part.id 
                ? 'bg-blue-600 border-blue-400 translate-x-4 glow-blue shadow-lg' 
                : 'bg-slate-800/50 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="text-3xl">{part.icon}</span>
                <h3 className="font-bold text-xl">{part.name}</h3>
              </div>
              <p className={`text-sm ${activePart === part.id ? 'text-blue-100' : 'text-slate-400'}`}>
                {part.desc}
              </p>
            </div>
          ))}

          <div className="mt-12 p-8 rounded-3xl bg-indigo-600/10 border border-indigo-500/20 backdrop-blur-md">
             <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
               <span className="p-2 bg-indigo-500 rounded-lg">💡</span>
               알고 계셨나요?
             </h4>
             <p className="text-slate-300 text-sm leading-relaxed">
               초소형 위성은 무게가 100kg 미만입니다. 예전에는 위성 하나를 만드는 데 수천 억 원이 들었지만, 
               이제는 작고 효율적인 위성 여러 개를 만들어 '군집'으로 운용하는 것이 세계적인 추세예요!
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatelliteDetails;
