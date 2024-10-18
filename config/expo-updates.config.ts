/* eslint-disable react-hooks/exhaustive-deps */
import * as Updates from 'expo-updates';
import { useEffect } from 'react';

import useAppState from '@/hooks/useAppState';

import { useUpdatesStore } from '../data/state/updates.store';
export const useExpoUpdates = () => {
  const setUpdates = useUpdatesStore((state) => state.setUpdates);
  const updatesAvailables = useUpdatesStore((state) => state.updatesAvailables);

  const { appState } = useAppState();
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();
      setUpdates(update.isAvailable, update.manifest?.id);
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      console.error(`Error fetching latest Expo update: ${error}`);
    }
  }

  useEffect(() => {
    onFetchUpdateAsync();
  }, [appState]);

  return {
    isLoading: updatesAvailables,
  };
};
