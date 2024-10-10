import { createStyle } from './ChooseLanguageRadioList.styles';
import { I18nManager, Platform } from 'react-native';
import * as Updates from 'expo-updates';
import { countries } from '@/i18n/languages';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { Radio } from '../Radio/Radio';
import { i18n } from '@/i18n';
import { useCurrentColorScheme } from '@/hooks/useCurrentColorScheme';
import { Box } from '../Box/Box';
import { storeLanguage } from '@/utils/languages';

export function ChooseLanguageRadioList() {
  const colors = useCurrentColorScheme();
  const styles = createStyle(colors);

  if (Platform.OS === 'web') {
    return <ThemedText variant="bodyText1">Web is not supported for ChooseLanguageRadioList</ThemedText>;
  }

  return (
    <Box>
      {Object.values(countries).map((country, index) => {
        return (
          <Box
            key={index}
            onPress={async () => {
              storeLanguage(country);
              I18nManager.allowRTL(country.textDirection === 'rtl');
              I18nManager.forceRTL(country.textDirection === 'rtl');
              await Updates.reloadAsync();
            }}
            style={[styles.row, index < Object.values(countries).length - 1 && styles.bar]}>
            <Box style={styles.flagAndName}>
              <ThemedText variant="bodyText1">{country.title}</ThemedText>
            </Box>
            <Radio status={country.language === i18n.locale} />
          </Box>
        );
      })}
    </Box>
  );
}
