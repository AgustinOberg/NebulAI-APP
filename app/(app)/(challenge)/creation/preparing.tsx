import { MotiView } from 'moti';
import { FlatList, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import AstronautWaving from '@/animations/components/astronaut-waving';
import Space from '@/animations/components/space';
import Spinner from '@/components/ui/spinner';
import Text from '@/components/ui/text';
import { useAttempt } from '@/hooks/attempt/useAttempt';
import { useAutoChallengeCreation } from '@/hooks/useAutoChallengeCreation';

const LOADING_TEXTS = [
  '🚀 Encendiendo los motores...',
  '🌌Despegando hacia el conocimiento...',
  '🔭 Explorando nuevas galaxias de preguntas...',
];

const PreparingScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { startAttempt } = useAttempt();

  useAutoChallengeCreation((c) => startAttempt(c));
  return (
    <>
      <View style={styles.animationContainer}>
        <Space />
      </View>
      <View style={styles.astronaut}>
        <AstronautWaving />
      </View>
      <View style={styles.screenContainer}>
        <View>
          <Text color="secondary" size={30} weight="700" align="center">
            Preparando tu Misión
          </Text>

          <FlatList
            data={LOADING_TEXTS}
            contentContainerStyle={styles.contentContainer}
            renderItem={({ item, index }) => (
              <MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                delay={(index + 0.5) * 2500}
                style={styles.item}
              >
                <Text color="secondary" size={20} numberOfLines={2}>
                  {item}
                </Text>
              </MotiView>
            )}
          />
          <MotiView
            style={styles.spinnerContainer}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'timing',
              duration: 1000,
              delay: LOADING_TEXTS.length * 2500,
            }}
          >
            <Spinner size="small" />
            <Text color="secondary">Creando tu desafío...</Text>
          </MotiView>
        </View>
      </View>
    </>
  );
};

export default PreparingScreen;

const stylesheet = createStyleSheet((theme, runtime) => ({
  animationContainer: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: 300,
  },
  astronaut: {
    position: 'absolute',
    top: 160,
    width: '100%',
    height: 200,
    alignSelf: 'center',
  },
  screenContainer: {
    marginTop: 300 + 125,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  footer: {
    marginBottom: theme.sizes.footer + runtime.insets.bottom,
  },
  spinnerContainer: {
    position: 'absolute',
    bottom: runtime.insets.bottom + 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  contentContainer: {
    paddingHorizontal: theme.sizes.screenPadding,
    marginTop: 12,
  },
  item: {
    marginTop: 20,
  },
}));
