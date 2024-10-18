import { router } from 'expo-router';
import { MotiView } from 'moti';
import React from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import AstronautWaving from '@/animations/components/astronaut-waving';
import ChallengeHeader from '@/components/challenge/header';
import ScreenBackground from '@/components/shared/screen-background';
import Button from '@/components/ui/button';
import Text from '@/components/ui/text';
import { useProcessFile } from '@/hooks/useProcessFile';

const TestScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { selectFile } = useProcessFile();

  const handleSelect = async () => {
    await selectFile();
    router.push('/(app)/(challenge)/creation/choose-difficulty');
  };
  return (
    <>
      <ScreenBackground />
      <ChallengeHeader />
      <View style={styles.screenContainer}>
        <View>
          <MotiView
            style={styles.animationContainer}
            from={{
              translateX: -100,
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
              type: 'timing',
              duration: 1000,
            }}
          >
            <AstronautWaving />
          </MotiView>
          <View style={styles.content}>
            <Text weight="700" size={30} align="center">
              ¡Hola, soy Nebu!
            </Text>
            <Text weight="300" size={17} align="center">
              Estoy aquí para ayudarte a transformar tus archivos en preguntas
              divertidas de opción múltiple.
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <MotiView
            from={{
              scale: 0.97,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              type: 'timing',
              duration: 1000,
              loop: true,
            }}
          >
            <Button mode="gradient" onPress={handleSelect}>
              Elegir Archivo
            </Button>
          </MotiView>
          <Text align="center" size={13} color="disabled">
            *Solo se aceptan archivos con extensión .pdf
          </Text>
        </View>
      </View>
    </>
  );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
  screenContainer: {
    paddingTop: runtime.insets.top + 100,
    paddingHorizontal: theme.sizes.screenPadding,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    gap: 5,
    marginTop: 20,
  },
  animationContainer: {
    height: 140,
    width: 140,
    alignSelf: 'center',
  },

  footer: {
    width: '100%',
    marginBottom: runtime.insets.bottom + theme.sizes.footer,
    gap: 10,
  },
}));

export default TestScreen;
