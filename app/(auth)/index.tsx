import { MotiView } from 'moti';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Planets from '@/animations/components/planets';
import AnimatedStars from '@/components/shared/animated-stars';
import Button from '@/components/ui/button';
import Text from '@/components/ui/text';
import { useGoogleAuth } from '@/hooks/auth/useGoogleAuth';
import Nebu from '@/illustrations/nebu.illustration';
const AuthScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { authenticate } = useGoogleAuth();

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <AnimatedStars color="white" />
        <View style={styles.planets}>
          <Planets />
        </View>
        <View style={styles.illustration}>
          <MotiView
            style={styles.nebu}
            from={{ opacity: 0, scale: 0.5, translateX: 10 }}
            animate={{ opacity: 1, scale: 1, translateX: 25 }}
            transition={{ type: 'timing', duration: 1000 }}
          >
            <Nebu height={'100%'} width={'100%'} />
          </MotiView>
          <MotiView
            from={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 1000, delay: 1000 }}
          >
            <Text size={42} weight="700" style={styles.title}>
              Nebulai
            </Text>
          </MotiView>
          <MotiView
            from={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 1000, delay: 1500 }}
          >
            <Text size={16} weight="500" style={styles.title}>
              Conquista el conocimiento
            </Text>
          </MotiView>
        </View>
      </View>
      <MotiView
        style={styles.footer}
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 1000, delay: 1750 }}
      >
        <Button mode="gradient" onPress={authenticate}>
          Iniciar sesión
        </Button>
      </MotiView>
    </View>
  );
};

export default AuthScreen;

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#2A1B5F',
    paddingBottom: runtime.insets.bottom + 20,
  },
  screen: {
    flex: 1,
  },
  planets: {
    height: 300,
  },
  gradient: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 99,
    top: 200,
  },
  titleContainer: {
    alignSelf: 'center',
  },
  nebu: {
    width: 160,
    height: 160,
    position: 'absolute',
    alignSelf: 'center',
    top: -100,
    transform: [{ translateX: 25 }],
  },
  illustration: {
    paddingTop: 80,
  },
  title: {
    alignSelf: 'center',
  },
  footer: {
    paddingHorizontal: theme.sizes.screenPadding,
  },
}));
