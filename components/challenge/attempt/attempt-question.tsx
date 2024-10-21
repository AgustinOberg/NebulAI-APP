import { Alert } from 'react-native';
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
  const showFullText = () => {
    Alert.alert('Opción', option.description, [
      {
        text: 'OK',
        style: 'default',
      },
    ]);
  };
  return (
    <>
      <Button
        textProps={{ numberOfLines: 2, style: styles.text, align: 'center' }}
        onLongPress={showFullText}
        variant={type}
        eventName="attempt_question"
        eventProperties={option}
        style={styles.button}
        onPress={onPress}
      >
        {option.description}
      </Button>
    </>
  );
};

export default AttemptQuestion;

const stylesheet = createStyleSheet(() => ({
  text: {
    paddingHorizontal: 12,
    width: 'auto',
  },
  button: {
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
}));
