import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { Box } from '../Box/Box';
import { ISwitchProps } from './Switch.interfaces';
import { LayoutAnimation } from 'react-native';
import { createStyle } from './Switch.styles';
import { useCurrentColorScheme } from '@/hooks/useCurrentColorScheme';

export function Switch({ isDisable = false, onPressHandler, isOn, offLabel, onLabel }: ISwitchProps) {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  const colors = useCurrentColorScheme();
  const styles = createStyle(colors);

  return (
    <Box style={styles.container} withoutFeedback onPress={() => onPressHandler?.()}>
      {typeof onLabel === 'string' ? <ThemedText>{onLabel}</ThemedText> : onLabel}
      <Box style={[styles.switchContainer, isOn && { backgroundColor: colors['basic-500'], justifyContent: 'flex-end' }]}>
        <Box style={styles.thumb} />
      </Box>
      {typeof offLabel === 'string' ? <ThemedText>{offLabel}</ThemedText> : offLabel}
    </Box>
  );
}
