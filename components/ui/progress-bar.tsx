import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Text from './text';

interface Props {
  progress: number;
}
const ProgressBar = ({ progress }: Props) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.progressBarBackground}>
        <View
          style={[
            styles.progressBar,
            {
              width: `${progress * 100}%`,
            },
          ]}
        />
      </View>
      <Text weight="800" align="right" style={styles.label}>
        {Math.round(progress * 100)}%
      </Text>
    </View>
  );
};

export default ProgressBar;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    marginVertical: 16,
    gap: 5,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.button.primaryBg,
  },
  progressBarBackground: {
    width: '100%',
    height: 10,
    backgroundColor: theme.colors.button.secondaryBg,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.colors.button.primaryBg,
  },
}));
