import * as DocumentPicker from 'expo-document-picker';

import { useDocumentProcess } from '@/data/fetchers/document.fetcher';

export const useProcessFile = () => {
  const { mutateAsync } = useDocumentProcess();
  const processFile = async (file: DocumentPicker.DocumentPickerResult) => {
    return mutateAsync(file);
  };

  const pickFile = async () => {
    const file = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    });
    return file;
  };

  const selectFile = async () => {
    const file = await pickFile();
    return processFile(file);
  };

  return {
    pickFile,
    processFile,
    selectFile,
  };
};
