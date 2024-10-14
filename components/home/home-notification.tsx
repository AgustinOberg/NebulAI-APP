import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { hex2rgba } from '@/utils/ui.utils';

const HomeNotification = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.unscaleContainer}>
      <Feather name="bell" size={18} color="white" />
    </View>
  );
};

export default HomeNotification;

const stylesheet = createStyleSheet(() => ({
  unscaleContainer: {
    backgroundColor: hex2rgba('#191E47', 0.7),
    borderRadius: 10,
    padding: 10,
    height: 40,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
