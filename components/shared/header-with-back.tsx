import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Text from '../ui/text';

interface HeaderWithBackProps {
  onBack?: () => void;
  title?: string;
}

const HeaderWithBack = ({ onBack, title }: HeaderWithBackProps) => {
  const { styles } = useStyles(stylesheet);
  const goBack = () => {
    if (onBack) onBack();
    router.back();
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.iconContainer} onPress={goBack}>
        <Feather name="arrow-left" size={24} color="white" />
      </Pressable>
      <View style={styles.iconContainer}>
        <Text weight="700" size={20} align="center" translate>
          {title}
        </Text>
      </View>
      <View style={styles.iconContainer} />
    </View>
  );
};

export default HeaderWithBack;

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    paddingHorizontal: theme.sizes.screenPadding,
    paddingTop: runtime.insets.top + 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
  },
  iconContainer: {
    flex: 1,
    zIndex: 9999,
  },
  titleText: {
    fontWeight: 'bold',
  },
}));
