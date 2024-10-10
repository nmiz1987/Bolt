import { I18n } from 'i18n-js';
import { I18nManager } from 'react-native';

// if English isn't your default language, move Translations to the appropriate language file here and inside the language files.
import en, { Translations } from './en';
import he from './he';
import { getStoredLanguage } from '@/utils/languages';

export const i18n = new I18n();

i18n.translations = { en, he, 'en-US': en };
i18n.enableFallback = true;
i18n.defaultLocale = 'en'; // Ensure 'en' is used as the fallback language

// Initialize language and direction
export const initializeI18n = async () => {
  const storedLanguage = await getStoredLanguage();
  i18n.locale = storedLanguage.language;

  const isRTL = storedLanguage.textDirection === 'rtl'; // Handle RTL
  I18nManager.forceRTL(isRTL);
  I18nManager.allowRTL(isRTL);
};

export const isRTL = I18nManager.isRTL;

/**
 * Builds up valid keypaths for translations.
 */
export type TxKeyPath = RecursiveKeyOf<Translations>;

// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `['${TKey}']` | `.${TKey}`>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
  ? Text
  : TValue extends object
    ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
    : Text;
