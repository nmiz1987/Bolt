import { Platform, Pressable, PressableProps } from 'react-native';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { createStyle } from './Button.styles';
import { useCurrentColorScheme } from '@/hooks/useCurrentColorScheme';
import * as Haptics from 'expo-haptics';

type ButtonProps = {
  title: string;
  onPress: () => void;
  impact?: boolean | Haptics.ImpactFeedbackStyle;
} & PressableProps;

export function Button({ title, onPress, disabled = false, impact = true, ...otherProps }: ButtonProps) {
  const colors = useCurrentColorScheme();
  const styles = createStyle(colors);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled }}
      onPress={() => {
        if (disabled) return;
        if (impact && Platform.OS !== 'web') {
          Haptics.impactAsync(impact === true ? Haptics.ImpactFeedbackStyle.Light : impact);
        }
        onPress();
      }}
      {...otherProps}
      style={({ pressed }) => [styles.button, !disabled && styles.shadow, disabled && styles.disableBtn, pressed && { opacity: disabled ? 1 : 0.6 }]}>
      <ThemedText variant="h5" style={[styles.buttonText, disabled && styles.disableTxt]}>
        {title}
      </ThemedText>
    </Pressable>
  );
}

Button.displayName = 'Button';
