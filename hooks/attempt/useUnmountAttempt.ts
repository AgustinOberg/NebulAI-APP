import { useEffect } from 'react';

import { useAttempt } from './useAttempt';

export const useUnmountAttempt = () => {
  const { resetAttempt } = useAttempt();
  useEffect(() => {
    return () => {
      resetAttempt();
    };
  }, [resetAttempt]);
};
