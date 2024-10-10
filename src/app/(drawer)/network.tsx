import { Screen } from '@/components/Screen/Screen';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import * as Network from 'expo-network';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

export default function NetworkScreen() {
  const [ip, setIp] = useState<string | null>(null);
  const [state, setState] = useState<Network.NetworkState>();
  const [isInAirplaneMode, setIsInAirplaneMode] = useState<boolean | null>(null);

  useEffect(() => {
    async function loadNetwork() {
      const ip = await Network.getIpAddressAsync();
      setIp(ip);

      const st = await Network.getNetworkStateAsync();
      setState(st);

      if (Platform.OS === 'android') {
        const airplaneMode = await Network.isAirplaneModeEnabledAsync();
        setIsInAirplaneMode(airplaneMode);
      }
    }
    loadNetwork();
  }, []);

  return (
    <Screen>
      <ThemedText>IP: {ip}</ThemedText>
      <ThemedText>state: {JSON.stringify(state, null, 2)}</ThemedText>
      {Platform.OS === 'android' && <ThemedText>Android only - Is in airplane mode: {isInAirplaneMode ? 'True' : 'False'}</ThemedText>}
    </Screen>
  );
}
