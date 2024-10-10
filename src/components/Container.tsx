import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ContainerProps = PropsWithChildren<{}>;

export function Container({ children }: ContainerProps) {
  return <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
