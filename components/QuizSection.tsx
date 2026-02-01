
import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface QuizStage {
  id: number;
  title: string;
  subtitle: string;
  level: string;
  icon: string;
  color: string;
  questions: QuizQuestion[];
}

const quizStages: QuizStage[] = [
  {
    id: 1,
    title: "로켓 공학 퀴즈",
    subtitle: "로켓은 마술이 아니라 물리다",
    level: "초급",
    icon: "🚀",
    color: "from-blue-500 to-cyan-500",
    questions: [
      { id: 1, question: "로켓은 공기가 있어야만 날 수 있다.", options: ["O", "X"], correctIndex: 1, explanation: "로켓은 공기가 없는 진공 상태의 우주에서도 작용-반작용 원리로 날 수 있습니다." },
      { id: 2, question: "로켓 추진의 기본 원리가 되는 법칙은?", options: ["만유인력 법칙", "상대성 이론", "뉴턴의 제3법칙", "열역학 제1법칙"], correctIndex: 2, explanation: "뉴턴의 제3법칙인 '작용-반작용 법칙'이 로켓 추진의 근본 원리입니다." },
      { id: 3, question: "로켓은 아래로 가스를 분사할수록 위로 더 강한 힘을 얻는다.", options: ["O", "X"], correctIndex: 0, explanation: "더 많은 가스를 더 빨리 내뿜을수록 로켓이 얻는 추진력은 커집니다." },
      { id: 4, question: "다음 중 액체연료 로켓의 특징은?", options: ["점화 후 정지 불가", "추력 조절 불가", "재점화 가능", "장기 보관에 매우 유리"], correctIndex: 2, explanation: "액체연료 로켓은 밸브를 조절해 엔진을 끄고 켜는 제어가 가능합니다." },
      { id: 5, question: "고체연료 로켓의 장점으로 가장 적절한 것은?", options: ["구조가 매우 복잡하다", "추력 제어가 자유롭다", "장기 저장이 어렵다", "구조가 단순하다"], correctIndex: 3, explanation: "고체연료 로켓은 연료가 이미 채워져 있어 구조가 단순하고 발사 준비가 빠릅니다." },
      { id: 6, question: "고체연료 로켓은 한 번 점화되면 중간에 멈출 수 없다.", options: ["O", "X"], correctIndex: 0, explanation: "고체연료는 한 번 타기 시작하면 연료가 다 소진될 때까지 계속 연소됩니다." },
      { id: 7, question: "대한민국 발사체 누리호(KSLV-II)의 단 수는?", options: ["1단", "2단", "3단", "4단"], correctIndex: 2, explanation: "누리호는 1단, 2단, 3단으로 구성된 3단 로켓입니다." },
      { id: 8, question: "누리호는 1단 엔진에 해외 기술을 사용한다.", options: ["O", "X"], correctIndex: 1, explanation: "누리호는 설계부터 제작, 시험까지 전 과정을 국내 기술로 자립했습니다." },
      { id: 9, question: "누리호의 저궤도 최대 탑재 중량은 약 얼마인가?", options: ["100kg", "500kg", "1,000kg", "1,500kg"], correctIndex: 3, explanation: "누리호는 약 1.5톤(1,500kg)급의 위성을 지구 저궤도에 올릴 수 있습니다." },
      { id: 10, question: "나로호는 1단 엔진에 러시아 기술이 사용되었다.", options: ["O", "X"], correctIndex: 0, explanation: "우리나라 첫 우주발사체 나로호는 1단 엔진을 러시아에서 도입했습니다." },
      { id: 11, question: "로켓 엔진에서 연료와 함께 반드시 필요한 것은?", options: ["냉각수", "산화제", "윤활유", "전기"], correctIndex: 1, explanation: "우주에는 산소가 없으므로 연료를 태우기 위한 산화제를 반드시 함께 실어야 합니다." },
      { id: 12, question: "우주에서는 산소가 없기 때문에 로켓 엔진이 작동하지 않는다.", options: ["O", "X"], correctIndex: 1, explanation: "산화제를 가지고 가기 때문에 산소가 없는 진공에서도 불꽃을 내뿜으며 작동합니다." },
      { id: 13, question: "로켓의 추력을 가장 크게 만드는 요소는?", options: ["색깔", "분사 속도", "외형 디자인", "발사대 높이"], correctIndex: 1, explanation: "가스를 얼마나 빨리 뿜어내느냐가 추진력의 크기를 결정하는 핵심입니다." },
      { id: 14, question: "로켓이 점점 가벼워질수록 같은 힘으로 더 빨리 가속된다.", options: ["O", "X"], correctIndex: 0, explanation: "연료를 소모하며 질량이 줄어들수록 로켓의 속도는 더 빠르게 증가합니다." },
      { id: 15, question: "로켓 발사 시 가장 많은 연료를 사용하는 구간은?", options: ["궤도 진입 후", "지상 이탈 직후", "대기권 밖", "엔진 정지 후"], correctIndex: 1, explanation: "지구의 강한 중력과 두꺼운 대기를 뚫고 올라가는 발사 직후에 가장 많은 연료가 소모됩니다." },
      { id: 16, question: "대기 저항은 로켓 발사 초기에 가장 크다.", options: ["O", "X"], correctIndex: 0, explanation: "공기 밀도가 높은 지상 근처에서 로켓이 느끼는 공기 저항이 가장 큽니다." },
      { id: 17, question: "로켓의 방향을 제어하는 기술로 사용되는 것은?", options: ["날개 각도 조절", "엔진 짐벌(gimbal)", "연료 색상", "위성 신호"], correctIndex: 1, explanation: "엔진의 방향을 직접 틀어서 로켓의 자세와 궤도를 바꾸는 '짐벌' 기술이 사용됩니다." },
      { id: 18, question: "짐벌 기술은 엔진 방향을 미세하게 바꿔 자세를 제어한다.", options: ["O", "X"], correctIndex: 0, explanation: "짐벌 장치를 통해 엔진 노즐의 방향을 꺾어 비행 방향을 조절합니다." },
      { id: 19, question: "누리호 발사 성공(2022)이 의미하는 것은?", options: ["첫 달 착륙", "재사용 로켓 개발", "발사체 기술 자립", "유인 우주비행"], correctIndex: 2, explanation: "우리나라가 독자적으로 우주로 갈 수 있는 '우주 수송 능력'을 갖췄음을 의미합니다." },
      { id: 20, question: "로켓 기술은 위성·탐사·국방 등 다양한 분야와 연결된다.", options: ["O", "X"], correctIndex: 0, explanation: "발사체 기술은 국가 안보와 미래 우주 산업을 지탱하는 기반 기술입니다." },
    ]
  },
  {
    id: 2,
    title: "위성과 우주정거장 퀴즈",
    subtitle: "지구 궤도는 이미 사람이 일하는 공간이다",
    level: "중급",
    icon: "🛰",
    color: "from-indigo-500 to-purple-500",
    questions: [
      { id: 1, question: "국제우주정거장(ISS)은 약 400km 상공을 돈다.", options: ["O", "X"], correctIndex: 0, explanation: "ISS는 고도 약 400km의 지구 저궤도에서 연구를 수행하는 우주 실험실입니다." },
      { id: 2, question: "ISS의 평균 공전 속도는?", options: ["시속 3,000km", "시속 7,800km", "시속 17,000km", "시속 27,000km"], correctIndex: 3, explanation: "ISS는 총알보다 훨씬 빠른 시속 약 27,700km로 비행하며 90분마다 지구를 한 바퀴 돕니다." },
      { id: 3, question: "ISS의 무중력 상태는 중력이 없어서 발생한다.", options: ["O", "X"], correctIndex: 1, explanation: "중력은 있지만, ISS가 지구를 향해 자유낙하하는 상태이기 때문에 무중력처럼 느껴집니다." },
      { id: 4, question: "ISS에서 무중력처럼 느껴지는 이유는?", options: ["중력이 사라져서", "자기장이 강해서", "자유낙하 상태이기 때문", "우주선이 멈춰 있어서"], correctIndex: 2, explanation: "지구로 떨어지는 힘과 궤도를 유지하는 속도가 균형을 이루는 '자유낙하' 상태이기 때문입니다." },
      { id: 5, question: "ISS는 하루에 약 15~16번 지구를 돈다.", options: ["O", "X"], correctIndex: 0, explanation: "ISS에 있는 우주비행사들은 하루에 16번의 일출과 일몰을 경험합니다." },
      { id: 6, question: "ISS에 참여하지 않은 국가는?", options: ["미국", "러시아", "일본", "중국"], correctIndex: 3, explanation: "중국은 독자적인 우주정거장인 '텐궁'을 운영하고 있습니다." },
      { id: 7, question: "ISS는 2030년 전후로 임무 종료가 예정되어 있다.", options: ["O", "X"], correctIndex: 0, explanation: "ISS는 노후화로 인해 2030년경 퇴역할 예정이며, 이후에는 민간 우주정거장이 그 역할을 대신할 것입니다." },
      { id: 8, question: "ISS 종료 후 계획된 처리 방식은?", options: ["달로 이동", "화성 궤도 이동", "지구 대기권 소각", "남태평양 안전 수장"], correctIndex: 3, explanation: "안전을 위해 대기권에서 연소시킨 후 남은 파편을 남태평양 오지로 수장시킬 계획입니다." },
      { id: 9, question: "지구 저궤도(LEO)는 통신·관측에 가장 많이 사용된다.", options: ["O", "X"], correctIndex: 0, explanation: "지구와 가깝기 때문에 고해상도 촬영과 빠른 통신이 가능하여 가장 붐비는 궤도입니다." },
      { id: 10, question: "대한민국 초소형 군집위성의 주요 목적은?", options: ["우주 관광", "기상 예보만 수행", "한반도 감시·재난 대응", "우주 정거장 보급"], correctIndex: 2, explanation: "한반도를 촘촘하게 감시하고 산불, 태풍 등 재난에 빠르게 대응하는 것이 주 목적입니다." },
      { id: 11, question: "군집위성은 여러 대가 함께 운용된다.", options: ["O", "X"], correctIndex: 0, explanation: "혼자가 아니라 팀을 이뤄 여러 대가 함께 돌아가며 사각지대를 메웁니다." },
      { id: 12, question: "KAIST 군집위성의 흑백 해상도는 약?", options: ["10m", "5m", "1m", "0.1m"], correctIndex: 2, explanation: "1m급 해상도는 지상의 자동차 종류를 구별할 수 있는 정밀한 수준입니다." },
      { id: 13, question: "군집위성은 한반도를 하루 한 번만 촬영한다.", options: ["O", "X"], correctIndex: 1, explanation: "11대가 팀을 이루면 한반도를 하루에 3번 이상 자주 들여다볼 수 있습니다." },
      { id: 14, question: "군집위성의 장점으로 가장 적절한 것은?", options: ["제작 비용이 매우 높다", "한 대 고장 시 전체 실패", "관측 주기 단축", "유인 탑승 가능"], correctIndex: 2, explanation: "여러 대가 번갈아 지나가므로 다시 관측하는 데 걸리는 시간(재방문 주기)을 획기적으로 줄입니다." },
      { id: 15, question: "스타링크는 지구 정지궤도(GEO)에만 배치된다.", options: ["O", "X"], correctIndex: 1, explanation: "빠른 통신을 위해 지구와 훨씬 가까운 저궤도(LEO)에 배치됩니다." },
      { id: 16, question: "스타링크 위성이 주로 배치되는 궤도는?", options: ["GEO", "LEO", "달 궤도", "태양 궤도"], correctIndex: 1, explanation: "저궤도(Low Earth Orbit)를 활용해 지구 전역에 초고속 인터넷을 공급합니다." },
      { id: 17, question: "스타링크는 인터넷 사각지대를 줄이기 위한 목적이다.", options: ["O", "X"], correctIndex: 0, explanation: "광케이블을 깔기 힘든 오지나 바다 위에서도 인터넷을 쓸 수 있게 해줍니다." },
      { id: 18, question: "스타링크가 특히 유용한 장소는?", options: ["대도시 중심", "산간·해상·오지", "지하 공간", "실내 전용"], correctIndex: 1, explanation: "기존의 유선망이 닿지 않는 곳에서 위성 인터넷은 혁명적인 기술입니다." },
      { id: 19, question: "위성 통신은 재난 상황에서도 중요한 역할을 한다.", options: ["O", "X"], correctIndex: 0, explanation: "지상의 기지국이 파괴되어도 위성을 통한 통신은 가능하기 때문에 긴급 구조에 필수적입니다." },
      { id: 20, question: "ISS·군집위성·스타링크의 공통점은?", options: ["모두 군사 전용", "모두 유인 우주선", "지구 저궤도 활용", "모두 국가 기관만 운영"], correctIndex: 2, explanation: "모두 지구와 가깝고 활용도가 높은 저궤도를 기반으로 운용되는 기술들입니다." },
    ]
  },
  {
    id: 3,
    title: "새로운 우주 경쟁 퀴즈",
    subtitle: "우주는 이제 산업 구조의 문제다",
    level: "고급",
    icon: "🌍",
    color: "from-amber-500 to-orange-600",
    questions: [
      { id: 1, question: "뉴스페이스(New Space)는 민간 기업 중심의 우주 산업을 의미한다.", options: ["O", "X"], correctIndex: 0, explanation: "과거 정부 주도에서 민간 기업들의 비즈니스와 혁신 중심으로 우주 개발이 변하고 있습니다." },
      { id: 2, question: "뉴스페이스의 핵심 키워드는?", options: ["명예", "비용 절감", "국력 과시", "정치 경쟁"], correctIndex: 1, explanation: "우주가 산업이 되기 위해서는 발사 비용을 낮춰 접근성을 높이는 것이 가장 중요합니다." },
      { id: 3, question: "과거 올드 스페이스는 정부 주도였다.", options: ["O", "X"], correctIndex: 0, explanation: "냉전 시대 국가의 위상을 높이기 위해 정부 예산으로 거대 사업들이 진행되었습니다." },
      { id: 4, question: "SpaceX의 핵심 전략이 아닌 것은?", options: ["수직 계열화", "빠른 실험", "로켓 재사용", "단발 발사"], correctIndex: 3, explanation: "스페이스X는 한 번 쓰고 버리는 것이 아니라 로켓을 수십 번 '재사용'하는 전략을 고수합니다." },
      { id: 5, question: "스페이스X는 실패를 데이터로 활용한다.", options: ["O", "X"], correctIndex: 0, explanation: "완벽해질 때까지 기다리기보다 일단 발사해보고 실패를 통해 배우는 빠른 개발 방식을 선호합니다." },
      { id: 6, question: "재사용 로켓의 가장 큰 효과는?", options: ["발사 시간 증가", "비용 급감", "연료 증가", "무게 증가"], correctIndex: 1, explanation: "로켓 제작 비용을 여러 번에 걸쳐 분담할 수 있어 우주 운송 가격이 획기적으로 저렴해집니다." },
      { id: 7, question: "팔콘9 1단은 해상 드론쉽에 착륙할 수 있다.", options: ["O", "X"], correctIndex: 0, explanation: "우주로 나갔던 로켓이 바다 위 배나 지상 발사장으로 거꾸로 내려와 수직 착륙하는 것이 재사용의 핵심입니다." },
      { id: 8, question: "제1 우주속도의 의미는?", options: ["달로 가는 속도", "태양계 탈출 속도", "지구 궤도 진입 최소 속도", "대기권 탈출 속도"], correctIndex: 2, explanation: "지구의 중력을 이겨내고 원형 궤도를 돌기 위해 필요한 최소 속도로 초속 약 7.9km입니다." },
      { id: 9, question: "우주속도는 물리 개념이자 비용 문제다.", options: ["O", "X"], correctIndex: 0, explanation: "더 빠른 속도를 내려면 더 많은 연료와 더 정교한 기술이 필요하므로 비용과 직결됩니다." },
      { id: 10, question: "제2 우주속도(탈출 속도)는 약 얼마인가?", options: ["7.9km/s", "9.8km/s", "11.2km/s", "16.7km/s"], correctIndex: 2, explanation: "지구의 중력을 완전히 벗어나 달이나 다른 행성으로 가기 위해 필요한 속도입니다." },
      { id: 11, question: "우주 쓰레기는 자연적으로 사라지기 쉽다.", options: ["O", "X"], correctIndex: 1, explanation: "우주에는 공기가 없어 한 번 궤도에 오른 쓰레기는 수십 년에서 수백 년간 계속 돕니다." },
      { id: 12, question: "우주 쓰레기의 평균 속도는 약?", options: ["초속 1km", "초속 3km", "초속 8km", "초속 20km"], correctIndex: 2, explanation: "총알보다 7배 이상 빠른 속도로 돌고 있어 작은 파편도 위성을 파괴할 수 있습니다." },
      { id: 13, question: "작은 우주 쓰레기도 위성에 치명적이다.", options: ["O", "X"], correctIndex: 0, explanation: "속도가 워낙 빠르기 때문에 1cm 크기의 조각도 수류탄 정도의 위력을 발휘합니다." },
      { id: 14, question: "우주 쓰레기 제거 아이디어가 아닌 것은?", options: ["레이저", "우주 그물", "전자기 밧줄", "핵폭발"], correctIndex: 3, explanation: "핵폭발은 오히려 더 많은 파편을 만들어 상황을 악화시킬 수 있어 금지되어 있습니다." },
      { id: 15, question: "우주 쓰레기 문제는 새로운 산업 기회가 될 수 있다.", options: ["O", "X"], correctIndex: 0, explanation: "쓰레기를 수거하거나 궤도를 청소해주는 '우주 서비스'가 미래 유망 산업으로 떠오르고 있습니다." },
      { id: 16, question: "스타링크 수익의 주요 활용처는?", options: ["지상 통신망 철거", "화성 탐사 R&D", "ISS 운영", "달 기지 건설"], correctIndex: 1, explanation: "스페이스X는 위성 인터넷 사업으로 번 돈을 인류의 화성 이주 사업(Starship)에 투자하고 있습니다." },
      { id: 17, question: "민간 기업은 이제 우주 탐사의 주체가 될 수 있다.", options: ["O", "X"], correctIndex: 0, explanation: "기업이 스스로 로켓을 만들고 달이나 화성으로 가는 계획을 세우는 시대가 되었습니다." },
      { id: 18, question: "뉴스페이스 시대의 진입 장벽은?", options: ["정치", "가격 경쟁력", "국적", "언어"], correctIndex: 1, explanation: "기술만큼이나 '얼마나 싸게 발사할 수 있느냐'가 시장에서 살아남는 결정적 요소가 되었습니다." },
      { id: 19, question: "우주 산업은 더 이상 소수 국가만의 영역이 아니다.", options: ["O", "X"], correctIndex: 0, explanation: "대한민국을 포함한 많은 나라가 우주 경제 시대를 대비해 뛰어들고 있습니다." },
      { id: 20, question: "이 시대 우주 인재에게 가장 중요한 역량은?", options: ["암기", "체력", "구조적 사고", "운"], correctIndex: 2, explanation: "복잡한 우주 시스템을 이해하고 가장 효율적인 해결책을 찾아내는 사고력이 무엇보다 중요합니다." },
    ]
  }
];

const QuizSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<QuizStage | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const startStage = (stage: QuizStage) => {
    setSelectedStage(stage);
    setCurrentIdx(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
  };

  const handleSelect = (idx: number) => {
    if (selected !== null || !selectedStage) return;
    setSelected(idx);
    if (idx === selectedStage.questions[currentIdx].correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (!selectedStage) return;
    if (currentIdx < selectedStage.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const exitQuiz = () => {
    setSelectedStage(null);
  };

  if (!selectedStage) {
    return (
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">슬기로운 우주탐구 퀴즈</h2>
          <p className="text-slate-400 text-lg">암기가 아닌 이해로 즐기는 우주 지식 게임입니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {quizStages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => startStage(stage)}
              className="group relative flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-slate-900/50 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(30,58,138,0.3)]"
            >
              <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-5xl mb-6 shadow-2xl group-hover:rotate-6 transition-transform`}>
                {stage.icon}
              </div>
              <div className="mb-2 px-3 py-1 rounded-full bg-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 border border-white/5">
                Stage {stage.id} • {stage.level}
              </div>
              <h3 className="text-2xl font-black mb-3">{stage.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{stage.subtitle}</p>
              <div className="mt-auto w-full py-4 rounded-xl bg-white/5 font-black group-hover:bg-blue-600 group-hover:text-white transition-all">
                탐험 시작하기
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-20 text-center text-slate-500 text-xs font-mono uppercase tracking-widest opacity-50">
          Source: NASA, ESA, KARI, KAIST, SpaceX Official Missions
        </div>
      </div>
    );
  }

  const q = selectedStage.questions[currentIdx];

  return (
    <div className="max-w-3xl mx-auto px-4 min-h-[600px] flex flex-col justify-center">
      <div className="flex justify-between items-center mb-10">
        <button onClick={exitQuiz} className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
          <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
          <span className="text-sm font-black uppercase tracking-widest">Back to Stages</span>
        </button>
        <div className="flex items-center gap-3">
          <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${selectedStage.color} text-white text-[10px] font-black tracking-widest`}>
            STAGE {selectedStage.id}
          </div>
          <div className="bg-white/5 px-3 py-1.5 rounded-lg font-mono text-xs text-slate-400">
            {currentIdx + 1} / {selectedStage.questions.length}
          </div>
        </div>
      </div>

      <div className="glass-card p-10 md:p-14 rounded-[3.5rem] border border-white/10 relative overflow-hidden shadow-2xl bg-slate-900/80">
        {!showResult ? (
          <div className="animate-fade-in">
            <div className="w-full h-1.5 bg-slate-800 rounded-full mb-12 overflow-hidden">
               <div 
                 className={`h-full bg-gradient-to-r ${selectedStage.color} transition-all duration-700 ease-out`} 
                 style={{ width: `${((currentIdx + 1) / selectedStage.questions.length) * 100}%` }}
               ></div>
            </div>

            <h3 className="text-2xl md:text-3xl font-black mb-14 leading-tight tracking-tight text-white">{q.question}</h3>

            <div className="grid gap-5">
              {q.options.map((opt, idx) => {
                let statusClass = "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/[0.08]";
                if (selected !== null) {
                  if (idx === q.correctIndex) statusClass = "border-green-500 bg-green-500/20 text-green-400";
                  else if (idx === selected) statusClass = "border-red-500 bg-red-500/20 text-red-400";
                  else statusClass = "border-white/5 opacity-30 grayscale";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={selected !== null}
                    className={`group w-full p-7 text-left rounded-3xl border transition-all duration-300 font-black text-lg flex justify-between items-center ${statusClass}`}
                  >
                    <span>{opt}</span>
                    <div className="flex items-center gap-3">
                      {selected !== null && idx === q.correctIndex && (
                        <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                          <span className="text-xl">✓</span>
                        </div>
                      )}
                      {selected === idx && idx !== q.correctIndex && (
                        <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(239,44,44,0.4)]">
                          <span className="text-xl">✗</span>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {selected !== null && (
              <div className="mt-14 animate-slide-up">
                <div className="p-10 rounded-[2.5rem] bg-slate-950/80 border border-white/5 mb-10 relative overflow-hidden group backdrop-blur-md">
                  <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${selectedStage.color}`}></div>
                  <div className="flex items-center gap-2 mb-4">
                     <span className="text-blue-400 text-lg">💡</span>
                     <h4 className="text-xs font-black text-blue-400 uppercase tracking-[0.4em]">Expert Explanation</h4>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed font-medium">
                    {q.explanation}
                  </p>
                </div>
                <button
                  onClick={handleNext}
                  className={`group w-full py-6 rounded-[2rem] bg-gradient-to-r ${selectedStage.color} text-white font-black text-xl transition-all shadow-2xl hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-3`}
                >
                  {currentIdx === selectedStage.questions.length - 1 ? '최종 미션 보고서 확인' : '다음 관문 통과하기'}
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-10 animate-fade-in">
            <div className="text-9xl mb-12 animate-bounce">
              {score > selectedStage.questions.length * 0.8 ? "🏆" : "🎖️"}
            </div>
            <h3 className="text-5xl font-black mb-6 tracking-tight">MISSION COMPLETE</h3>
            <p className="text-2xl text-slate-400 mb-14 font-medium">
              <span className="text-white font-black">{selectedStage.questions.length}</span>개의 관문 중 
              <span className={`mx-3 text-6xl bg-clip-text text-transparent bg-gradient-to-r ${selectedStage.color} font-black animate-pulse`}>
                {score}
              </span> 
              개를 정복했습니다!
            </p>
            
            <div className="p-10 rounded-[2.5rem] bg-blue-900/10 border border-blue-500/20 mb-14 text-blue-100 text-lg leading-relaxed">
               {score === selectedStage.questions.length 
                 ? "경이로운 기록입니다! 당신은 우주를 이해하는 완벽한 탐험 대원입니다. 대한민국의 우주 미래를 이끌어갈 주인공이 되어주세요!" 
                 : score > selectedStage.questions.length * 0.7 
                 ? "훌륭한 성과입니다! 이미 수준 높은 우주 지식을 갖추고 계시군요. 조금만 더 탐구하면 우주 전문가가 될 수 있습니다."
                 : "멋진 도전이었습니다! 다시 한 번 지식을 점검해본다면 진정한 우주 과학자의 길로 들어설 수 있을 거예요."}
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button
                onClick={() => startStage(selectedStage)}
                className="px-12 py-6 rounded-3xl bg-white/5 border border-white/10 text-white font-black text-lg hover:bg-white/10 transition-all backdrop-blur-md"
              >
                다시 도전하기
              </button>
              <button
                onClick={exitQuiz}
                className={`px-12 py-6 rounded-3xl bg-gradient-to-r ${selectedStage.color} text-white font-black text-lg shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-all`}
              >
                다른 스테이지 도전
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizSection;
