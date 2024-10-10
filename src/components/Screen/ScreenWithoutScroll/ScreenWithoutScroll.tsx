import { Box } from '@/components/Box/Box';
import { Keyboard, StyleSheet, ViewProps } from 'react-native';

export type ScreenWithoutScrollProps = ViewProps & {
  style?: ViewProps['style'];
  noPadding?: boolean;
  children: React.ReactNode;
};

export function ScreenWithoutScroll(props: ScreenWithoutScrollProps) {
  const { noPadding, style, children, ...otherProps } = props;

  return (
    <Box onPress={Keyboard.dismiss} withoutFeedback style={[styles.box, noPadding ? { padding: 0 } : {}, style]} {...otherProps}>
      {children}
    </Box>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 16,
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
