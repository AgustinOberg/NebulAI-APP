import { MotiView } from 'moti';
import React, { useMemo } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import RocketLaunch from '@/animations/components/rocket-launch';

interface Props {
  step?: number;
  total?: number;
}
const AttemptHeader = ({ step = 0, total = 7 }: Props) => {
  const { styles, theme } = useStyles(stylesheet);

  const totalWidth =
    Dimensions.get('window').width - theme.sizes.screenPadding * 2;
  const stepWidth = 15;
  const spacing = (totalWidth - stepWidth * total) / (total - 1);
  const indicatorLeft =
    theme.sizes.screenPadding + step * (stepWidth + spacing);
  const trailWidth = step * (stepWidth + spacing);
  const data = useMemo(
    () => Array.from({ length: total }, (_, i) => i),
    [total],
  );

  return (
    <View style={styles.container}>
      <MotiView
        style={[styles.trail, { left: theme.sizes.screenPadding }]}
        animate={{ width: trailWidth }}
        transition={{ type: 'timing', duration: 500 }}
      />
      <FlatList
        data={data}
        horizontal
        contentContainerStyle={styles.contentContainer}
        renderItem={() => <View style={styles.step} />}
        keyExtractor={(item) => item.toString()}
      />
      <MotiView
        style={[styles.indicator]}
        animate={{ left: indicatorLeft }}
        transition={{ type: 'timing', duration: 500 }}
      >
        <View style={styles.rocketLaunch}>
          <RocketLaunch />
        </View>
      </MotiView>
    </View>
  );
};

export default AttemptHeader;

const stylesheet = createStyleSheet((theme) => {
  const stepWidth = 15;
  const stepHeight = 15;
  const trailHeight = 5;

  return {
    contentContainer: {
      justifyContent: 'space-between',
      width: '100%',
    },
    container: {
      width: '100%',
      paddingHorizontal: theme.sizes.screenPadding,
      position: 'relative',
    },
    step: {
      height: stepHeight,
      width: stepWidth,
      backgroundColor: '#ED5500',
      borderRadius: 100,
    },
    rocketLaunch: {
      transform: [
        {
          scale: 2,
        },
      ],
    },
    indicator: {
      position: 'absolute',
      top: 0,
      height: stepHeight,
      width: stepWidth,
      borderRadius: 100,
      transform: [
        {
          rotate: '90deg',
        },
      ],
    },
    trail: {
      position: 'absolute',
      top: (stepHeight - trailHeight) / 2,
      height: trailHeight,
      backgroundColor: '#F8B81C',
    },
  };
});
