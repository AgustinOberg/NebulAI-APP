import { MotiView, View } from 'moti';
import React from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import AstronautWaving from '@/animations/components/astronaut-waving';
import { useExpoUpdates } from '@/config/expo-updates.config';
import useFakeProgress from '@/hooks/useFakeProgress';
import { hex2rgba } from '@/utils/ui.utils';

import Button from '../ui/button';
import ProgressBar from '../ui/progress-bar';
import Text from '../ui/text';

const UpdateAlert = () => {
  const { styles } = useStyles(stylesheet);
  const { updatesAvailables, applyUpdate } = useExpoUpdates();
  const { progress, isFinished } = useFakeProgress(
    2000,
    2000,
    !!updatesAvailables,
  );
  if (!updatesAvailables) return;
  return (
    <Animated.View style={styles.container} entering={FadeIn.duration(2000)}>
      <MotiView
        style={styles.animationContainer}
        from={{
          translateX: -200,
          opacity: 0,
        }}
        animate={{
          translateX: 0,
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 1000,
          delay: 1000,
        }}
      >
        <AstronautWaving />
      </MotiView>
      <MotiView
        from={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'timing', duration: 1000, delay: 1000 }}
      >
        <View>
          <Text weight="800" align="center" size={35} translate>
            update.title
          </Text>
          <Text align="center" translate>
            update.description
          </Text>
        </View>
        <View style={styles.progress}>
          <ProgressBar progress={progress} />
          {isFinished && (
            <Animated.View entering={FadeIn}>
              <Button onPress={applyUpdate} translate>
                update.cta
              </Button>
            </Animated.View>
          )}
        </View>
      </MotiView>
    </Animated.View>
  );
};

export default UpdateAlert;

const stylesheet = createStyleSheet(() => ({
  container: {
    backgroundColor: hex2rgba('#000000', 0.9),
    position: 'absolute',
    zIndex: 9999,
    height: '100%',
    width: '100%',
  },
  animationContainer: {
    height: 140,
    width: 140,
    alignSelf: 'center',
    marginTop: '50%',
  },
  progress: {
    paddingHorizontal: 24,
  },
}));
