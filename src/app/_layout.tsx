import { initializeI18n } from '@/i18n/i18n';
import '../theme/global.css';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { ErrorBoundaryProps, Stack, SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import * as Updates from 'expo-updates';
import { DevSettings, Platform, StyleSheet } from 'react-native';
import { AppContextProvider } from '@/store/AppContextProvider';
import { CustomErrorBoundary } from '@/components/CustomErrorBoundary/CustomErrorBoundary';
import { Box } from '@/components/Box/Box';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Expo Router uses Error Boundaries to catch errors in the navigation tree.
// This MUST be here to catch errors in the navigation tree.
export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return <CustomErrorBoundary error={error} retry={retry} />;
}

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);

  // check for OTA updates
  useEffect(() => {
    async function fetchUpdate() {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
          DevSettings.reload();
        }
      } catch (e) {
        console.error(e);
      }
    }
    if (!__DEV__ && Platform.OS !== 'web') fetchUpdate();
  }, []);

  // initialize i18n
  useEffect(() => {
    initializeI18n().then(() => setIsI18nInitialized(true));
  }, []);

  //load fonts
  const [fontsLoaded, fontError] = useFonts({
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  const appIsReady = isI18nInitialized && fontsLoaded;

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    // Before we show the app, we have to wait for our state to be ready.
    // In the meantime, don't render anything. This will be the background
    // color set in native by rootView's background color.
    // In iOS: application:didFinishLaunchingWithOptions:
    // In Android: https://stackoverflow.com/a/45838109/204044
    // Here we replace it with our own loading component.
    return (
      <Box
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: Platform.select({
              web: '#fff',
              default: '#2b2863',
            }),
          },
        ]}
      />
    );
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <AppContextProvider>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false, headerTitle: '' }} />
        <Stack.Screen name="(tabs)" options={{ headerTitle: 'Tabs Demo' }} />
        <Stack.Screen
          name="modal"
          options={{
            title: 'Modal',
            presentation: 'modal',
          }}
        />
      </Stack>
    </AppContextProvider>
  );
}
