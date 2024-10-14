import type { ViewStyle } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface Props {
  style?: ViewStyle;
  size?: 'small' | 'large';
}
const Spinner = ({ style, size = 'large' }: Props) => {
  const { theme } = useStyles(stylesheet);
  return (
    <ActivityIndicator
      size={size}
      color={theme.colors.button.primaryBg}
      style={style}
    />
  );
};

export default Spinner;

const stylesheet = createStyleSheet(() => ({}));
