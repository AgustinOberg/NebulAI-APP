import React, { useCallback } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Modal } from '@/components/ui/modal';
import { useChallengeList } from '@/data/fetchers/challenge.fetcher';
import { useAttempt } from '@/hooks/attempt/useAttempt';
import { useChallengeModal } from '@/hooks/challenge/useChallengeModal';
import type { MinChallenge } from '@/types/challenge';

import ChallengeAttempts from './challenge-attempts';
import ChallengeInfo from './challenge-info';
import ChallengeListEmpty from './challenge-list.empty';
import ChallengeListHeader from './challenge-list.header';
import ChallengeListItem from './challenge-list.item';
import ChallengeListSeparator from './challenge-list.separator';

const SNAP_POINTS = ['60%'];
const ChallengeList = () => {
  const { styles } = useStyles(stylesheet);
  const { data, isLoading } = useChallengeList();
  const {
    attemptById: { isPending, variables },
  } = useAttempt();

  const { dismiss, present, ref, selectedId, setMode, mode } =
    useChallengeModal();

  const renderItem = useCallback(
    ({ item }: { item: MinChallenge }) => {
      return (
        <ChallengeListItem
          item={item}
          startAttempt={() => present(item._id)}
          isLoading={isPending && variables === item._id}
        />
      );
    },
    [present, isPending, variables],
  );

  const header = useCallback(() => <ChallengeListHeader />, []);

  const separator = useCallback(() => <ChallengeListSeparator />, []);

  const empty = useCallback(
    () => <ChallengeListEmpty isLoading={isLoading} />,
    [isLoading],
  );

  return (
    <View style={styles.container}>
      <Modal
        ref={ref}
        onDismiss={dismiss}
        snapPoints={SNAP_POINTS}
        maxDynamicContentSize={Dimensions.get('window').height * 0.6}
      >
        {mode === 'challenge' ? (
          <ChallengeInfo
            challengeId={selectedId}
            viewAttempts={() => setMode('attempt')}
          />
        ) : (
          <ChallengeAttempts
            challengeId={selectedId}
            goBack={() => setMode('challenge')}
          />
        )}
      </Modal>
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
