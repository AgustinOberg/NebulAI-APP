export interface User {
  _id: string;
  thirdPartyAuthId?: string;
  email: string;
  emailVerified: boolean;
  name: string;
  picture?: string;
  locale: string;
  isActive: boolean;
  attemptsMade: number;
  challengesMade: number;
  actions: Actions;
  createdAt: Date;
  updatedAt: Date;
}

export interface Actions {
  ocr: number;
  textExtraction: number;
  geminiCredits: number;
}
