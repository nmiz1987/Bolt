import { EnumCountries, CountriesProps } from './interfaces';

type Countries = {
  he: CountriesProps;
  en: CountriesProps;
};

export const countries: Countries = {
  he: {
    title: 'עברית',
    language: 'he-IL',
    flag: EnumCountries.Israel,
    textDirection: 'rtl',
  },
  en: {
    title: 'English',
    language: 'en-US',
    flag: EnumCountries.USA,
    textDirection: 'ltr',
  },
};
