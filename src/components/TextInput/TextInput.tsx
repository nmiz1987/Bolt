import { useRef, useState } from 'react';
import { Button, InputAccessoryView, Platform, TextInput as RNTextInput } from 'react-native';
import { TextInputProps } from './TextInput.interfaces';
import { createStyle } from './TextInput.styles';
import { isRTL, t } from '@/i18n';
import { Box } from '../Box/Box';
import { Spacer } from '../Spacer';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { useCurrentColorScheme } from '@/hooks/useCurrentColorScheme';

/**
 *
 * Notice the start and end icons - because the right and left are different in RTL, we need to handle them as start and end icons base of the writing direction.
 */

export function TextInput({ label, caption, startIcon, endIcon, onStartIconPress, onEndIconPress, isError, ...props }: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);
  const colors = useCurrentColorScheme();
  const styles = createStyle(colors);
  const [isInputFocus, setIsInputFocus] = useState(false);

  return (
    <Box withoutFeedback onPress={() => inputRef.current?.focus()}>
      {label && (
        <>
          <ThemedText>{label}</ThemedText>
          <Spacer size="xs" />
        </>
      )}
      {Platform.OS === 'ios' && (
        <InputAccessoryView nativeID="inputID">
          <Button title={t('app.keyboard')} onPress={() => inputRef?.current?.blur()} />
        </InputAccessoryView>
      )}
      <Box style={[styles.container, isInputFocus && styles.focus, !isInputFocus && isError && styles.error]}>
        {startIcon && (
          <Box onPress={() => onStartIconPress?.()} withoutFeedback style={styles.startIcon}>
            {startIcon}
          </Box>
        )}
        <RNTextInput
          ref={inputRef}
          inputAccessoryViewID="inputID"
          style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }, props.style && props.style]}
          onFocus={() => setIsInputFocus(true)}
          onBlur={() => setIsInputFocus(false)}
          placeholderTextColor={styles.placeholderColor.color}
          {...props}
        />
        {endIcon && (
          <Box onPress={() => onEndIconPress?.()} withoutFeedback style={styles.endIcon}>
            {endIcon}
          </Box>
        )}
      </Box>
      {caption && <ThemedText>{caption}</ThemedText>}
    </Box>
  );
}
