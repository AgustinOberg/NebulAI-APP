import { Feather } from '@expo/vector-icons';
import { MotiView, View } from 'moti';
import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const SCALE = 1.2;

const UploadButton = () => {
  const { styles, theme } = useStyles(stylesheet);
  const MARGIN = (styles.container.width * SCALE - styles.container.width) / 2;

  return (
    <View style={{ marginVertical: MARGIN }}>
      <MotiView
        from={{
          scale: 1,
        }}
        animate={{
          scale: SCALE,
        }}
        transition={{
          loop: true,
          duration: 1300,
          type: 'timing',
          delay: 100,
        }}
        style={styles.container}
      >
        <Feather name="file" color={theme.colors.primaryText} size={60} />
      </MotiView>
    </View>
  );
};

export default UploadButton;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: 180,
    borderRadius: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.accentPrimary,
    borderWidth: 2,
    borderColor: theme.colors.accentPrimaryBorder,
  },
}));
