import { DrawerScreenProps } from '@react-navigation/drawer';
import { useNavigation } from 'expo-router';

export function useDrawerNavigation() {
  const navigation = useNavigation<DrawerScreenProps<{}>['navigation']>();
  const route = useNavigation<DrawerScreenProps<{}>['route']>();
  return { navigation, route };
}
