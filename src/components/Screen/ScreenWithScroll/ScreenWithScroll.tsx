import { forwardRef } from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, ViewProps } from 'react-native';

export type ScreenWithScrollProps = ViewProps & {
  style?: ViewProps['style'];
  contentContainerStyle?: ScrollViewProps['style'];
  noPadding?: boolean;
};

export const ScreenWithScroll = forwardRef((props: ScreenWithScrollProps, ref: React.ForwardedRef<ScrollView>) => {
  const { style, children, noPadding, contentContainerStyle, ...otherProps } = props;

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={[styles.scrollView, style]}
      contentContainerStyle={[styles.scrollViewContentContainer, noPadding ? { padding: 0 } : {}, contentContainerStyle]}
      ref={ref}
      {...otherProps}>
      {children}
    </ScrollView>
  );
});

ScreenWithScroll.displayName = 'ScreenWithScroll';

const styles = StyleSheet.create({
  // placeholder for feature options
  scrollView: {},
  scrollViewContentContainer: {
    padding: 16,
    minHeight: '100%',
  },
});
