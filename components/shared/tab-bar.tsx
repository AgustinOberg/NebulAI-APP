import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Platform } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const TabButton = (props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
  text?: string;
}) => {
  const { styles } = useStyles(stylesheet);
  return <Feather size={28} style={styles.icon} {...props} />;
};

export const MiddleButton = () => {
  const { styles } = useStyles(stylesheet);
  const createNewChallenge = () => {
    router.push('/(app)/(challenge)/creation/');
  };
  return (
    <>
      <LinearGradient
        style={[styles.floatingButton, styles.unscaledFloating]}
        colors={['#7F00FF', '#DC00FC']}
        start={[0, 0]}
        end={[1, 0]}
        onTouchStart={createNewChallenge}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </LinearGradient>
    </>
  );
};
const stylesheet = createStyleSheet(() => ({
  icon: {
    marginBottom: -2.5,
  },
  floatingButton: {
    position: 'absolute',
    bottom: (Platform.OS === 'android' ? 105 : 90) - 23.5,
    left: '50%',
    transform: [{ translateX: -30 }],
    backgroundColor: '#DC00FC',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#DC00FC',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 5,
    zIndex: 9999,
  },
  unscaledFloating: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
}));
