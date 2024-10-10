import { Drawer } from 'expo-router/drawer';
import Octicons from '@expo/vector-icons/Octicons';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { CustomNavigationDrawer } from '@/components/navigation/CustomNavigationDrawer';
import { getDrawerTypeForBreakpoint, useBreakpoint } from '@/services/breakpoints';
// import { CustomNavigationHeader } from '@/components/navigation/CustomNavigationHeader';
import { isRTL } from '@/i18n';
import { DrawerButton } from '@/components/navigation/DrawerButton';

export default function DrawerLayout() {
  const breakpoint = useBreakpoint();
  const drawerType = getDrawerTypeForBreakpoint(breakpoint);

  return (
    <Drawer
      defaultStatus="closed"
      screenOptions={{
        drawerLabelStyle: isRTL ? { writingDirection: 'rtl' } : {},
        headerLeftContainerStyle: isRTL
          ? {
              transform: [{ scaleX: -1 }],
              alignItems: 'flex-end',
            }
          : {},
        drawerType,
        headerLeft: () => <DrawerButton />,
        // You can use a custom header component
        // header: props => <CustomNavigationHeader {...props} />,
      }}
      drawerContent={props => <CustomNavigationDrawer {...props} />}>
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="network"
        options={{
          headerTitle: 'Network Info',
          drawerLabel: 'Network Info',
          drawerIcon: ({ size, color }) => <Entypo name="network" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="fetch-demo"
        options={{
          headerTitle: 'Fetch Demo',
          drawerLabel: 'Fetch Demo',
          drawerIcon: ({ size, color }) => <Entypo name="network" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="device"
        options={{
          headerTitle: 'Device Info',
          drawerLabel: 'Device Info',
          drawerIcon: ({ size, color }) => <Octicons name="device-mobile" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          headerTitle: 'Settings',
          drawerLabel: 'Settings',
          drawerIcon: ({ size, color }) => <AntDesign name="setting" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="animation-and-parallax"
        options={{
          headerTitle: 'Animation and parallax',
          drawerLabel: 'Animation and parallax',
          drawerIcon: ({ size, color }) => <AntDesign name="rest" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="input-text-scroll-screen"
        options={{
          headerTitle: 'Input Text Scroll Screen',
          drawerLabel: 'Input Text Scroll Screen',
          drawerIcon: ({ size, color }) => <AntDesign name="rest" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="input-text-non-scroll-screen"
        options={{
          headerTitle: 'Input Text Non Scroll Screen',
          drawerLabel: 'Input Text Non Scroll Screen',
          drawerIcon: ({ size, color }) => <AntDesign name="rest" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="popup"
        options={{
          headerTitle: 'BottomSheet Demo',
          drawerLabel: 'BottomSheet Demo',
          drawerIcon: ({ size, color }) => <AntDesign name="rest" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
}
