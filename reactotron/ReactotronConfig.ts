import { queryClient } from '@/services/network/queryClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules, Platform } from 'react-native';
import { Reactotron } from './ReactotronClient';
import { QueryClientManager, reactotronReactQuery } from 'reactotron-react-query';

const queryClientManager = new QueryClientManager({
  // @ts-ignore
  queryClient,
});

const reactotron = Reactotron.use(reactotronReactQuery(queryClientManager))
  .setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: require('../package.json').name ?? 'Bolt',
    onDisconnect: () => queryClientManager.unsubscribe(),
  }); // controls connection & communication settings

if (Platform.OS !== 'web') {
  reactotron.setAsyncStorageHandler?.(AsyncStorage);
  reactotron.useReactNative({
    // add all built-in react native plugins
    networking: {
      ignoreUrls: /symbolicate/,
    },
  });
}

/**
 * Reactotron allows you to define custom commands that you can run
 * from Reactotron itself, and they will run in your app.
 *
 * Define them in the section below with `onCustomCommand`. Use your
 * creativity -- this is great for development to quickly and easily
 * get your app into the state you want.
 *
 * NOTE: If you edit this file while running the app, you will need to do a full refresh
 * or else your custom commands won't be registered correctly.
 */
reactotron.onCustomCommand({
  title: 'Show Dev Menu',
  description: 'Opens the React Native dev menu',
  command: 'showDevMenu',
  handler: () => {
    Reactotron.log('Showing React Native dev menu');
    NativeModules.DevMenu.show();
  },
});

/**
 * We're going to add `console.tron` to the Reactotron object.
 * Now, anywhere in our app in development, we can use Reactotron like so:
 *
 * ```
 * if (__DEV__) {
 *  console.tron.display({
 *    name: 'JOKE',
 *    preview: 'What's the best thing about Switzerland?',
 *    value: 'I don't know, but the flag is a big plus!',
 *    important: true
 *  })
 * }
 * ```
 *
 * Use this power responsibly! :)
 */
console.tron = reactotron;

/**
 * We tell typescript about our dark magic
 *
 * You can also import Reactotron yourself from ./reactotronClient
 * and use it directly, like Reactotron.log('hello world')
 */
declare global {
  interface Console {
    /**
     * Reactotron client for logging, displaying, measuring performance, and more.
     * @see https://github.com/infinitered/reactotron
     * @example
     * if (__DEV__) {
     *  console.tron.display({
     *    name: 'JOKE',
     *    preview: 'What's the best thing about Switzerland?',
     *    value: 'I don't know, but the flag is a big plus!',
     *    important: true
     *  })
     * }
     */
    tron: typeof reactotron;
  }
}

/**
 * Now that we've setup all our Reactotron configuration, let's connect!
 */
reactotron.connect();

export { Reactotron };
