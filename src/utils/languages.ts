import { CountriesProps } from '@/i18n/interfaces';
import { countries } from '@/i18n/languages';
import { localStorage } from '@/services/storage';

// Retrieve the language from AsyncStorage
export async function getStoredLanguage(): Promise<CountriesProps> {
  const fallbackLanguage: CountriesProps = countries.en; // Fallback to Hebrew if no language is stored
  try {
    const usersLanguage = await localStorage.loadStringAsync('appLanguage');
    if (usersLanguage) {
      return JSON.parse(usersLanguage);
    } else {
      return fallbackLanguage;
    }
  } catch (error) {
    console.error('Error fetching stored language:', error);
    return fallbackLanguage;
  }
}

// Store the selected language in AsyncStorage
export async function storeLanguage(language: CountriesProps) {
  try {
    await localStorage.saveStringAsync('appLanguage', JSON.stringify(language));
  } catch (error) {
    console.error('Error saving language:', error);
  }
}
