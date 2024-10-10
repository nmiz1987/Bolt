import { useCurrentColorScheme } from '@/hooks/useCurrentColorScheme';
import { Box } from '../Box/Box';
import { createStyle } from './Radio.styles';

export interface RadioProps {
  status?: boolean;
}

export function Radio({ status }: RadioProps) {
  const colors = useCurrentColorScheme();
  const styles = createStyle(colors);

  return <Box style={[styles.container, status ? styles.outerActive : styles.outerDeactivate]}>{status && <Box style={styles.innerActive} />}</Box>;
}
