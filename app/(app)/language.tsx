import { useCallback } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import HeaderWithBack from '@/components/shared/header-with-back';
import ScreenBackground from '@/components/shared/screen-background';
import Text from '@/components/ui/text';
import { useChangeLangOnUnmount } from '@/language/useChangeLangOnUnmount';
import { useLang } from '@/language/useLang';
import { hex2rgba } from '@/utils/ui.utils';

interface Option {
  key: string;
  label: string;
}

const options: Option[] = [
  { key: 'es', label: 'Español' },
  { key: 'en', label: 'English' },
  { key: 'pt', label: 'Português' },
  { key: 'fr', label: 'Français' },
  { key: 'it', label: 'Italiano' },
];

const LanguageScreen = () => {
  const { styles } = useStyles(stylesheet);
  useChangeLangOnUnmount();
  const { changeLanguage, currentLanguage, t } = useLang();
  const renderItem = useCallback(
    ({ item }: { item: Option }) => (
      <Pressable
        onPress={() => changeLanguage(item.key)}
        style={styles.option}
        disabled={currentLanguage === item.key}
      >
        <Text size={17}>{`${item.label} ${
          currentLanguage === item.key ? `(${t('current')})` : ''
        }`}</Text>
      </Pressable>
    ),
    [styles, changeLanguage, currentLanguage, t],
  );
  const spacer = useCallback(
    () => <View style={styles.spacer} />,
    [styles.spacer],
  );

  return (
    <>
      <View style={styles.container}>
        <HeaderWithBack title={'language'} />
        <ScreenBackground />
        <FlatList
          data={options}
          ItemSeparatorComponent={spacer}
          renderItem={renderItem}
          contentContainerStyle={styles.content}
        />
      </View>
    </>
  );
};

export default LanguageScreen;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: '#2A3164',
    gap: 20,
  },
  content: {
    backgroundColor: hex2rgba('#191E47', 0.8),
    padding: 20,
    borderRadius: 20,
    marginHorizontal: theme.sizes.screenPadding,
  },
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
}));
