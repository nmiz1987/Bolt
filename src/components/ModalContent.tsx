import { Box } from '@/components/Box/Box';
import { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function ModalContent() {
  const insets = useSafeAreaInsets();
  const data = useMemo(
    () =>
      Array(100)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );

  return (
    <Box style={[styles.contentContainer, { paddingBottom: insets.bottom }]}>
      <Text style={styles.title}>Hello!</Text>
      {data.map(item => (
        <Text key={item}>{item}</Text>
      ))}
    </Box>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    letterSpacing: 0.5,
    fontWeight: '900',
  },
});
