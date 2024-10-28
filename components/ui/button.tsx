import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback } from 'react';
import type {
  GestureResponderEvent,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { ActivityIndicator, Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Analytics } from '@/analytics';

import type { TextProps } from './text';
import Text from './text';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'text'
  | 'tertiary'
  | 'success';

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  mode?: 'solid' | 'gradient';
  variant?: ButtonVariant;
  containerStyle?: StyleProp<ViewStyle>;
  textProps?: TextProps;
  eventName?: string;
  eventProperties?: Record<string, any>;
  loading?: boolean;
}

const Button = ({
  children,
  mode,
  variant = 'primary',
  containerStyle,
  textProps,
  eventName,
  eventProperties,
  loading,
  ...rest
}: ButtonProps) => {
  const { styles } = useStyles(stylesheet, { variant });
  const onPressIn = useCallback(
    (event: GestureResponderEvent) => {
      Haptics.selectionAsync();
      if (eventName) {
        Analytics.trackEvent(
          'user_action_press_button_' + eventName,
          eventProperties,
        );
      }
      rest.onPressIn?.(event);
    },
    [eventName, eventProperties, rest],
  );

  return (
    <Pressable
      style={styles.container}
      {...rest}
      onPressIn={onPressIn}
      disabled={loading || rest.disabled}
    >
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
      {loading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <Text size={17} weight="700" {...textProps}>
          {children}
        </Text>
      )}
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
          elevation: 0,
          shadowOpacity: 0,
          shadowRadius: 0,
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
        success: {
          backgroundColor: '#52AD48',
        },
      },
    },
  },
}));
