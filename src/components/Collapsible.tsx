import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { LayoutAnimation, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { isRTL } from '@/i18n';
import { Box } from './Box/Box';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { useCurrentColorScheme } from '@/hooks/useCurrentColorScheme';

type CollapsibleProps = PropsWithChildren<{ title: string }>;

export function Collapsible({ children, title }: CollapsibleProps) {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  const [isOpen, setIsOpen] = useState(false);
  const colors = useCurrentColorScheme();

  const arrowStyle = useAnimatedStyle(() => {
    const rtlAdjustment = isRTL ? -1 : 1;
    const rotateValue = rtlAdjustment * (isOpen ? 90 : 0);
    const rotateDegree = `${rotateValue}deg`;

    return {
      transform: [{ rotate: withTiming(rotateDegree) }],
    };
  });

  return (
    <Box>
      <Box style={styles.heading} onPress={() => setIsOpen(value => !value)}>
        <Animated.View style={arrowStyle} pointerEvents={isOpen ? 'auto' : 'none'}>
          <Ionicons name={isRTL ? 'chevron-back-outline' : 'chevron-forward-outline'} size={18} color={colors.icon} />
        </Animated.View>
        <ThemedText variant="h5">{title}</ThemedText>
      </Box>
      {isOpen && <Animated.View style={styles.content}>{children}</Animated.View>}
    </Box>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginStart: 24,
  },
});
