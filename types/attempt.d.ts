export interface Attempt {
  user: string;
  challenge: string;
  score: number;
  answers: string[];
  _id: string;
  createdAt: Date;
  __v: number;
}
