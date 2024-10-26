import { Image, Platform, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { useUserProfile } from '@/data/fetchers/auth.fetcher';

import Text from '../ui/text';

const HomeHeader = () => {
  const { styles } = useStyles(stylesheet);

  const { data: profile } = useUserProfile();
  return (
    <View style={styles.header}>
      <View style={styles.userContainer}>
        <Image
          source={{ uri: profile?.picture }}
          style={styles.unscaledPicture}
        />
        <View>
          <Text size={13} translate>
            welcomeBack
          </Text>
          <Text size={25} weight="800">
            {profile?.name}
          </Text>
        </View>
      </View>
      {/* <HomeNotification /> */}
    </View>
  );
};

export default HomeHeader;

const stylesheet = createStyleSheet((theme, runtime) => ({
  header: {
    marginTop: runtime.insets.top + (Platform.OS === 'android' ? 35 : 20),
    paddingHorizontal: theme.sizes.screenPadding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  unscaledPicture: {
    height: 50,
    aspectRatio: 1,
    borderRadius: 25,
  },
}));
