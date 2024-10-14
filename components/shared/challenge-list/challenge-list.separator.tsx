import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const ChallengeListSeparator = () => {
  const { styles } = useStyles(stylesheet);
  return <View style={styles.separator} />;
};

export default ChallengeListSeparator;

const stylesheet = createStyleSheet(() => ({
  separator: {
    height: 10,
  },
}));
