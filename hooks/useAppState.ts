import { useState, useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';

type AppStateHook = {
  appState: AppStateStatus;
};

const useAppState = (): AppStateHook => {
  const [appState, setAppState] = useState<AppStateStatus>(
    AppState.currentState,
  );

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      setAppState(nextAppState);
    };
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return { appState };
};

export default useAppState;
