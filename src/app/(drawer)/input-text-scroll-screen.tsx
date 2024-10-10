import { Screen } from '@/components/Screen/Screen';
import { TextInput } from 'react-native';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';

export default function InputTextScrollScreen() {
  return (
    <Screen>
      <ThemedText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur impedit necessitatibus distinctio vitae quaerat molestias voluptatum
        aspernatur. Recusandae perspiciatis voluptatem cupiditate vero quisquam, ipsa, distinctio perferendis impedit non ex minima.Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Pariatur impedit necessitatibus distinctio vitae quaerat molestias voluptatum aspernatur. Recusandae
        perspiciatis voluptatem cupiditate vero quisquam, ipsa, distinctio perferendis impedit non ex minima.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Pariatur impedit necessitatibus distinctio vitae quaerat molestias voluptatum aspernatur. Recusandae perspiciatis voluptatem
        cupiditate vero quisquam, ipsa, distinctio perferendis impedit non ex minima.Lorem ipsum dolor, sit amesit amet consectetur adipisicing elit.
        Pariatur impedit necessitatibus distinctio vitae quaerat molestias voluptatum aspernatur. Recusandae perspiciatis voluptatem cupiditate vero
        quisquam, ipsa, distinctio perferendis impedit non ex minima.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur impedit
        necessitatibus distinctio vitae quaerat molestias voluptatum aspernatur. Recusandae perspiciatis voluptatem cupiditate vero quisquam, ipsa,
        distinctio perferendis impedit non ex minima.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur impedit necessitatibus
        distinctio vitae quaerat molestias voluptatum aspernatur. Recusandae perspiciatis voluptatem cupiditate vero quisqu ex minima.
      </ThemedText>
      <ThemedText variant="defaultSemiBold">Watch the input text move on focus:</ThemedText>
      <TextInput
        placeholder="Click me..."
        placeholderTextColor="black"
        style={{ height: 40, borderWidth: 1, borderColor: 'gray', borderRadius: 6 }}
      />
    </Screen>
  );
}
