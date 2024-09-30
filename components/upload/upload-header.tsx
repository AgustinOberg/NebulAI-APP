import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Text from '../ui/text';

const UploadHeader = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text weight={800} style={styles.title}>
        Añade archivo
      </Text>
    </View>
  );
};

export default UploadHeader;

const stylesheet = createStyleSheet(() => ({
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  container: {
    marginBottom: 15,
  },
}));
