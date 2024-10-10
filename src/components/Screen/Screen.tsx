import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import { ScreenProps } from './Screen.interfaces';
import { useHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaInsetsStyle } from '@/hooks/useSafeAreaInsetsStyle';
import { ScreenWithScroll } from './ScreenWithScroll/ScreenWithScroll';
import { ScreenWithoutScroll } from './ScreenWithoutScroll/ScreenWithoutScroll';
import { Box } from '../Box/Box';

export const Screen = React.forwardRef((props: ScreenProps, ref: React.ForwardedRef<ScrollView>) => {
  const {
    noScroll,
    statusBarColor,
    style,
    contentContainerStyle,
    noPadding,
    children,
    keyboardOffset = 0,
    KeyboardAvoidingViewProps,
    safeAreaEdges,
    ...otherProps
  } = props;
  const headerHeight = useHeaderHeight();
  const containerInsets = useSafeAreaInsetsStyle(safeAreaEdges);

  return (
    <Box style={[styles.containerStyle, containerInsets]} {...otherProps}>
      {Platform.OS !== 'web' && <StatusBar style={statusBarColor ?? 'auto'} />}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight + keyboardOffset}
        {...KeyboardAvoidingViewProps}
        style={[{ flex: 1 }, KeyboardAvoidingViewProps?.style]}>
        {noScroll ? (
          <ScreenWithoutScroll style={style} noPadding={noPadding}>
            {children}
          </ScreenWithoutScroll>
        ) : (
          <ScreenWithScroll style={style} noPadding={noPadding} contentContainerStyle={contentContainerStyle}>
            {children}
          </ScreenWithScroll>
        )}
      </KeyboardAvoidingView>
    </Box>
  );
});

Screen.displayName = 'Screen';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
