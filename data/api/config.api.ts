import { publicApi } from '@/config/api.config';

export const getFileTypes = async () => {
  const { data } =
    await publicApi.get<{ label: string; mimeType: string }[]>(
      `/configs/file-types`,
    );
  return data;
};
