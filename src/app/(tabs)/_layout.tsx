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
        name="modal-demo"
        options={{
          headerShown: false,
          title: 'Modal Demo',
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({ color }) => <FontAwesome size={28} style={styles.tab} name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(inner-stack)"
        options={{
          headerShown: false,
          title: 'Inner Stack',
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({ color }) => <FontAwesome size={28} style={styles.tab} name="code" color={color} />,
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
