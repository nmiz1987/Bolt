import { useEffect, useCallback, useRef } from 'react';

/**
 * A common react custom hook to check if the component is mounted.
 * @returns {() => boolean} - A function that returns true if the component is mounted.
 */
export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}

/**
 EXPLANATION:
 The provided code defines a custom React hook named useIsMounted. This hook is designed to help determine whether a component is currently mounted in the React component lifecycle. It can be particularly useful for avoiding memory leaks or performing cleanup tasks when a component is unmounted.

The hook begins by importing three essential functions from React: useEffect, useCallback, and useRef. The useRef function is used to create a mutable reference object, isMounted, which is initialized to false. This reference will be used to track the mounted state of the component.

Within the useEffect hook, the isMounted.current value is set to true when the component is mounted. The useEffect hook also returns a cleanup function that sets isMounted.current to false when the component is unmounted. The empty dependency array [] ensures that this effect runs only once, mimicking the behavior of componentDidMount and componentWillUnmount lifecycle methods in class components.

Finally, the hook returns a memoized callback function created using useCallback. This function, when called, returns the current value of isMounted.current, indicating whether the component is mounted. The empty dependency array [] passed to useCallback ensures that the returned function is stable and does not change between renders.

In summary, useIsMounted is a custom hook that provides a reliable way to check if a component is mounted, helping developers manage component lifecycle events more effectively.
 */
