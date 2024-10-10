import { Appearance, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Switch } from '@/components/Switch/Switch';
import { useCallback } from 'react';
import { useCurrentColorScheme } from '../hooks/useCurrentColorScheme';
import { useColorScheme } from '@/hooks/useColorScheme';

export function ChangeColorMode() {
  const colorScheme = useColorScheme();
  const colors = useCurrentColorScheme();

  const changeThemeHandler = useCallback(() => {
    Appearance.setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  }, [colorScheme]);

  if (Platform.OS === 'web') return null;

  return (
    <Switch
      onLabel={<Feather name="sun" size={22} color={colors['text-primary']} />}
      offLabel={<Feather name="moon" size={22} color={colors['text-primary']} />}
      isOn={colorScheme === 'dark'}
      onPressHandler={changeThemeHandler}
    />
  );
}
