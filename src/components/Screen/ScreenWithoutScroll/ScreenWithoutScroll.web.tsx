import { CenterColumn } from '@/components/CenterColumn';

export interface ScreenWithoutScrollProps {
  children: React.ReactNode;
}

export function ScreenWithoutScroll({ children }: ScreenWithoutScrollProps) {
  return <CenterColumn>{children}</CenterColumn>;
}
