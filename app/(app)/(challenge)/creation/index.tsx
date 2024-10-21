import { router } from 'expo-router';
import { MotiView } from 'moti';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import ChallengeCreationPresentation from '@/components/challenge/creation/challenge-creation-presentation';
import ChallengeHeader from '@/components/challenge/header';
import ScreenBackground from '@/components/shared/screen-background';
import Button from '@/components/ui/button';
import Text from '@/components/ui/text';
import { useChallengeState } from '@/data/state/challenge.context';
import { useProcessFile } from '@/hooks/useProcessFile';

const AttemptCreationScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { selectFile } = useProcessFile();
  const { setDifficulty } = useChallengeState();

  const handleSelect = useCallback(async () => {
    await selectFile();
    setDifficulty(0);
    router.replace('/(app)/(challenge)/creation/choose-difficulty');
  }, [selectFile, setDifficulty]);

  return (
    <>
      <ScreenBackground />
      <ChallengeHeader />
      <View style={styles.screenContainer}>
        <View>
          <ChallengeCreationPresentation />
        </View>
        <View style={styles.footer}>
          <MotiView
            from={{ scale: 0.97 }}
            animate={{ scale: 1 }}
            transition={{ type: 'timing', duration: 1000, loop: true }}
          >
            <Button
              mode="gradient"
              onPress={handleSelect}
              eventName="attempt_creation_select_file"
            >
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
  footer: {
    width: '100%',
    marginBottom: runtime.insets.bottom + theme.sizes.footer,
    gap: 10,
  },
}));

export default AttemptCreationScreen;
