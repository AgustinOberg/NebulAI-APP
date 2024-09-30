import type { UnistylesPlugin } from 'react-native-unistyles';
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const autoScalePlugin: UnistylesPlugin = {
  name: 'autoScalePlugin',
  onParsedStyle: (styleKey, style, runtime) => {
    const FACTOR = 0.82;
    const width = runtime.screen.width;
    const height = runtime.screen.height;
    const [shortDimension, longDimension] =
      width < height ? [width, height] : [height, width];

    const pairs = Object.entries(style).map(([key, value]) => {
      if (styleKey.includes('unscaled')) {
        return [key, value];
      }
      const isNumber = typeof value === 'number';
      if (!isNumber || key === 'flex') {
        return [key, value];
      }

      if (key === 'height') {
        return [key, (longDimension / guidelineBaseHeight) * value * FACTOR];
      }

      return [key, (shortDimension / guidelineBaseWidth) * value * FACTOR];
    });

    return Object.fromEntries(pairs);
  },
};
