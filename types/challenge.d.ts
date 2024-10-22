export interface Challenge {
  questions: Question[];
  provider: string;
  totalTokens: number;
  difficulty: string;
  _id: string;
}

export interface Question {
  question: string;
  options: Option[];
  _id: string;
}

export interface Option {
  description: string;
  _id: string;
  isCorrect: boolean;
}
export interface MinChallenge {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  difficulty: number;
}
