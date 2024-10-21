import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
interface Props {
  onPress?: () => void;
}
const CloseTab = ({ onPress }: Props) => {
  const { styles } = useStyles(stylesheet);
  const goBack = () => router.back();
  return (
    <View style={styles.header}>
      <Feather
        name="x"
        style={styles.x}
        size={24}
        onPress={onPress ?? goBack}
      />
    </View>
  );
};

export default CloseTab;

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
