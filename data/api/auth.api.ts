import { Analytics } from '@/analytics';
import privateApi, { publicApi } from '@/config/api.config';
import type { User } from '@/types/user';

export const googleAuth = async ({
  idToken,
  locale,
}: {
  idToken: string;
  locale: string;
}) => {
  const { data } = await publicApi.post<{ token: string }>('/auth/google', {
    idToken,
    locale,
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
  try {
    Analytics.identifyUser(data._id, {
      name: data.name,
      email: data.email,
      avatar: data.picture,
      firstName: data?.name?.split(' ')[0],
      lastName: data?.name?.split(' ')[1],
      language: data.locale,
    });
  } catch (error) {
    console.error(error);
  }
  return data;
};
