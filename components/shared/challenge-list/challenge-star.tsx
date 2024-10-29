import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

interface StarsProps {
  rating: string;
}

const ChallengeStar = React.memo(({ rating }: StarsProps) => {
  const stars = React.useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => {
      const numberRating = Number(rating);
      const starName = i < numberRating ? 'star' : 'staro';
      return <AntDesign key={i} name={starName} size={18} color="#DC00FC" />;
    });
  }, [rating]);

  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>{stars}</View>
  );
});

export default ChallengeStar;
