import { ErrorBoundaryProps } from 'expo-router';
import { Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from '../Box/Box';
import { Spacer } from '../Spacer';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { t } from '@/i18n';

export function CustomErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  const insets = useSafeAreaInsets();
  return (
    <Box
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: insets.top + 20,
        paddingBottom: insets.bottom + 20,
      }}>
      <ThemedText variant="h2" style={{ textAlign: 'center' }}>
        {t('error_boundary.title')}
      </ThemedText>
      <Spacer size="lg" />
      <ThemedText variant="h4">{t('error_boundary.message')}</ThemedText>
      <ThemedText variant="bodyText1">{error.message}</ThemedText>
      <Spacer />
      <ThemedText variant="h4">{t('error_boundary.stack')}</ThemedText>
      <Box scroll>
        <ThemedText>{JSON.stringify(error.stack, null, 2)}</ThemedText>
      </Box>
      <Spacer />
      <Button title={t('error_boundary.button')} onPress={retry} />
    </Box>
  );
}
