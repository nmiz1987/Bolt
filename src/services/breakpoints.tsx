import { useWindowDimensions } from 'react-native';

export const breakpointMedium = 429;
export const breakpointLarge = 600;

export const large = 'large';
export const medium = 'medium';

const breakpointForWidth = (width: number) => (width >= breakpointLarge ? large : medium);

export const getDrawerTypeForBreakpoint = (breakpoint: string) => (breakpoint === large ? 'permanent' : 'front');

export function useBreakpoint() {
  const { width } = useWindowDimensions();
  return breakpointForWidth(width);
}
