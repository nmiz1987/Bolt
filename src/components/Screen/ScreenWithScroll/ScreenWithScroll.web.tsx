import { CenterColumn } from '@/components/CenterColumn';
import { forwardRef } from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, ViewProps } from 'react-native';

export type ScreenWithScrollProps = ViewProps & {
  style?: ViewProps['style'];
  contentContainerStyle?: ScrollViewProps['style'];
};

export const ScreenWithScroll = forwardRef((props: ScreenWithScrollProps, ref: React.ForwardedRef<ScrollView>) => {
  const { style, children, contentContainerStyle, ...otherProps } = props;

  return (
    <CenterColumn>
      <ScrollView style={styles.scrollView} contentContainerStyle={[styles.scrollViewContentContainer, style]} ref={ref} {...otherProps}>
        {children}
      </ScrollView>
    </CenterColumn>
  );
});

ScreenWithScroll.displayName = 'ScreenWithScroll';

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  scrollViewContentContainer: {
    padding: 16,
    minHeight: '100%',
  },
});
