import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Alert, Linking } from 'react-native';
import type { StateCreator } from 'zustand';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { Analytics } from '@/analytics';
import { Prefix } from '@/analytics/events';
import { queryClient } from '@/config/query.config';
import { DELETE_ACCOUNT_URL } from '@/constants/url.constants';
import { asyncStoragePersistConfig } from '@/utils/storage.utils';

interface UserStore {
  // Properties
  token?: string;
  isAuthenticated: boolean;

  // Methods
  setToken: (token: string) => void;
  logout: () => void;
  resetState: () => void;
}

const initialState = {
  token: undefined,
  isAuthenticated: false,
};

const storeApi: StateCreator<UserStore, [['zustand/immer', never]]> = (
  set,
) => ({
  // Properties
  ...initialState,

  // Methods
  setToken: (token) => {
    set((state) => {
      state.token = token;
      state.isAuthenticated = true;
    });
  },
  resetState: () => {
    set(() => initialState);
  },
  logout: () => {
    GoogleSignin.signOut();
    useUserStore.getState().resetState();
  },
});

export const useUserStore = create<UserStore>()(
  persist(immer(storeApi), {
    name: 'user-store',
    storage: createJSONStorage(() => asyncStoragePersistConfig),
    partialize: (state) => ({
      token: state.token,
      isAuthenticated: state.isAuthenticated,
    }),
  }),
);

export const useUser = () => {
  const token = useUserStore((state) => state.token);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const setToken = useUserStore((state) => state.setToken);
  const logoutState = useUserStore((state) => state.logout);

  const logout = () => {
    queryClient.removeQueries({ queryKey: ['user-profile'] });
    Analytics.trackEvent(Prefix.System.default + 'logout');
    Analytics.reset();
    logoutState();
  };

  const deleteAccount = () => {
    Analytics.trackEvent(Prefix.System.default + 'delete_account');
    Alert.alert(
      'Eliminar cuenta',
      '¿Estás seguro de que deseas eliminar tu cuenta?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            Analytics.trackEvent(
              Prefix.System.default + 'delete_account_confirmed',
            );
            Linking.openURL(DELETE_ACCOUNT_URL);
          },
        },
      ],
    );
  };

  return {
    token,
    isAuthenticated,
    setToken,
    logout,
    deleteAccount,
  };
};
