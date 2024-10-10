import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { createContext, useContext } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/services/network/queryClient';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';
import { OfflineBanner } from '@/components/OfflineBanner';
import { useCurrentColorScheme } from '@/hooks/useCurrentColorScheme';

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */

interface AppContextProviderProps extends React.PropsWithChildren {}

export const AppContext = createContext<{}>({});

export function AppContextProvider({ children }: AppContextProviderProps) {
  const colorScheme = useColorScheme();
  const colors = useCurrentColorScheme();

  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: colors.background,
    },
  };

  const customDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
    },
  };

  return (
    <AppContext.Provider value={{}}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <ThemeProvider value={colorScheme === 'dark' ? customDarkTheme : customDefaultTheme}>
              <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
              <ActionSheetProvider useCustomActionSheet>
                <QueryClientProvider client={queryClient}>
                  {children}
                  <OfflineBanner />
                </QueryClientProvider>
              </ActionSheetProvider>
            </ThemeProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
