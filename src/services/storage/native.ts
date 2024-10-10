/**
 * You can replace the native storage with package with the one you want
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const nativeStorage = {
  async loadStringAsync(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch {
      return null;
    }
  },

  async loadJSONAsync(key: string): Promise<unknown | null> {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data) return JSON.parse(data);
      return null;
    } catch {
      return null;
    }
  },

  async saveStringAsync(key: string, value: string): Promise<boolean> {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },

  async saveJSONAsync(key: string, value: unknown): Promise<boolean> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },

  async removeAsync(key: string): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },

  async clearAsync(): Promise<boolean> {
    try {
      await AsyncStorage.clear();
      return true;
    } catch {
      return false;
    }
  },
};
