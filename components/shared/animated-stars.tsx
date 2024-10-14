/* eslint-disable react-native/no-inline-styles */
import { MotiView } from 'moti';
import { View } from 'react-native';
import {
  createStyleSheet,
  UnistylesRuntime,
  useStyles,
} from 'react-native-unistyles';
interface Props {
  quantity?: number;
  color?: string;
}
const AnimatedStars = ({ quantity = 10, color = '#FFDD2D' }: Props) => {
  const { height, width } = UnistylesRuntime.screen;
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      {[...Array(quantity)].map((_, i) => (
        <MotiView
          key={i}
          from={{
            opacity: 0,
            rotate: '0deg',
            scale: 0.8,
            translateY: 0,
          }}
          animate={{
            opacity: 1,
            rotate: '360deg',
            scale: 1,
            translateY: 0,
          }}
          transition={{
            type: 'timing',
            duration: 500,
            delay: i * 100,
            loop: true,
          }}
          style={{
            position: 'absolute',
            top: Math.random() * height,
            left: Math.random() * width,
            backgroundColor: color,
            width: Math.random() * 5 + 1,
            aspectRatio: 1,
            borderRadius: 10,
          }}
        />
      ))}
    </View>
  );
};

export default AnimatedStars;

const stylesheet = createStyleSheet(() => ({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 9,
  },
}));
