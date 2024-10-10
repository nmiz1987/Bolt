import { Screen } from '@/components/Screen/Screen';
import { ChooseLanguageRadioList } from '@/components/ChooseLanguageRadioList/ChooseLanguageRadioList';
import { Spacer } from '@/components/Spacer';
import { ChooseLanguagePopup } from '@/components/ChooseLanguagePopup';

export default function SettingScreen() {
  return (
    <Screen>
      <ChooseLanguageRadioList />
      <Spacer size="md" />
      <ChooseLanguagePopup />
    </Screen>
  );
}
