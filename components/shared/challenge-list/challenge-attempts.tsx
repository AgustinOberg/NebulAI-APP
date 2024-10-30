import { Feather } from '@expo/vector-icons';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { format } from 'date-fns';
import { useCallback } from 'react';
import { Platform, Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Button from '@/components/ui/button';
import Text from '@/components/ui/text';
import { useAttemptByChallengeId } from '@/data/fetchers/attempt.fetcher';
import { useGetChallengeById } from '@/data/fetchers/challenge.fetcher';
import { useAttempt } from '@/hooks/attempt/useAttempt';
import { hex2rgba } from '@/utils/ui.utils';

interface Props {
  challengeId: string;
  goBack: () => void;
}
const ChallengeAttempts = ({ goBack, challengeId }: Props) => {
  const { styles } = useStyles(stylesheet);
  const { data: challenge } = useGetChallengeById({ id: challengeId });
  const { seeResults } = useAttempt();
  const { data: attempts } = useAttemptByChallengeId({
    challengeId: challengeId,
  });

  const header = useCallback(() => {
    return (
      <View>
        <Text
          align="center"
          size={23}
          weight="800"
          color="primary"
          numberOfLines={1}
        >
          {challenge?.title}
        </Text>
      </View>
    );
  }, [challenge?.title]);

  const footer = useCallback(() => {
    return (
      <Button variant="text" onPress={goBack}>
        Volver
      </Button>
    );
  }, [goBack]);
  return (
    <BottomSheetFlatList
      style={styles.container}
      data={attempts}
      keyExtractor={(item) => item._id}
      ListHeaderComponent={header}
      contentContainerStyle={styles.content}
      ListFooterComponent={footer}
      renderItem={({ item }) => (
        <Pressable
          style={styles.item}
          onPress={() => seeResults(challenge, item.answers)}
        >
          <View>
            <Text weight="800" size={19}>
              {`${item.score}%`}
            </Text>
            <Text size={14}>
              {format(new Date(item.createdAt), 'dd/MM/yyyy')}
            </Text>
          </View>
          <Feather name="chevron-right" size={24} color="#FFFFFF" />
        </Pressable>
      )}
    />
  );
};

export default ChallengeAttempts;

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 1,
    paddingHorizontal: theme.sizes.screenPadding,
  },
  content: {
    paddingBottom: Platform.OS === 'android' ? runtime.insets.bottom + 20 : 30,
  },

  item: {
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: hex2rgba('#FFFFFF', 0.2),
    alignItems: 'center',
  },
  back: {
    position: 'absolute',
    left: 20,
    top: 0,
  },
}));
