import { useState } from 'react';

import { useModal } from '@/components/ui/modal';

type ChallengeMode = 'challenge' | 'attempt';
export const useChallengeModal = () => {
  const [selectedId, setSelectedId] = useState<string>('');
  const [mode, setMode] = useState<ChallengeMode>('challenge');
  const { present: handlePresent, ref, dismiss: handleDismiss } = useModal();

  const present = (id: string) => {
    setSelectedId(id);
    handlePresent();
  };

  const dismiss = () => {
    setSelectedId('');
    handleDismiss();
    setMode('challenge');
  };

  return {
    present,
    dismiss,
    selectedId,
    ref,
    setMode,
    mode,
  };
};
