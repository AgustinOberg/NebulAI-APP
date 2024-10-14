import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Spinner from '@/components/ui/spinner';
import Text from '@/components/ui/text';
interface Props {
  isLoading?: boolean;
}
const ChallengeListEmpty = ({ isLoading }: Props) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.emptyContainer}>
      {isLoading ? <Spinner /> : <Text>No hay desafíos 🙉</Text>}
    </View>
  );
};

export default ChallengeListEmpty;

const stylesheet = createStyleSheet(() => ({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
