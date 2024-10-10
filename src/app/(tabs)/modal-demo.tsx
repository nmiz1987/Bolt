import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { Link } from 'expo-router';
import { Screen } from '@/components/Screen/Screen';
import { Spacer } from '@/components/Spacer';

export default function TabOneScreen() {
  return (
    <Screen contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Tab One</ThemedText>
      <Spacer size="md" />
      <Link href="/modal">
        <ThemedText variant="link">Open Modal</ThemedText>
      </Link>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
