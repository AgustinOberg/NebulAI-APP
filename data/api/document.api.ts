import type * as DocumentPicker from 'expo-document-picker';

import privateApi from '@/config/api.config';

export const processDocument = async (
  document: DocumentPicker.DocumentPickerResult,
) => {
  const formData = new FormData();
  const assets = document.assets;
  if (!assets) return;
  const file = assets[0];
  const pdfFile = {
    name: 'file',
    uri: file.uri,
    type: file.mimeType,
    size: file.size,
  };
  formData.append('file', pdfFile as any);

  const { data } = await privateApi.post<{ content: string }>(
    '/document/process',
    formData,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return data;
};
