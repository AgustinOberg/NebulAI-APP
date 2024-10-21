import type { DocumentPickerResult } from 'expo-document-picker';
import { createContext, useContext, useReducer } from 'react';

type ChallengeAction =
  | { type: 'SET_CONTENT'; payload: string }
  | { type: 'SET_DIFFICULTY'; payload: number }
  | { type: 'SET_FILE'; payload: DocumentPickerResult | undefined };

interface ChallengeState {
  content: string;
  difficulty: number;
  file: DocumentPickerResult | undefined;
}

const initialState: ChallengeState = {
  content: '',
  difficulty: 0,
  file: undefined,
};

const challengeReducer = (
  state: ChallengeState,
  action: ChallengeAction,
): ChallengeState => {
  switch (action.type) {
    case 'SET_CONTENT':
      return { ...state, content: action.payload };
    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.payload };
    case 'SET_FILE':
      return { ...state, file: action.payload };
    default:
      return state;
  }
};

interface ChallengeContextType extends ChallengeState {
  setContent: (content: string) => void;
  setDifficulty: (difficulty: number) => void;
  setFile: (file: DocumentPickerResult | undefined) => void;
}

const ChallengeContext = createContext<ChallengeContextType | undefined>(
  undefined,
);

export const useChallengeState = (): ChallengeContextType => {
  const context = useContext(ChallengeContext);
  if (!context) {
    throw new Error(
      'useChallengeState must be used within a ChallengeProvider',
    );
  }
  return context;
};

export const ChallengeProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(challengeReducer, initialState);

  const setContent = (content: string) => {
    dispatch({ type: 'SET_CONTENT', payload: content });
  };

  const setDifficulty = (difficulty: number) => {
    dispatch({ type: 'SET_DIFFICULTY', payload: difficulty });
  };

  const setFile = (file: DocumentPickerResult | undefined) => {
    dispatch({ type: 'SET_FILE', payload: file });
  };

  return (
    <ChallengeContext.Provider
      value={{ ...state, setContent, setDifficulty, setFile }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeProvider;
