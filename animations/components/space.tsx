import LottieView from 'lottie-react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Space = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <LottieView
      source={require('@/animations/source/space.animation.json')}
      autoPlay
      loop
      style={styles.animation}
      resizeMode="cover"
    />
  );
};

export default Space;

const stylesheet = createStyleSheet(() => ({
  animation: {
    width: '100%',
    height: '100%',
  },
}));
