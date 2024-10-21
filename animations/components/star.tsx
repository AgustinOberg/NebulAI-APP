import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface Props {
  isSelected?: boolean;
  withAnimation?: boolean;
}
const Star = ({ isSelected, withAnimation }: Props) => {
  const { styles } = useStyles(stylesheet);
  const lottieRef = useRef<LottieView>(null);

  useEffect(() => {
    lottieRef?.current?.reset();
    if (isSelected) {
      lottieRef?.current?.play(10, 32);
    } else {
      lottieRef?.current?.pause();
    }
  }, [isSelected, withAnimation]);

  return (
    <LottieView
      ref={lottieRef}
      source={require('@/animations/source/star.animation.json')}
      autoPlay={false}
      loop={false}
      style={styles.animation}
    />
  );
};

export default Star;

const stylesheet = createStyleSheet(() => ({
  animation: {
    height: '100%',
    width: '100%',
  },
}));
