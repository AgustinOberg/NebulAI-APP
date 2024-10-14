import { Image, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { useUserProfile } from '@/data/fetchers/auth.fetcher';

import Text from '../ui/text';

const ProfileHeader = () => {
  const { styles } = useStyles(stylesheet);
  const { data: profile } = useUserProfile();
  return (
    <View>
      <View style={styles.header}>
        <Image
          source={{ uri: profile?.picture }}
          style={styles.unscaledPicture}
        />
      </View>
      <Text size={30} weight="800" style={styles.name}>
        {profile?.name}
      </Text>
    </View>
  );
};

export default ProfileHeader;

const stylesheet = createStyleSheet((theme, runtime) => ({
  unscaledPicture: {
    height: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    paddingTop: runtime.insets.top + 20,
    marginBottom: 20,
  },
  name: {
    alignSelf: 'center',
  },
}));
