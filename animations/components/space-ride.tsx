import LottieView from 'lottie-react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const SpaceRide = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <LottieView
      source={require('@/animations/source/space-ride.animation')}
      autoPlay
      loop
      style={styles.animation}
      resizeMode="cover"
    />
  );
};

export default SpaceRide;

const stylesheet = createStyleSheet(() => ({
  animation: {
    width: '100%',
    height: '100%',
  },
}));
