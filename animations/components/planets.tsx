import LottieView from 'lottie-react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface Props {
  style?: any;
}
const Planets = ({ style }: Props) => {
  const { styles } = useStyles(stylesheet);
  return (
    <>
      <LottieView
        source={require('@/animations/source/planets.animation.json')}
        autoPlay
        loop
        style={[styles.animation, style]}
      />
    </>
  );
};

export default Planets;

const stylesheet = createStyleSheet(() => ({
  animation: {
    width: '100%',
    height: '100%',
    transform: [{ scale: 1.5 }],
  },
}));
