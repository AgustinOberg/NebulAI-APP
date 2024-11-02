import { BottomSheetView } from '@gorhom/bottom-sheet';
import { format } from 'date-fns';
import React from 'react';
import { Platform, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Button from '@/components/ui/button';
import Spinner from '@/components/ui/spinner';
import Text from '@/components/ui/text';
import { useGetChallengeById } from '@/data/fetchers/challenge.fetcher';
import { useAttempt } from '@/hooks/attempt/useAttempt';

import ChallengeStar from './challenge-star';

interface Props {
  challengeId: string;
  viewAttempts: () => void;
}

const ChallengeInfo = ({ challengeId, viewAttempts }: Props) => {
  const { styles } = useStyles(stylesheet);
  const { data, isLoading } = useGetChallengeById({ id: challengeId });
  const { startAttempt } = useAttempt();
  const tryAgain = () => {
    if (data) startAttempt(data);
  };

  if (isLoading || !data) {
    return (
      <BottomSheetView style={styles.container}>
        <View style={styles.spinnerContainer}>
          <Spinner />
        </View>
      </BottomSheetView>
    );
  }

  return (
    <BottomSheetView style={styles.container}>
      <ChallengeStar rating={data.difficulty} />
      <Text
        align="center"
        size={23}
        weight="800"
        style={styles.title}
        color="primary"
        numberOfLines={1}
      >
        {data.title}
      </Text>
      <Text
        align="center"
        size={12}
        color="primary"
        style={styles.date}
        numberOfLines={3}
      >
        {format(new Date(data.createdAt), 'dd/MM/yyyy')}
      </Text>
      <View style={styles.content}>
        <Text>{data.description}</Text>
      </View>
      <View style={styles.footer}>
        <Button mode="gradient" onPress={tryAgain}>
          Realizar nuevamente
        </Button>
        <Button variant="text" onPress={viewAttempts}>
          Ver intentos
        </Button>
      </View>
    </BottomSheetView>
  );
};

export default ChallengeInfo;

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    paddingTop: 10,
    paddingBottom: 30,
    flex: 1,
    paddingHorizontal: theme.sizes.screenPadding,
  },
  title: {
    marginVertical: 5,
  },
  date: {
    opacity: 0.7,
    textAlign: 'center',
  },
  content: {
    marginVertical: 20,
    flexGrow: 1,
  },
  footer: {
    gap: 10,
    marginBottom: Platform.OS === 'android' ? runtime.insets.bottom + 5 : 0,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
