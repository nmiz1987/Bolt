import { Screen } from '@/components/Screen/Screen';
import { TextInput } from 'react-native';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { Spacer } from '@/components/Spacer';

export default function InputTextNonScrollScreen() {
  return (
    <Screen safeAreaEdges={['bottom']} noScroll style={{ justifyContent: 'flex-end' }}>
      <ThemedText variant="defaultSemiBold">Watch the input text move on focus:</ThemedText>
      <ThemedText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in esse, quibusdam eius delectus unde commodi rerum! Quis omnis soluta, ex
        aliquid culpa fuga eveniet laboriosam obcaecati, consequatur, atque ipsum!
      </ThemedText>
      <Spacer size="sm" />
      <TextInput
        placeholder="Click me..."
        placeholderTextColor="black"
        style={{ height: 40, borderWidth: 1, borderColor: 'gray', borderRadius: 6 }}
      />
      <Spacer size="sm" />
      <ThemedText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in esse, quibusdam eius delectus unde commodi rerum! Quis omnis soluta, ex
        aliquid culpa fuga eveniet laboriosam obcaecati, consequatur, atque ipsum!
      </ThemedText>
    </Screen>
  );
}
