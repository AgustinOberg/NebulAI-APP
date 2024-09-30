import { createStyleSheet, useStyles } from 'react-native-unistyles';

import BgIllustration from '@/illustrations/bg.illustration';

const ScreenBackground = () => {
  const { styles } = useStyles(stylesheet);
  return <BgIllustration style={styles.container} />;
};

export default ScreenBackground;

const stylesheet = createStyleSheet((_, runtime) => ({
  container: {
    position: 'absolute',
    top: 0,
    height: runtime.screen.height,
    width: runtime.screen.width * 1.2,
  },
}));
