import { Platform } from 'react-native';

// Our local-server.ts is running on port 3000

function getBaseUrl() {
  if (__DEV__) {
    if (Platform.OS === 'android') {
      // Android emulator has a different IP address for localhost
      return 'http://10.0.2.2:3000/';
    } else {
      return 'http://localhost:3000/';
    }
  } else {
    return process.env.PRODUCTION_API_URL;
  }
}

export const baseUrl = getBaseUrl();
