import React from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import HomeHeader from '@/components/home/home-header';
import HomeInfo from '@/components/home/home-info';
import ChallengeList from '@/components/shared/challenge-list/challenge-list';

const HomeScreen = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <>
      <View style={styles.container}>
        {/* <AnimatedStars /> */}
        <HomeHeader />
        <HomeInfo />
        <ChallengeList />
      </View>
    </>
  );
};

export default HomeScreen;

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 1,
    backgroundColor: '#2A3164',
  },
  header: {
    marginTop: runtime.statusBar.height + 20,
    paddingHorizontal: theme.sizes.screenPadding,
  },
}));
