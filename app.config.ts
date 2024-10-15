import type { ConfigContext, ExpoConfig } from 'expo/config';

/**
 * Use ts-node here so we can use TypeScript for our Config Plugins
 * and not have to compile them to JavaScript
 */
require('ts-node/register');

// These values are tied to EAS. If you would like to use EAS Build or Update
// on this project while playing with it, then remove these values and run
// `eas init` and `eas update:configure` to get new values for your account.
const EAS_UPDATE_URL = 'YOUR_EAS_UPDATE_URL';
// const EAS_PROJECT_ID = 'YOUR_EAS_PROJECT_ID';
const EAS_APP_OWNER = 'YOUR_EAS_APP_OWNER';
const slug = 'Bolt';
export const APP_NAME = 'Bolt';
const APP_NAME_BUNDLE = 'Bolt';

// Update this value to something unique in order to be able to build for a
// physical iOS device.
const BUNDLE_ID_PREFIX = `com.${APP_NAME_BUNDLE}.${EAS_APP_OWNER}`;

const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getBundleID = () => {
  if (IS_DEV) return `${BUNDLE_ID_PREFIX}.dev`;
  if (IS_PREVIEW) return `${BUNDLE_ID_PREFIX}.preview`;
  return `${BUNDLE_ID_PREFIX}`;
};
const getAppName = () => {
  if (IS_DEV) return `${APP_NAME} (Dev)`;
  if (IS_PREVIEW) return `${APP_NAME} (Preview)`;
  return APP_NAME;
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug,
  scheme: slug,
  owner: EAS_APP_OWNER,
  version: '1.0.0',
  orientation: 'default',
  icon: './src/assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#2b2863',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: getBundleID(),
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    icon: './src/assets/images/adaptive-icon.png',
    package: getBundleID(),
    adaptiveIcon: {
      foregroundImage: './src/assets/images/adaptive-icon.png',
      monochromeImage: './src/assets/images/adaptive-icon.png',
      backgroundColor: '#2b2863',
    },
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './src/assets/images/favicon.png',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#2b2863',
    },
  },
  plugins: ['expo-router', 'expo-localization', require('./plugins/withSplashScreen').withSplashScreen],
  extra: {
    // eas: {
    //   projectId: EAS_PROJECT_ID,
    // },
  },
  updates: {
    enabled: true,
    checkAutomatically: 'ON_LOAD',
    fallbackToCacheTimeout: 0,
    url: EAS_UPDATE_URL,
  },
  experiments: {
    typedRoutes: true,
  },
});
