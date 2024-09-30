import * as React from 'react';
import { memo } from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Circle, Path } from 'react-native-svg';

const originalWidth = 1284;
const originalHeight = 2708;
const Illustration = (props: SvgProps) => (
  <Svg
    viewBox={`0 0 ${originalWidth} ${originalHeight}`}
    preserveAspectRatio="xMidYMid slice"
    {...props}
  >
    <Circle cx={1101} cy={320} r={459} fill="#fff" fillOpacity={0.02} />
    <Circle cx={82} cy={1121} r={292} fill="#fff" fillOpacity={0.02} />
    <Path
      fill="#C85531"
      fillOpacity={0.1}
      d="M294.938 328.5c2.694-4.667 9.43-4.667 12.124 0l23.383 40.5c2.694 4.667-.674 10.5-6.062 10.5h-46.766c-5.388 0-8.756-5.833-6.062-10.5l23.383-40.5ZM1028.43 901.942c4.81-2.424 10.45 1.271 10.14 6.65l-2.66 46.69c-.31 5.38-6.32 8.41-10.83 5.455l-39.104-25.65c-4.506-2.956-4.122-9.681.69-12.105l41.764-21.04ZM270.085 2237.04c-.714-5.34 4.622-9.45 9.604-7.4l43.241 17.81c4.982 2.06 5.874 8.73 1.606 12.02l-37.046 28.54c-4.269 3.29-10.497.72-11.211-4.62l-6.194-46.35ZM676.085 1688.04c-.714-5.34 4.622-9.45 9.604-7.4l43.241 17.81c4.982 2.06 5.874 8.73 1.606 12.02l-37.046 28.54c-4.269 3.29-10.497.72-11.211-4.62l-6.194-46.35ZM1108.08 2630.04c-.71-5.34 4.63-9.45 9.61-7.4l43.24 17.81c4.98 2.06 5.87 8.73 1.61 12.02l-37.05 28.54c-4.27 3.29-10.5.72-11.21-4.62l-6.2-46.35ZM768.085 144.04c-.714-5.341 4.622-9.452 9.604-7.399l43.241 17.812c4.982 2.052 5.874 8.728 1.606 12.017l-37.046 28.541c-4.269 3.289-10.497.724-11.211-4.618l-6.194-46.353ZM179.085 1184.04c-.714-5.34 4.622-9.45 9.604-7.4l43.241 17.81c4.982 2.06 5.874 8.73 1.606 12.02l-37.046 28.54c-4.269 3.29-10.497.72-11.211-4.62l-6.194-46.35Z"
    />
    <Circle cx={650} cy={723} r={41} fill="#E400FF" fillOpacity={0.1} />
    <Circle cx={104} cy={1454} r={41} fill="#E400FF" fillOpacity={0.1} />
    <Circle cx={1115} cy={2017} r={41} fill="#E400FF" fillOpacity={0.1} />
    <Circle cx={846} cy={1164} r={41} fill="#E400FF" fillOpacity={0.1} />
    <Circle cx={123} cy={2667} r={41} fill="#E400FF" fillOpacity={0.1} />
  </Svg>
);
const BgIllustration = memo(Illustration);
export default BgIllustration;
