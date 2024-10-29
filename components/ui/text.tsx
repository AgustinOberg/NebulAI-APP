import type {
  StyleProp,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import { Text as RNText } from 'react-native';
import type { UnistylesVariants } from 'react-native-unistyles';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { useLang } from '@/language/useLang';

type ComponentProps = UnistylesVariants<typeof stylesheet>;

export interface TextProps extends RNTextProps {
  weight?: ComponentProps['weight'];
  color?: ComponentProps['color'];
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  size?: number;
  align?: 'left' | 'center' | 'right';
  translate?: boolean;
}

const Text = ({
  weight = '500',
  style,
  color = 'primary',
  children,
  size = 16,
  align = 'left',
  translate = false,
  ...rest
}: TextProps) => {
  const { styles } = useStyles(stylesheet, {
    weight,
    color,
  });
  const { t } = useLang();

  return (
    <>
      <RNText
        style={[styles.text(size), style, { textAlign: align }]}
        {...rest}
      >
        {translate ? t(children as string) : children}
      </RNText>
    </>
  );
};

export default Text;

const stylesheet = createStyleSheet((theme) => ({
  text: (size: number) => ({
    fontSize: size,
    variants: {
      weight: {
        '200': {
          fontFamily: 'Nunito_200ExtraLight',
        },
        '300': {
          fontFamily: 'Nunito_300Light',
        },
        '400': {
          fontFamily: 'Nunito_400Regular',
        },
        '500': {
          fontFamily: 'Nunito_500Medium',
        },
        '600': {
          fontFamily: 'Nunito_600SemiBold',
        },
        '700': {
          fontFamily: 'Nunito_700Bold',
        },
        '800': {
          fontFamily: 'Nunito_800ExtraBold',
        },
        '900': {
          fontFamily: 'Nunito_900Black',
        },
      },
      color: {
        primary: {
          color: theme.colors.primaryText,
        },
        secondary: {
          color: theme.colors.secondaryText,
        },
        disabled: {
          color: theme.colors.disabled,
        },
      },
    },
  }),
}));
