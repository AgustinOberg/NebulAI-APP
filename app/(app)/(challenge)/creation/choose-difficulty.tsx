import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Analytics } from '@/analytics';
import { Prefix } from '@/analytics/events';
import SpaceRide from '@/animations/components/space-ride';
import Star from '@/animations/components/star';
import CloseTab from '@/components/shared/close-tab';
import Button from '@/components/ui/button';
import Text from '@/components/ui/text';
import { useChallengeState } from '@/data/state/challenge.context';

const ANIMATION_HEIGHT = 400;

const ChooseDifficulty = () => {
  const { styles } = useStyles(stylesheet);
  const { setDifficulty, difficulty, file } = useChallengeState();

  const onSelectStar = (star: number) => {
    Analytics.trackEvent(Prefix.Actions.Press + 'select_difficulty', {
      difficulty: star,
    });
    setDifficulty(star);
  };
  const goToNext = () => {
    if (!difficulty) return;
    router.push('/(app)/creation/preparing');
  };
  return (
    <>
      <CloseTab />
      <View style={styles.animationContainer}>
        <SpaceRide />
      </View>
      <View style={styles.screenContainer}>
        <View>
          <Text
            color="secondary"
            weight="700"
            size={30}
            style={styles.text}
            align="center"
          >
            ¿Qué tan difícil quieres el reto?
          </Text>
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <Pressable
              style={styles.starContainer}
              onPress={() => {
                onSelectStar(item);
              }}
            >
              <Star isSelected={difficulty >= item} />
            </Pressable>
          )}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={styles.listContent}
          horizontal
        />
        <View style={styles.footer}>
          <Text style={styles.fileName} numberOfLines={1} align="center">
            {file?.assets?.[0]?.name}
          </Text>
          <Button
            mode="gradient"
            onPress={goToNext}
            eventName="go_to_next_step"
          >
            Siguiente
          </Button>
        </View>
      </View>
    </>
  );
};

export default ChooseDifficulty;

const stylesheet = createStyleSheet((theme, runtime) => ({
  animationContainer: {
    width: '100%',
    height: ANIMATION_HEIGHT,
    aspectRatio: 1,
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  screenContainer: {
    marginTop: ANIMATION_HEIGHT + 15,
    alignItems: 'center',
    flex: 1,
    gap: 20,
    paddingHorizontal: theme.sizes.screenPadding,
  },
  text: {
    textAlign: 'center',
  },
  starContainer: {
    height: 50,
    width: 50,
  },
  listContent: {
    gap: 20,
  },
  footer: {
    width: '100%',
    marginBottom: runtime.insets.bottom + theme.sizes.footer,
  },
  fileName: {
    color: '#C000FD',
    marginBottom: 9,
  },
}));
