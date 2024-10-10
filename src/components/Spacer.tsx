import { Spacing, spacing } from '@/theme/spacing';
import { Box } from './Box/Box';
import { StyleSheet } from 'react-native';

export interface SpacerProps {
  size?: Spacing;
  isVertical?: boolean;
}

export function Spacer({ size = 'md', isVertical = true }: SpacerProps) {
  const styles = createStyle(size, isVertical);

  return <Box style={styles.container} />;
}

export const createStyle = (size: Spacing, isVertical: boolean) => {
  return StyleSheet.create({
    container: {
      ...(isVertical ? { marginTop: spacing[size], width: '100%' } : { height: '100%', marginStart: spacing[size] }),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
