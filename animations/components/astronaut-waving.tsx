import LottieView from 'lottie-react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const AstronautWaving = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <>
      <LottieView
        source={require('@/animations/source/astronaut-waving.animation.json')}
        autoPlay
        loop
        style={styles.animation}
      />
    </>
  );
};

export default AstronautWaving;

const stylesheet = createStyleSheet(() => ({
  animation: {
    width: '100%',
    height: '100%',
    transform: [{ scale: 1.9 }],
  },
}));
