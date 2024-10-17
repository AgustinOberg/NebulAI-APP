import type { StyleProp, ViewStyle } from 'react-native';
import { FlatList, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Text from '@/components/ui/text';
import type { AttemptMode } from '@/data/state/attempt.store';
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

const getAttemptType = (
  mode: AttemptMode,
  isChosen: boolean,
  isCorrect: boolean,
) => {
  if (mode === 'view') {
    if (isCorrect) return 'success';
  }
  if (isChosen) return 'primary';
  return 'secondary';
};

const AttemptSlide = ({ style, currentQuestion }: Props) => {
  const { styles } = useStyles(stylesheet);
  const { answers, completeQuestion, mode } = useAttempt();

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
          const isCorrect = item.isCorrect;

          return (
            <AttemptQuestion
              option={item}
              delay={index * 1000}
              onPress={() => {
                if (mode === 'view') return;
                completeQuestion(currentQuestion._id, item._id);
              }}
              type={getAttemptType(mode, isChosen, isCorrect)}
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
