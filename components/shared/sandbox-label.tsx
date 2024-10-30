import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import { env } from '@/config/env';

import Text from '../ui/text';

const isDev = env.EXPO_PUBLIC_ENVIRONMENT === 'development';

const SandboxLabel = () => {
  if (!isDev) return null;
  return (
    <View style={[styles.container]}>
      <Text align="center" weight={'800'} style={styles.text}>
        TEST
      </Text>
      <Text align="center" weight={'800'} style={styles.text}>
        MODE
      </Text>
    </View>
  );
};

export default SandboxLabel;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight || 0,
    left: 10,
    backgroundColor: '#DC00FC',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    zIndex: 9999,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    opacity: 0.8,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 8,
  },
});
