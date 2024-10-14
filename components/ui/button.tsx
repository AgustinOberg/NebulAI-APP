import { LinearGradient } from 'expo-linear-gradient';
import type {
  PressableProps,
  StyleProp,
  TextProps,
  ViewStyle,
} from 'react-native';
import { Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Text from './text';

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'tertiary';
interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  mode?: 'solid' | 'gradient';
  variant?: ButtonVariant;
  containerStyle?: StyleProp<ViewStyle>;
  textProps?: TextProps;
}

const Button = ({
  children,
  mode,
  variant = 'primary',
  containerStyle,
  textProps,
  ...rest
}: ButtonProps) => {
  const { styles } = useStyles(stylesheet, { variant });
  return (
    <Pressable style={styles.container} {...rest}>
      {mode === 'gradient' ? (
        <LinearGradient
          colors={['#7F00FF', '#DC00FC']}
          start={[0, 0]}
          end={[1, 0]}
          style={[styles.buttonChildren, containerStyle]}
        />
      ) : (
        <View style={[styles.buttonChildren, styles.fill, containerStyle]} />
      )}
      <>
        <Text size={17} weight="700" {...textProps}>
          {children}
        </Text>
      </>
    </Pressable>
  );
};

export default Button;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 12,

    justifyContent: 'center',
    alignItems: 'center',
    variants: {
      variant: {
        text: {
          elevation: 0,
          shadowOpacity: 0,
          shadowRadius: 0,
        },
        default: {
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
          shadowColor: theme.colors.secondaryText,
          shadowOffset: {
            width: 0,
            height: 2,
          },
        },
      },
    },
  },
  buttonChildren: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    borderRadius: 8,
  },
  fill: {
    variants: {
      variant: {
        primary: {
          backgroundColor: theme.colors.button.primaryBg,
        },
        secondary: {
          backgroundColor: theme.colors.button.secondaryBg,
        },
        tertiary: {
          backgroundColor: '#6549BF',
        },
        text: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
}));
