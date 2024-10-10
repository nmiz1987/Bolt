import { ChangeColorMode } from '@/components/ChangeColorMode';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Linking, StyleSheet } from 'react-native';
import { Box } from '../Box/Box';
import { Spacer } from '../Spacer';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { isRTL } from '@/i18n';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export function CustomNavigationDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <Box style={styles.theme}>
        <ChangeColorMode />
      </Box>
      <Spacer size="lg" />
      <ThemedText variant="defaultSemiBold" style={{ textAlign: 'center' }}>
        Hello!
      </ThemedText>
      <Spacer size="sm" />

      <DrawerItemList {...props} />
      <DrawerItem
        labelStyle={{ writingDirection: isRTL ? 'rtl' : 'ltr' }}
        icon={({ size, color }) => <MaterialIcons name="border-bottom" size={size} color={color} />}
        label="Tabs"
        onPress={() => props.navigation.navigate('(tabs)')}
      />
      <DrawerItem
        labelStyle={{ writingDirection: isRTL ? 'rtl' : 'ltr' }}
        icon={({ size, color }) => <Ionicons name="help-circle-outline" size={size} color={color} />}
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  theme: {
    marginHorizontal: 10,
  },
});
