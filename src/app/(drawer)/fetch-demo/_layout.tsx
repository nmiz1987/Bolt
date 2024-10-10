import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';
import { useCurrentColorScheme } from '@/hooks/useCurrentColorScheme';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  const colors = useCurrentColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="simple-axios"
        options={{
          headerShown: false,
          title: 'Basic axios',
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({ color }) => <FontAwesome size={28} style={styles.tab} name="globe" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tanstack-useQuery"
        options={{
          headerShown: false,
          title: 'useQuery',
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({ color }) => <FontAwesome size={28} style={styles.tab} name="globe" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tanstack-useMutation"
        options={{
          headerShown: false,
          title: 'useMutation',
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({ color }) => <FontAwesome size={28} style={styles.tab} name="globe" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tab: {
    marginBottom: -3,
  },
});
