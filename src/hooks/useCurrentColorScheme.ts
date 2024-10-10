import { useColorScheme } from '@/hooks/useColorScheme';
import { colors } from '@/theme/colors';

export function useCurrentColorScheme() {
  const colorScheme = useColorScheme();
  return colors[colorScheme ?? 'light'];
}
