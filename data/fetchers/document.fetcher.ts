import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import { showMessage } from 'react-native-flash-message';

import { processDocument } from '../api/document.api';
import { useChallengeState } from '../state/challenge.context';

export const useDocumentProcess = () => {
  const { setContent } = useChallengeState();
  return useMutation({
    mutationFn: processDocument,
    mutationKey: ['processDocument'],
    onSuccess: (data) => {
      if (data?.content) setContent(data?.content);
    },
    onError: () => {
      router.replace('/(app)/(challenge)/creation');
      showMessage({
        message: 'Error al procesar el documento',
        type: 'danger',
      });
    },
  });
};
