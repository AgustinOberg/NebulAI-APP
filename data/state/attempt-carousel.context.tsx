import { createContext, useContext, useRef, useState } from 'react';
import type { FlatList } from 'react-native';

interface AttemptContextType {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  carouselRef: React.RefObject<FlatList>;
}

const AttemptContext = createContext<AttemptContextType | undefined>(undefined);

const AttemptCarouselProvider = ({ children }: React.PropsWithChildren) => {
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

export const useAttemptCarouselState = () => {
  const context = useContext(AttemptContext);
  if (context === undefined) {
    throw new Error(
      'useAttemptCarouselState must be used within a AttemptCarouselProvider',
    );
  }
  return context;
};

export default AttemptCarouselProvider;
