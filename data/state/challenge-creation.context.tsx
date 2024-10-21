import type { DocumentPickerResult } from 'expo-document-picker';
import { createContext, useContext, useState } from 'react';

interface ChallengeCreation {}

const ContextName = createContext<ChallengeCreation | null>(null);

export const useChallengeCreationState = () => {
  const context = useContext(ContextName);
  if (!context) {
    throw new Error(
      'useChallengeCreationState must be used within a ChallengeCreationProvider',
    );
  }
  return context;
};

export const ChallengeCreationProvider: React.FC = ({
  children,
}: React.PropsWithChildren) => {
  const [difficulty, setDifficulty] = useState(0);
  const [file, setFile] = useState<DocumentPickerResult>();

  return (
    <ContextName.Provider value={{ difficulty, setDifficulty, file, setFile }}>
      {children}
    </ContextName.Provider>
  );
};
