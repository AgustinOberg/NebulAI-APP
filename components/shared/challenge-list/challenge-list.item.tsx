import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Spinner from '@/components/ui/spinner';
import Text from '@/components/ui/text';
import type { MinChallenge } from '@/types/challenge';
import { formatDate } from '@/utils/date.utils';
interface Props {
  startAttempt: () => void;
  item: MinChallenge;
  isLoading?: boolean;
}
const ChallengeListItem = ({ item, startAttempt, isLoading }: Props) => {
  const { styles } = useStyles(stylesheet);
  return (
    <Pressable style={styles.cardContainer} onPress={startAttempt}>
      <View>
        <Text size={17} weight="700" numberOfLines={1}>
          {item.title}
        </Text>
        <Text size={13} weight="300">
          {`${item.difficulty} ⭐️ - ${formatDate(item.createdAt)}`}
        </Text>
      </View>
      <View style={styles.cardActions}>
        {isLoading ? (
          <Spinner size="small" />
        ) : (
          <Feather name="chevron-right" size={20} color={'white'} />
        )}
      </View>
    </Pressable>
  );
};

export default ChallengeListItem;

const stylesheet = createStyleSheet((theme) => ({
  cardContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.sizes.screenPadding,
  },

  cardActions: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));
