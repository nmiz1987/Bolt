import { useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';
/**
 * With this hook you can listen to changes in the app state (if the app is in the foreground or background).
 */
export function useAppStateEffect(callback: (state: AppStateStatus) => void) {
  useEffect(() => {
    function onChange(newState: AppStateStatus) {
      callback(newState);
    }

    const subscription = AppState.addEventListener('change', onChange);

    // Fire initial state
    onChange(AppState.currentState);

    return () => {
      subscription.remove();
    };
  }, [callback]);
}
