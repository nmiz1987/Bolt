import { KeyboardAvoidingViewProps, ScrollViewProps, ViewProps } from 'react-native';
import { StatusBarProps } from 'expo-status-bar';
import { ExtendedEdge } from '@/hooks/useSafeAreaInsetsStyle';

export interface ScreenProps {
  noScroll?: boolean;
  statusBarColor?: StatusBarProps['style'];
  style?: ViewProps['style'];
  contentContainerStyle?: ScrollViewProps['style'];
  noPadding?: boolean;
  keyboardOffset?: number;
  KeyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
  safeAreaEdges?: ExtendedEdge[];
  children: React.ReactNode;
}
