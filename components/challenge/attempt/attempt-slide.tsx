import type { StyleProp, ViewStyle } from 'react-native';
import { FlatList, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Text from '@/components/ui/text';
import { useAttempt } from '@/hooks/attempt/useAttempt';
import type { Question } from '@/types/challenge';

import AttemptQuestion from './attempt-question';

interface Props {
  style?: StyleProp<ViewStyle>;
  currentQuestion: Question;
}

const Separator = () => {
  const { styles } = useStyles(separatorsheet);
  return <View style={styles.separator} />;
};

const AttemptSlide = ({ style, currentQuestion }: Props) => {
  const { styles } = useStyles(stylesheet);
  const { answers, completeQuestion } = useAttempt();

  return (
    <View style={[styles.container, style]}>
      <View style={styles.question}>
        <Text size={23} style={styles.title} numberOfLines={8}>
          {currentQuestion.question}
        </Text>
      </View>
      <FlatList
        scrollEnabled={false}
        data={currentQuestion.options}
        ItemSeparatorComponent={Separator}
        renderItem={({ item, index }) => {
          const isChosen = answers[currentQuestion._id] === item._id;
          return (
            <AttemptQuestion
              option={item}
              delay={index * 1000}
              onPress={() => {
                completeQuestion(currentQuestion._id, item._id);
              }}
              type={isChosen ? 'primary' : 'secondary'}
            />
          );
        }}
      />
    </View>
  );
};

export default AttemptSlide;

const separatorsheet = createStyleSheet(() => ({
  separator: {
    height: 20,
  },
}));
const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flexGrow: 1,
  },
  question: {
    minHeight: '25%',
    maxHeight: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
  },
  title: {
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    marginBottom: runtime.insets.bottom + theme.sizes.footer,
  },
}));
