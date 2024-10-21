import { Feather } from '@expo/vector-icons';
import { Platform, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import ProfileHeader from '@/components/profile/profile-header';
import ProfileOptions from '@/components/profile/profile-options';
import ScreenBackground from '@/components/shared/screen-background';
import Button from '@/components/ui/button';
import { useUser } from '@/data/state/user.store';

const ProfileScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { logout, deleteAccount } = useUser();

  return (
    <View style={styles.container}>
      <ScreenBackground />

      <ProfileHeader />
      <ProfileOptions />
      <View style={styles.footer}>
        <Button variant="text" onPress={logout}>
          Cerrar sesión
        </Button>
      </View>
      <Feather
        name="trash-2"
        size={18}
        color="white"
        style={styles.delete}
        onPress={deleteAccount}
      />
    </View>
  );
};

export default ProfileScreen;

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 1,
    backgroundColor: '#2A3164',
    gap: 20,
  },
  footer: {
    paddingHorizontal: theme.sizes.screenPadding,
    marginBottom:
      runtime.insets.bottom +
      theme.sizes.footer +
      (Platform.OS === 'android' ? 40 : 0),
  },
  delete: {
    position: 'absolute',
    top: runtime.insets.top + 10,
    right: theme.sizes.screenPadding,
  },
}));
