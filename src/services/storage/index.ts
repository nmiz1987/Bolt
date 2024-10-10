import { Platform } from 'react-native';
import { nativeStorage } from './native';
import { webStorage } from './web';

function platformStorage() {
  switch (Platform.OS) {
    case 'web':
      return webStorage;
    default:
      return nativeStorage;
  }
}

export const localStorage = {
  /**
   * Loads a string from storage.
   * @param key The key to fetch.
   * @returns The string or null if it doesn't exist.
   */
  loadStringAsync: (key: string) => platformStorage().loadStringAsync(key),
  /**
   * Saves a string to storage.
   * @param key The key to fetch.
   * @param value The value to store.
   * @returns true if successful, false otherwise.
   */
  saveStringAsync: (key: string, value: string) => platformStorage().saveStringAsync(key, value),
  /**
   * Removes something from storage.
   * @param key The key to kill.
   * @returns true if successful, false otherwise.
   */
  removeAsync: (key: string) => platformStorage().removeAsync(key),
  /**
   * Loads something from storage and runs it thru JSON.parse.
   * @param key The key to fetch.
   * @returns The parsed object or null if it doesn't exist.
   */
  loadJSONAsync: (key: string) => platformStorage().loadJSONAsync(key),
  /**
   * Saves an object to storage.
   * @param key The key to fetch.
   * @param value The value to store.
   * @returns true if successful, false otherwise.
   */
  saveJSONAsync: (key: string, value: unknown) => platformStorage().saveJSONAsync(key, value),
  /**
   * Burn it all to the ground.
   * @returns true if successful, false otherwise.
   */
  clearAsync: () => platformStorage().clearAsync(),
};
