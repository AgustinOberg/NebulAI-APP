import { router } from 'expo-router';
import { MotiView } from 'moti';
import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import ChallengeCreationPresentation from '@/components/challenge/creation/challenge-creation-presentation';
import ChallengeHeader from '@/components/challenge/header';
import ScreenBackground from '@/components/shared/screen-background';
import Button from '@/components/ui/button';
import Text from '@/components/ui/text';
import { useAvailableFileTypes } from '@/data/fetchers/config.fetcher';
import { useChallengeState } from '@/data/state/challenge.context';
import { useProcessFile } from '@/hooks/useProcessFile';
import { useLang } from '@/language/useLang';

const AttemptCreationScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { selectFile } = useProcessFile();
  const { setDifficulty } = useChallengeState();
  const { t } = useLang();
  const { data: availableFileTypes } = useAvailableFileTypes();
  const fileTypeLabel = useMemo(
    () =>
      availableFileTypes
        ?.map((e) => e.label)
        ?.join(', ')
        ?.toUpperCase(),
    [availableFileTypes],
  );
  const handleSelect = useCallback(async () => {
    try {
      await selectFile();
      setDifficulty(0);
      router.replace('/(app)/(challenge)/creation/choose-difficulty');
    } catch (error) {}
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
              translate
            >
              chooseFile
            </Button>
          </MotiView>
          <Text align="center" size={13} color="disabled">
            {t('fileWarning') + ' ' + fileTypeLabel}
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
