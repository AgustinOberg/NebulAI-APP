import { useMutation } from '@tanstack/react-query';

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
  });
};
