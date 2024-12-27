export interface Attempt {
  user: string;
  challenge: string;
  score: number;
  answers: string[];
  id: string;
  createdAt: number;
}
