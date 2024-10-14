import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { useChallengeList } from '@/data/fetchers/challenge.fetcher';
import { useAttempt } from '@/hooks/attempt/useAttempt';
import type { MinChallenge } from '@/types/challenge';

import ChallengeListEmpty from './challenge-list.empty';
import ChallengeListHeader from './challenge-list.header';
import ChallengeListItem from './challenge-list.item';
import ChallengeListSeparator from './challenge-list.separator';

const ChallengeList = () => {
  const { styles } = useStyles(stylesheet);
  const { data, isLoading } = useChallengeList();
  const {
    attemptById: { isPending, startAttemptById, variables },
  } = useAttempt();
  const renderItem = useCallback(
    ({ item }: { item: MinChallenge }) => {
      const startAttempt = () => {
        if (!isPending) startAttemptById(item._id);
      };
      return (
        <ChallengeListItem
          item={item}
          startAttempt={startAttempt}
          isLoading={isPending && variables === item._id}
        />
      );
    },
    [isPending, variables, startAttemptById],
  );

  const header = useCallback(() => <ChallengeListHeader />, []);

  const separator = useCallback(() => <ChallengeListSeparator />, []);

  const empty = useCallback(
    () => <ChallengeListEmpty isLoading={isLoading} />,
    [isLoading],
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={header}
        data={data?.data}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={separator}
        ListEmptyComponent={empty}
      />
    </View>
  );
};

export default ChallengeList;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: '#191E47',
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    paddingTop: 35,
    paddingHorizontal: theme.sizes.screenPadding,
  },

  contentContainer: {
    paddingBottom: 70,
    flexGrow: 1,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
