import { TextInput } from 'react-native';

type RNTextInputProps = TextInput['props'];

export type TextInputProps = RNTextInputProps & {
  label?: string;
  caption?: string;
  startIcon?: React.ReactNode;
  onStartIconPress?: () => void;
  endIcon?: React.ReactNode;
  onEndIconPress?: () => void;
  isError?: boolean;
};
