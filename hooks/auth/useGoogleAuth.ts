import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';

import { env } from '@/config/env';
import { useAuthWithGoogle } from '@/data/fetchers/auth.fetcher';

const setupGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    iosClientId: env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
    offlineAccess: true,
    forceCodeForRefreshToken: true,
    profileImageSize: 120,
  });
};

export const useGoogleAuth = () => {
  useEffect(() => {
    setupGoogleSignIn();
  }, []);
  const { mutate: authWithGoogle } = useAuthWithGoogle();
  const authenticate = async () => {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    const idToken = response.data?.idToken;
    if (idToken) authWithGoogle(idToken);
  };

  return {
    authenticate,
  };
};
