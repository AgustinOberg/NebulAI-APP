/* eslint-disable max-lines-per-function */
import { Link } from 'expo-router';
import { MotiView } from 'moti';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Events } from '@/analytics/events';
import AnimatedStars from '@/components/shared/animated-stars';
import Button from '@/components/ui/button';
import Text from '@/components/ui/text';
import { TERMS_URL } from '@/constants/url.constants';
import { useGoogleAuth } from '@/hooks/auth/useGoogleAuth';
import Nebu from '@/illustrations/nebu.illustration';
import SpaceWithStars from '@/illustrations/space-with-stars.illustration';
import { useLang } from '@/language/useLang';
const AuthScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { t } = useLang();
  const { authenticate, isLoading } = useGoogleAuth();
  return (
    <View style={styles.container}>
      <AnimatedStars color="white" quantity={30} />
      <View style={styles.background}>
        <SpaceWithStars width={400} height={400} />
      </View>
      <View style={styles.screen}>
        <View style={styles.illustration}>
          <MotiView
            style={styles.nebu}
            from={{ opacity: 0, scale: 0.5, translateX: 10 }}
            animate={{ opacity: 1, scale: 1, translateX: 25 }}
            transition={{ type: 'timing', duration: 1500 }}
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
            <Text size={16} weight="500" style={styles.title} translate>
              slogan
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
        <Button
          mode="gradient"
          eventName={Events.Actions.AUTH_BUTTON}
          translate
          onPress={() => authenticate()}
          loading={isLoading}
        >
          login
        </Button>
        <MotiView
          style={styles.terms}
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 1000, delay: 2000 }}
        >
          <Text size={13} align="center">
            {t('loginTerms')}
            <Link href={TERMS_URL}>
              <Text size={13} weight="700" align="center">
                {t('terms')}
              </Text>
            </Link>
          </Text>
        </MotiView>
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
    position: 'relative',
    flex: 1,
    paddingTop: 310,
  },
  planets: {
    height: 300,
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
    zIndex: 99,
    paddingHorizontal: theme.sizes.screenPadding,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  terms: {
    marginTop: 10,
    opacity: 0.6,
  },
  button: {
    width: 200,
    height: 44,
  },
}));
