import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { Screen } from '@/components/Screen/Screen';
import { Spacer } from '@/components/Spacer';
import { Link } from 'expo-router';

export default function StackScreenOne() {
  return (
    <Screen>
      <ThemedText style={styles.title}>Stack Screen two</ThemedText>
      <Spacer size="md" />
      <Link href="/stack-one">
        <ThemedText variant="link">Go back</ThemedText>
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
