import { useNetInfo } from '@react-native-community/netinfo';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, interpolate } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from './Box/Box';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { colors } from '@/theme/colors';
import { t } from '@/i18n';

const minHeight = 0;

export function OfflineBanner() {
  const netInfo = useNetInfo();
  const isOffline = netInfo.isInternetReachable === false;
  const insets = useSafeAreaInsets();
  const height = useSharedValue(0);
  const maxHeight = 60;

  useEffect(() => {
    if (isOffline) {
      height.value = withTiming(maxHeight);
    } else {
      height.value = withTiming(minHeight);
    }
  }, [isOffline, height, maxHeight]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(height.value, [minHeight, maxHeight], [0, 1]),
    height: height.value,
    marginTop: interpolate(height.value, [minHeight, maxHeight], [minHeight, -insets.bottom + 4]),
    overflow: 'hidden',
  }));

  return (
    <Box style={styles.mainContainer}>
      <Animated.View style={animatedStyle}>
        <Box lightColor={colors.light['basic-400']} darkColor={colors.light['basic-900']} style={styles.textContainer}>
          <ThemedText variant="h3" style={styles.text}>
            {t('app.network_error')}
          </ThemedText>
        </Box>
      </Animated.View>
    </Box>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  textContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingVertical: 4,
    height: '100%',
  },
  text: {
    fontWeight: 'bold',
  },
});
