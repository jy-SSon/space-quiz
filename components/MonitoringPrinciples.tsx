
import React from 'react';

const MonitoringPrinciples: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4">한반도를 지키는 기술: 안보·재난 감시의 원리</h2>
        <p className="text-slate-400">왜 한 대가 아니라 여러 대가 필요할까요? 그 비밀은 '재방문 주기'에 있습니다.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="glass-card p-8 rounded-3xl border border-white/10">
          <div className="text-4xl mb-4">❌</div>
          <h3 className="text-xl font-bold mb-4">위성이 1대일 때</h3>
          <div className="w-full h-40 bg-slate-900 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
             <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
             <p className="absolute bottom-4 text-[10px] text-slate-500">한 번 지나가면 한참을 기다려야 해요...</p>
          </div>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li>• 하루에 관측 기회 1번 미만</li>
            <li>• 긴 감시 공백 발생</li>
            <li>• 긴급한 재난 상황 대응이 어려움</li>
          </ul>
        </div>

        <div className="bg-blue-600/10 p-8 rounded-3xl border border-blue-500/30 glow-blue">
          <div className="text-4xl mb-4">⭕</div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">위성이 11대일 때 (군집 운용)</h3>
          <div className="w-full h-40 bg-slate-900 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center gap-4">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: `${i*0.2}s` }}></div>
             ))}
             <p className="absolute bottom-4 text-[10px] text-blue-300">끊임없이 이어서 관찰해요!</p>
          </div>
          <ul className="space-y-3 text-blue-100 text-sm">
            <li>• <span className="font-bold">하루 3회 이상</span> 한반도 정밀 촬영</li>
            <li>• 감시 공백 최소화</li>
            <li>• 산불, 태풍 등 실시간 재난 추적 가능</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-900/60 p-10 rounded-3xl border border-white/5">
        <h3 className="text-2xl font-black mb-8">실제 활용 사례 (가상 시나리오)</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "산불 조기 발견", desc: "사람이 가기 힘든 험한 산의 불씨를 위성이 가장 먼저 발견합니다.", img: "🔥" },
            { title: "태풍 경로 추적", desc: "한반도로 다가오는 태풍의 눈을 실시간으로 추적하여 인명 피해를 막습니다.", img: "🌀" },
            { title: "국가 안보 수호", desc: "국경 너머의 위험 징후를 24시간 감시하여 평화를 지킵니다.", img: "🛡" }
          ].map(scenario => (
            <div key={scenario.title} className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="text-4xl mb-4">{scenario.img}</div>
              <h4 className="font-bold mb-2">{scenario.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{scenario.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonitoringPrinciples;
