import LottieView from 'lottie-react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const RocketLaunch = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <>
      <LottieView
        source={require('@/animations/source/rocket-launch.animation.json')}
        autoPlay
        loop
        style={styles.animation}
      />
    </>
  );
};

export default RocketLaunch;

const stylesheet = createStyleSheet(() => ({
  animation: {
    width: '100%',
    height: '100%',
    transform: [{ scale: 1.9 }],
  },
}));
