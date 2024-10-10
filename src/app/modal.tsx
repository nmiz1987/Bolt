import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { Stack } from 'expo-router';
import { ChooseLanguageRadioList } from '@/components/ChooseLanguageRadioList/ChooseLanguageRadioList';
import { Screen } from '@/components/Screen/Screen';
import { BackButton } from '@/components/BackButton';

export default function ModalScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => <BackButton />,
        }}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Screen contentContainerStyle={styles.container}>
        <ThemedText style={styles.title}>Change language</ThemedText>
        <ChooseLanguageRadioList />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
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
