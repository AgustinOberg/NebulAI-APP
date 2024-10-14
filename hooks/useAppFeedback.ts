import { router } from 'expo-router';
import * as StoreReview from 'expo-store-review';
import { Linking, Platform } from 'react-native';

export const useAppFeedback = () => {
  const requestReview = () => {
    StoreReview.requestReview();
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
