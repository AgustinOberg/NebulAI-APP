import React from 'react';
import { Image } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import * as DropdownMenu from 'zeego/dropdown-menu';

import { useUserProfile } from '@/data/fetchers/auth.fetcher';
import { useUser } from '@/data/state/user.store';

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemTitle,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const UserContextMenu = () => {
  const { styles } = useStyles(stylesheet);
  const { logout } = useUser();
  const { data: profile } = useUserProfile();
  if (!profile) return <></>;
  return (
    <DropdownMenu.Root>
      <DropdownMenuTrigger>
        <Image
          style={styles.unscaledPicture}
          source={{
            uri: profile.picture,
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        placeholder="placeholder"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <DropdownMenuItem
          onSelect={logout}
          key="fernando rojo"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <DropdownMenuItemTitle>Cerrar sesión</DropdownMenuItemTitle>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default UserContextMenu;

const stylesheet = createStyleSheet(() => ({
  unscaledPicture: {
    height: 38,
    aspectRatio: 1,
    borderRadius: 20,
    borderWidth: 0,
  },
}));
