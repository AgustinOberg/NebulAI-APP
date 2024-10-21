import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import { showMessage } from 'react-native-flash-message';

import { Analytics } from '@/analytics';
import { Prefix } from '@/analytics/events';

import { processDocument } from '../api/document.api';
import { useChallengeState } from '../state/challenge.context';

export const useDocumentProcess = () => {
  const { setContent } = useChallengeState();
  return useMutation({
    mutationFn: processDocument,
    mutationKey: ['processDocument'],
    onSuccess: (data) => {
      Analytics.trackEvent(Prefix.System.default + 'process_document_success');
      if (data?.content) setContent(data?.content);
    },
    onError: () => {
      router.replace('/(app)/(challenge)/creation');
      Analytics.trackEvent(Prefix.System.default + 'process_document_error');
      showMessage({
        message: 'Error al procesar el documento',
        type: 'danger',
      });
    },
  });
};
