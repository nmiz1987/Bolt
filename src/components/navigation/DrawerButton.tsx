import { large, useBreakpoint } from '@/services/breakpoints';
import { StyleSheet } from 'react-native';
import { useCurrentColorScheme } from '@/hooks/useCurrentColorScheme';
import { AntDesign } from '@expo/vector-icons';
import { Box } from '../Box/Box';
import { useDrawerNavigation } from '@/hooks/useDrawerNavigation';

export function DrawerButton() {
  const { navigation: drawerNavigation } = useDrawerNavigation();
  const showDrawerToggleForBreakpoint = (breakpoint: string) => breakpoint !== large;
  const breakpoint = useBreakpoint();
  const showDrawerToggle = showDrawerToggleForBreakpoint(breakpoint);
  const colors = useCurrentColorScheme();

  if (showDrawerToggle) {
    return (
      <Box onPress={() => drawerNavigation.toggleDrawer()} style={styles.iconContainer}>
        <AntDesign name="menufold" size={24} color={colors.tint} />
      </Box>
    );
  }
  return <Box style={styles.iconContainer} />;
}

const styles = StyleSheet.create({
  iconContainer: {
    height: 40,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
