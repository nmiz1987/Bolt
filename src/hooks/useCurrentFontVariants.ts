import { EnumLanguages } from '@/i18n/interfaces';
import { variants } from '@/theme/fontVariants';
import { I18nManager } from 'react-native';

export function useCurrentFontVariants() {
  return variants[I18nManager.isRTL ? EnumLanguages.Hebrew : EnumLanguages.English];
}
