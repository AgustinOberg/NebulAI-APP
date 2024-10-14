import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { useUserProfile } from '@/data/fetchers/auth.fetcher';

import UserContextMenu from '../user/user-context-menu';

const ChallengeHeader = () => {
  const { styles } = useStyles(stylesheet);
  const { data: user } = useUserProfile();
  const goBack = () => {
    router.back();
  };
  return (
    <View style={styles.header}>
      {user?.attemptsMade! > 0 ? (
        <Feather name="x" style={styles.x} size={24} onPress={goBack} />
      ) : (
        <UserContextMenu />
      )}
    </View>
  );
};

export default ChallengeHeader;

const stylesheet = createStyleSheet((theme, runtime) => ({
  header: {
    position: 'absolute',
    right: theme.sizes.screenPadding,
    top: runtime.insets.top + 15,
    zIndex: 99,
  },
  x: {
    color: theme.colors.primaryText,
  },
}));
