import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Text from '@/components/ui/text';

const ChallengeListHeader = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.header}>
      <Text weight="700" size={20} translate>
        myChallenges
      </Text>
    </View>
  );
};

export default ChallengeListHeader;

const stylesheet = createStyleSheet(() => ({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
}));
