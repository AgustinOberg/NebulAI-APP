import type { StyleProp, TextProps, TextStyle } from 'react-native';
import { Text as RNText } from 'react-native';
import type { UnistylesVariants } from 'react-native-unistyles';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type ComponentProps = UnistylesVariants<typeof stylesheet>;

interface Props extends TextProps {
  weight?: ComponentProps['weight'];
  color?: ComponentProps['color'];
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  size?: number;
}

const Text = ({
  weight = '500',
  style,
  color = 'primary',
  children,
  size = 16,
  ...rest
}: Props) => {
  const { styles } = useStyles(stylesheet, {
    weight,
    color,
  });

  return (
    <>
      <RNText style={[styles.text(size), style]} {...rest}>
        {children}
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
