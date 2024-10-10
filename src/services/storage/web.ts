// WARNING: using localStorage to store keys has significant security risks.
// It is safer to host a React app in a server-rendered webapp and store tokens
// in cookie-secured sessions.

export const webStorage = {
  async loadStringAsync(key: string): Promise<string | null> {
    try {
      return Promise.resolve(window.localStorage.getItem(key));
    } catch {
      return Promise.resolve(null);
    }
  },

  async loadJSONAsync(key: string): Promise<unknown | null> {
    try {
      const data = window.localStorage.getItem(key);
      if (data) return Promise.resolve(JSON.parse(data));
      return Promise.resolve(null);
    } catch {
      return Promise.resolve(null);
    }
  },

  async saveStringAsync(key: string, value: string): Promise<boolean> {
    try {
      window.localStorage.setItem(key, value);
      return Promise.resolve(true);
    } catch {
      return Promise.resolve(false);
    }
  },

  async saveJSONAsync(key: string, value: unknown): Promise<boolean> {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return Promise.resolve(true);
    } catch {
      return Promise.resolve(false);
    }
  },

  async removeAsync(key: string): Promise<boolean> {
    try {
      window.localStorage.removeItem(key);
      return Promise.resolve(true);
    } catch {
      return Promise.resolve(false);
    }
  },

  async clearAsync(): Promise<boolean> {
    try {
      // BEWARE: this will clear all storage for the domain.
      window.localStorage.clear();
      return Promise.resolve(true);
    } catch {
      return Promise.resolve(false);
    }
  },
};
