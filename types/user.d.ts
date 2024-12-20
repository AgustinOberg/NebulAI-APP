export interface User {
  id: string;
  thirdPartyAuthId: string;
  email: string;
  emailVerified: boolean;
  name: string;
  picture: string;
  locale: string;
  createdAt: number;
  updatedAt: null;
  isActive: boolean;
  attemptsMade: number;
  challengesMade: number;
}
