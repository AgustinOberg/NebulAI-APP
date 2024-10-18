import * as DocumentPicker from 'expo-document-picker';
import { showMessage } from 'react-native-flash-message';

import { MAX_FILE_SIZE, MAX_FILE_SIZE_LABEL } from '@/constants/app.constants';
import { useDocumentProcess } from '@/data/fetchers/document.fetcher';

export const useProcessFile = () => {
  const { mutate } = useDocumentProcess();
  const processFile = async (file: DocumentPicker.DocumentPickerResult) => {
    return mutate(file);
  };

  const pickFile = async () => {
    const file = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    });
    return file;
  };

  const selectFile = async () => {
    const file = await pickFile();
    if (file.assets?.length === 0 || !file.assets)
      throw new Error('No file selected');
    const size = file.assets?.[0]?.size ?? 0;
    if (size >= MAX_FILE_SIZE) {
      showMessage({
        message: 'El archivo seleccionado es demasiado grande',
        description: `Máximo: ${MAX_FILE_SIZE_LABEL}`,
        type: 'danger',
      });
      throw new Error('File size exceeds the maximum limit');
    }
    return processFile(file);
  };

  return {
    pickFile,
    processFile,
    selectFile,
  };
};
