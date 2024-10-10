import AsyncStorage from '@react-native-async-storage/async-storage';
import { localStorage } from './index';

// fixtures
const VALUE_OBJECT = { x: 1 };
const VALUE_STRING = JSON.stringify(VALUE_OBJECT);

beforeEach(() => (AsyncStorage.getItem as jest.Mock).mockReturnValue(Promise.resolve(VALUE_STRING)));
afterEach(() => jest.clearAllMocks());

describe('Storage', () => {
  test('load', async () => {
    const value = await localStorage.loadJSONAsync('something');
    expect(value).toEqual(JSON.parse(VALUE_STRING));
  });

  test('loadString', async () => {
    const value = await localStorage.loadStringAsync('something');
    expect(value).toEqual(VALUE_STRING);
  });

  test('save', async () => {
    await localStorage.saveJSONAsync('something', VALUE_OBJECT);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('something', VALUE_STRING);
  });

  test('saveString', async () => {
    await localStorage.saveStringAsync('something', VALUE_STRING);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('something', VALUE_STRING);
  });

  test('remove', async () => {
    await localStorage.removeAsync('something');
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith('something');
  });

  test('clear', async () => {
    await localStorage.clearAsync();
    expect(AsyncStorage.clear).toHaveBeenCalledWith();
  });
});
