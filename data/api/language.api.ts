import privateApi from '@/config/api.config';

export const changeLanguage = async ({ language }: { language: string }) => {
  const { data } = await privateApi.put('/language', {
    locale: language,
  });
  return data;
};
