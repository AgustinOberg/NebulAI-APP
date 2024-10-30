import * as DocumentPicker from 'expo-document-picker';
import { showMessage } from 'react-native-flash-message';

import { Analytics } from '@/analytics';
import { Prefix } from '@/analytics/events';
import { MAX_FILE_SIZE, MAX_FILE_SIZE_LABEL } from '@/constants/app.constants';
import { useDocumentProcess } from '@/data/fetchers/document.fetcher';
import { useChallengeState } from '@/data/state/challenge.context';
import { useLang } from '@/language/useLang';

export const useProcessFile = () => {
  const { mutate, reset } = useDocumentProcess();
  const { setFile } = useChallengeState();
  const { t } = useLang();
  const processFile = async (file: DocumentPicker.DocumentPickerResult) => {
    setFile(file);
    return mutate(file);
  };

  const pickFile = async () => {
    Analytics.trackEvent(Prefix.System.default + 'pick_file');
    const file = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    });
    return file;
  };

  const selectFile = async () => {
    const file = await pickFile();
    if (file.assets?.length === 0 || !file.assets) {
      Analytics.trackEvent(Prefix.System.default + 'select_file_error', {
        error: 'No file selected',
      });
      throw new Error('No file selected');
    }
    const size = file.assets?.[0]?.size ?? 0;
    if (size >= MAX_FILE_SIZE) {
      Analytics.trackEvent(Prefix.System.default + 'select_file_error', {
        error: 'File size exceeds the maximum limit',
      });
      showMessage({
        message: t('bigFileError'),
        description: `${t('fileMax')} ${MAX_FILE_SIZE_LABEL}`,
        type: 'danger',
      });
      throw new Error('File size exceeds the maximum limit');
    }
    Analytics.trackEvent(Prefix.System.default + 'select_file', {
      file_size: size,
    });
    return processFile(file);
  };

  return {
    pickFile,
    processFile,
    selectFile,
    reset,
  };
};
