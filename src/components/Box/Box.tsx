import { forwardRef } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { BoxProps } from './Box.interfaces';
import { useThemeColor } from '@/hooks/useThemeColor';

export const Box = forwardRef((props: BoxProps, ref: any): JSX.Element => {
  const { children, onPress, withoutFeedback, style, scroll, horizontal, lightColor, darkColor, activeOpacity, ...otherProps } = props;

  const backgroundColor = useThemeColor({
    light: lightColor,
    dark: darkColor,
  });

  const isBackgroundColor = typeof backgroundColor !== 'undefined';

  const ViewBox = (
    <View testID="view" ref={props.ref} style={[style, isBackgroundColor && { backgroundColor }]} {...otherProps}>
      {children}
    </View>
  );
  const ScrollBox = (
    <ScrollView testID="scroll-view" ref={ref} style={[style, isBackgroundColor && { backgroundColor }]} {...otherProps}>
      {props.children}
    </ScrollView>
  );

  const PressBox = (
    <Pressable testID="pressable" ref={props.ref} style={[style, isBackgroundColor && { backgroundColor }]} onPress={props.onPress} {...props}>
      {props.children}
    </Pressable>
  );

  const TouchBox = (
    <Pressable
      testID="pressable-without-feedback"
      ref={props.ref}
      style={({ pressed }) => [style, isBackgroundColor && { backgroundColor }, pressed && { opacity: activeOpacity ?? 0.2 }]}
      onPress={props.onPress}
      {...props}>
      {props.children}
    </Pressable>
  );

  if (props?.onPress) {
    if (props?.withoutFeedback) return PressBox;
    return TouchBox;
  } else {
    if (props?.scroll) return ScrollBox;
    return ViewBox;
  }
});

Box.displayName = 'Box';
