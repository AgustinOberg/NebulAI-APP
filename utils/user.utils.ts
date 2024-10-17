import type { User } from '@/types/user';

export const isOldUser = (user?: User) => user?.challengesMade! > 0;
export const isNewUser = (user?: User) => user?.challengesMade! === 0;
