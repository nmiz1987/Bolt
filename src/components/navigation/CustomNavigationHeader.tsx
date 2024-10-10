import { DrawerHeaderProps } from '@react-navigation/drawer';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { StyleSheet } from 'react-native';
import { useCurrentColorScheme } from '@/hooks/useCurrentColorScheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from '../Box/Box';
import { DrawerButton } from './DrawerButton';

interface CustomNavigationHeaderProps extends DrawerHeaderProps {}

export function CustomNavigationHeader({ options }: CustomNavigationHeaderProps) {
  const colors = useCurrentColorScheme();
  const insets = useSafeAreaInsets();

  // title can be a string or a component!
  const getTitle = () => {
    if (options?.headerTitle) {
      if (typeof options.headerTitle === 'string') {
        return (
          <ThemedText style={styles.title} variant="h5">
            {options.headerTitle}
          </ThemedText>
        );
      } else if (typeof options.headerTitle === 'function') {
        //@ts-ignore
        return <Box style={styles.title}>{options.headerTitle()}</Box>;
      }
    }

    if (options?.title) {
      return (
        <ThemedText variant="h5" style={styles.title}>
          {options.title}
        </ThemedText>
      );
    }

    return <Box style={styles.title} />;
  };

  return (
    <Box
      lightColor="white"
      darkColor="black"
      style={[
        styles.container,
        { paddingTop: insets.top + 4, paddingBottom: 4, borderBottomColor: colors['navbar-bottom'], borderBottomWidth: 1 },
        styles.shadow,
      ]}>
      <DrawerButton />
      {getTitle()}
      <Box style={styles.iconContainer} />
    </Box>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconContainer: {
    height: 40,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
});
