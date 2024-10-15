import { PropsWithChildren, useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, Keyboard, KeyboardEvent, Platform, TextInput, View } from 'react-native';

/**
 * This is a reimplemented version of KeyboardAvoidingView from react-native.
 * Instead of using the native KeyboardAvoidingView, this component uses an Animated.View to move the children up when the keyboard is shown.
 */

type KeyboardAvoidViewProps = PropsWithChildren<{
  yOffset?: number;
  style?: View['props']['style'];
}>;

export function KeyboardAvoidView({ children, yOffset = 10, style }: KeyboardAvoidViewProps) {
  const ref = useRef(null);
  const kbOffsetAnim = useRef(new Animated.Value(0)).current;

  const screenDimensions = Dimensions.get('window').height;

  useEffect(() => {
    const kbShow = Keyboard.addListener(
      // @ts-ignore
      Platform.select({
        ios: 'keyboardWillShow',
        android: 'keyboardDidShow',
      }),
      onKeyboardShow,
    );

    const kbHide = Keyboard.addListener(
      // @ts-ignore
      Platform.select({
        ios: 'keyboardWillHide',
        android: 'keyboardDidHide',
      }),
      onKeyboardHide,
    );

    return () => {
      kbShow.remove();
      kbHide.remove();
    };
  });

  const onKeyboardHide = () => {
    updateOffset(0);
  };

  const onKeyboardShow = (e: KeyboardEvent) => {
    const textRef = TextInput.State.currentlyFocusedInput();
    textRef && measureTextInput(textRef, e);
  };

  const measureTextInput = (textRef: any, e: KeyboardEvent) => {
    textRef.measureInWindow((x: number, y: number, width: number, height: number) => {
      const keyboardHeight = e.endCoordinates.height;
      const elementBottom = y + height;
      const keyboardTop = screenDimensions - keyboardHeight;
      if (elementBottom > keyboardTop) {
        const offset = elementBottom - keyboardTop + yOffset;
        if (Platform.OS === 'android') {
          updateOffset(Math.min(offset, yOffset));
        } else {
          updateOffset(offset);
        }
      }
    });
  };

  const updateOffset = (toValue: number) => {
    Animated.timing(kbOffsetAnim, {
      toValue: -toValue,
      duration: 100,
      useNativeDriver: Platform.OS !== 'web',
      easing: Easing.out(Easing.ease),
    }).start();
  };

  if (Platform.OS === 'web') return { children };

  return (
    <Animated.View ref={ref} style={[{ transform: [{ translateY: kbOffsetAnim }] }, style]}>
      {children}
    </Animated.View>
  );
}
