import { router } from 'expo-router';
import * as StoreReview from 'expo-store-review';
import { Linking, Platform } from 'react-native';

const androidPackageName = 'com.agustinoberg.nebulai';

const openPlaystoreReview = () =>
  Linking.openURL(
    `https://play.google.com/store/apps/details?id=${androidPackageName}&showAllReviews=true`,
  );

export const useAppFeedback = () => {
  const requestReview = () => {
    if (Platform.OS === 'ios') {
      return StoreReview.requestReview();
    }
    if (Platform.OS === 'android') {
      return openPlaystoreReview();
    }
  };

  const sendComments = () => {
    Linking.openURL(
      `mailto:agustin.oberg@gmail.com?subject=Feedback-Nebulai-${Platform.OS}`,
    );
  };

  const goToAbout = () => {
    router.push('/about');
  };

  return {
    requestReview,
    sendComments,
    goToAbout,
  };
};
