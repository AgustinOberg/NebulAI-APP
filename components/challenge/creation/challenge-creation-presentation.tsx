import { MotiView } from 'moti';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import AstronautWaving from '@/animations/components/astronaut-waving';
import Text from '@/components/ui/text';

const ChallengeCreationPresentation = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <>
      <MotiView
        style={styles.animationContainer}
        from={{ translateX: -100 }}
        animate={{ translateX: 0 }}
        transition={{ type: 'timing', duration: 1000 }}
      >
        <AstronautWaving />
      </MotiView>
      <View style={styles.content}>
        <Text weight="700" size={30} align="center" translate>
          nebuWelcome
        </Text>
        <Text weight="300" size={17} align="center" translate>
          nebuDescription
        </Text>
      </View>
    </>
  );
};

const stylesheet = createStyleSheet(() => ({
  content: {
    gap: 5,
    marginTop: 20,
  },
  animationContainer: {
    height: 140,
    width: 140,
    alignSelf: 'center',
  },
}));

export default ChallengeCreationPresentation;
