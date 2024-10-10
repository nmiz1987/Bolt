import { CustomActiveSheetOptionsProps, CustomActiveSheet } from '@/components/ActiveSheet/CustomActiveSheet';
import { countries } from '@/i18n/languages';
import { I18nManager, Platform } from 'react-native';
import * as Updates from 'expo-updates';

import { storeLanguage } from '@/utils/languages';

export function ChooseLanguagePopup() {
  const options: CustomActiveSheetOptionsProps = Object.values(countries).map(country => ({
    option: country.title,
    onPress: async () => {
      storeLanguage(country);
      I18nManager.allowRTL(country.textDirection === 'rtl');
      I18nManager.forceRTL(country.textDirection === 'rtl');
      await Updates.reloadAsync();
    },
  }));

  if (Platform.OS === 'web') {
    return null;
  }

  return (
    <CustomActiveSheet
      label="Change Language with ActiveSheet"
      optionsList={options}
      title="Choose language2"
      message="Warning: After selection the application will restart!"
    />
  );
}
