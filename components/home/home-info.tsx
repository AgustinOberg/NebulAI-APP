import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { useUserProfile } from '@/data/fetchers/auth.fetcher';

import Text from '../ui/text';

const HomeInfo = () => {
  const { styles } = useStyles(stylesheet);
  const { data: profile } = useUserProfile();
  return (
    <View style={styles.container}>
      <Text size={18} weight="900">
        {profile?.challengesMade}{' '}
        <Text size={18} translate>
          challengesMade
        </Text>
      </Text>
    </View>
  );
};

export default HomeInfo;

const stylesheet = createStyleSheet(() => ({
  container: {
    width: '100%',
    marginVertical: 25,
    alignItems: 'center',
  },
}));
