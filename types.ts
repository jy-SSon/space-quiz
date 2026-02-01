
export enum Section {
  Home = 'home',
  Launch = 'launch',
  Satellite = 'satellite',
  Monitoring = 'monitoring',
  Roadmap = 'roadmap',
  Quiz = 'quiz',
  Career = 'career'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface RoadmapStep {
  id: Section;
  title: string;
  icon: string;
}
