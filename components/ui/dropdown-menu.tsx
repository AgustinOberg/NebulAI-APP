import { createStyleSheet, useStyles } from 'react-native-unistyles';
import * as DropdownMenu from 'zeego/dropdown-menu';

export const DropdownMenuRoot = DropdownMenu.Root;
export const DropdownMenuTrigger = DropdownMenu.Trigger;
export const DropdownMenuContent = DropdownMenu.Content;
export const DropdownMenuItemTitle = DropdownMenu.ItemTitle;

type ItemProps = React.ComponentProps<(typeof DropdownMenu)['Item']>;
export const DropdownMenuItem = DropdownMenu.create((props: ItemProps) => {
  const { styles } = useStyles(stylesheet);
  return <DropdownMenu.Item {...props} style={styles.container} />;
}, 'Item');

const stylesheet = createStyleSheet(() => ({
  container: {
    height: 40,
  },
}));
