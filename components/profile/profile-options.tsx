import { Feather } from '@expo/vector-icons';
import { useCallback, useMemo } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Analytics } from '@/analytics';
import { Prefix } from '@/analytics/events';
import { useAppFeedback } from '@/hooks/useAppFeedback';
import { hex2rgba } from '@/utils/ui.utils';

import Text from '../ui/text';

type Option = {
  label: string;
  icon: React.ComponentProps<typeof Feather>['name'];
  action: () => void;
};

const useProfileOptions = () => {
  const { requestReview, sendComments, goToAbout, goToLanguage } =
    useAppFeedback();
  const options: Option[] = useMemo(
    () => [
      {
        label: 'about',
        icon: 'info',
        action: goToAbout,
      },
      {
        label: 'rate',
        icon: 'star',
        action: requestReview,
      },
      {
        label: 'sendComments',
        icon: 'message-square',
        action: sendComments,
      },
      {
        label: 'language',
        icon: 'map-pin',
        action: goToLanguage,
      },
    ],
    [goToAbout, requestReview, sendComments, goToLanguage],
  );
  return {
    options,
  };
};

const ProfileOptions = () => {
  const { styles } = useStyles(stylesheet);
  const { options } = useProfileOptions();
  const spacer = useCallback(
    () => <View style={styles.spacer} />,
    [styles.spacer],
  );
  const onPressOption = useCallback((option: Option) => {
    option.action();
    Analytics.trackEvent(Prefix.Actions.Button + 'profile_option', {
      option: option.label,
    });
  }, []);
  const renderItem = useCallback(
    ({ item }: { item: Option }) => (
      <Pressable onPress={() => onPressOption(item)} style={styles.option}>
        <Feather name={item.icon} size={20} color={'white'} />
        <Text size={17} translate>
          {item.label}
        </Text>
      </Pressable>
    ),
    [onPressOption, styles],
  );
  return (
    <FlatList
      data={options}
      scrollEnabled={false}
      renderItem={renderItem}
      ItemSeparatorComponent={spacer}
      contentContainerStyle={styles.content}
    />
  );
};

export default ProfileOptions;

const stylesheet = createStyleSheet((theme) => ({
  option: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  spacer: {
    height: 2,
    width: '100%',
    marginVertical: 16,
    backgroundColor: '#2A3164',
    opacity: 0.34,
  },
  content: {
    backgroundColor: hex2rgba('#191E47', 0.8),
    padding: 20,
    borderRadius: 20,
    marginHorizontal: theme.sizes.screenPadding,
  },
}));
