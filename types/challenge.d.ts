export interface MinChallenge {
  title: string;
  description: string;
  difficulty: string;
  createdAt: number;
  id: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  provider: string;
  totalTokens: number;
  difficulty: string;
  ownerId: string;
  language: string;
  createdAt: number;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: Option[];
}

export interface Option {
  id: string;
  description: string;
  isCorrect: boolean;
}
