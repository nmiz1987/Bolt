import { render, screen } from '@testing-library/react-native';
import { ThemedText } from './ThemedText';

const testText = 'Test string';

describe('ThemedText', () => {
  it('should render the component', () => {
    render(<ThemedText>{testText}</ThemedText>);
    expect(screen.getByText(testText)).toBeDefined();
  });
});
