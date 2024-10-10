import { Box } from './Box';
import { render, screen, userEvent } from '@testing-library/react-native';

describe('Box Component', () => {
  it('renders correctly without scroll without onPress', () => {
    render(<Box />);
    const element = screen.getByTestId('view');
    expect(element).toBeTruthy();
  });

  it('renders correctly without scroll with onPress', () => {
    const onPressMock = jest.fn();
    render(<Box onPress={onPressMock} />);
    const element = screen.getByTestId('pressable-without-feedback');
    expect(element).toBeTruthy();
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('renders correctly with scroll without onPress', () => {
    render(<Box scroll />);
    const element = screen.getByTestId('scroll-view');
    expect(element).toBeTruthy();
  });

  it('renders correctly with scroll with onPress', () => {
    const onPressMock = jest.fn();
    render(<Box scroll onPress={onPressMock} />);
    const element = screen.getByTestId('pressable-without-feedback');
    expect(element).toBeTruthy();
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('renders Pressable', () => {
    const onPressMock = jest.fn();
    render(<Box withoutFeedback onPress={onPressMock} />);
    const element = screen.getByTestId('pressable');
    expect(element).toBeTruthy();
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('should call onPress', async () => {
    const onPressMock = jest.fn();
    const user = userEvent.setup();

    render(<Box onPress={onPressMock} />);
    const element = screen.getByTestId('pressable-without-feedback');
    // fireEvent.press(element);
    await user.press(element);
    expect(onPressMock).toHaveBeenCalled();
  });
});
