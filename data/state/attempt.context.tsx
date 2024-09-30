import { createContext, useContext, useRef, useState } from 'react';
import type { FlatList } from 'react-native';

interface AttemptContextType {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  carouselRef: React.RefObject<FlatList>;
}

const AttemptContext = createContext<AttemptContextType | undefined>(undefined);

const AttemptProvider = ({ children }: React.PropsWithChildren) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const carouselRef = useRef<FlatList>(null);
  return (
    <AttemptContext.Provider
      value={{
        currentQuestionIndex,
        setCurrentQuestionIndex,
        carouselRef,
      }}
    >
      {children}
    </AttemptContext.Provider>
  );
};

export const useAttemptState = () => {
  const context = useContext(AttemptContext);
  if (context === undefined) {
    throw new Error('useAttemptState must be used within a AttemptProvider');
  }
  return context;
};

export default AttemptProvider;
