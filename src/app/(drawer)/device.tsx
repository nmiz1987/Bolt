import { Screen } from '@/components/Screen/Screen';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import * as Device from 'expo-device';

export default function DeviceScreen() {
  return (
    <Screen>
      <ThemedText variant="bodyTextSmall" fontSize={12}>
        {JSON.stringify(Device, null, 2)}
      </ThemedText>
    </Screen>
  );
}
