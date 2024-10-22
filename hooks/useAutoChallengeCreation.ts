import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { showMessage } from 'react-native-flash-message';

import { useChallengeState } from '@/data/state/challenge.context';
import type { Challenge } from '@/types/challenge';

import { useChallenge } from './useChallenge';

export const useAutoChallengeCreation = (callback?: (c: Challenge) => void) => {
  const { content, difficulty } = useChallengeState();
  const { createChallenge } = useChallenge();
  const [alreadyCalled, setAlreadyCalled] = useState(false);
  useEffect(() => {
    if (content && difficulty && !alreadyCalled) {
      createChallenge(callback).catch(() => {
        showMessage({
          message: 'Error al crear desafío',
          description: `Por favor, intenta nuevamente`,
          type: 'danger',
        });
        router.replace('/(challenge)/creation');
      });
      setAlreadyCalled(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, difficulty]);
};
