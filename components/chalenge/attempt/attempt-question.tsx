import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import type { ButtonVariant } from '@/components/ui/button';
import Button from '@/components/ui/button';
import type { Option } from '@/types/challenge';

interface Props {
  delay?: number;
  type?: ButtonVariant;
  option: Option;
  onPress: () => void;
}

const AttemptQuestion = ({ onPress, option, type }: Props) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View
    // from={{
    //   opacity: 0,
    //   translateY: -20,
    // }}
    // animate={{
    //   opacity: 1,
    //   translateY: 0,
    // }}
    // delay={delay}
    >
      <Button
        textProps={{ numberOfLines: 2, style: styles.text }}
        variant={type}
        style={styles.button}
        onPress={onPress}
      >
        {option.description}
      </Button>
    </View>
  );
};

export default AttemptQuestion;

const stylesheet = createStyleSheet(() => ({
  text: {
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  button: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
