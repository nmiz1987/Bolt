import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { Screen } from '@/components/Screen/Screen';
import { Spacer } from '@/components/Spacer';
import { Link } from 'expo-router';

export default function StackScreenOne() {
  return (
    <Screen>
      <ThemedText style={styles.title}>Stack Screen one</ThemedText>
      <Spacer size="md" />
      <Link href="/stack-two">
        <ThemedText variant="link">Move to screen two and see the back button appears</ThemedText>
      </Link>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
