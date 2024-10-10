import { Stack } from 'expo-router';
import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Stack.Screen name="stack-one" options={{ title: 'Inner Stack One' }} />
      <Stack.Screen name="stack-two" options={{ title: 'Inner Stack Two' }} />
    </Stack>
  );
}
