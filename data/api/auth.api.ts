import privateApi, { publicApi } from '@/config/api.config';
import type { User } from '@/types/user';

export const googleAuth = async ({ idToken }: { idToken: string }) => {
  const { data } = await publicApi.post<{ token: string }>('/auth/google', {
    idToken,
  });

  return data;
};

export const refreshToken = async () => {
  const { data } = await privateApi.get<{ token: string }>(
    '/auth/refresh-session',
  );
  return data;
};

export const getUserProfile = async () => {
  const { data } = await privateApi.get<User>('/auth/profile');
  return data;
};
