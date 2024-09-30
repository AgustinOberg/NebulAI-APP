import { createContext, useContext, useState } from 'react';

interface ChallengeContextType {
  content: string;
  difficulty: number;
  setContent: (content: string) => void;
  setDifficulty: (difficulty: number) => void;
}

const ChallengeContext = createContext<ChallengeContextType | undefined>(
  undefined,
);

const ChallengeProvider = ({ children }: React.PropsWithChildren) => {
  const [content, setContent] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);
  return (
    <ChallengeContext.Provider
      value={{
        content,
        setContent,
        difficulty,
        setDifficulty,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallengeState = () => {
  const context = useContext(ChallengeContext);
  if (context === undefined) {
    throw new Error(
      'useChallengeState must be used within a ChallengeProvider',
    );
  }
  return context;
};

export default ChallengeProvider;
