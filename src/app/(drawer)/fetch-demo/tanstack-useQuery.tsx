import { Button } from '@/components/Button/Button';
import { Screen } from '@/components/Screen/Screen';
import { Spacer } from '@/components/Spacer';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { useQueryCustom } from '@/hooks/useQueryCustom';
import { networkService } from '@/services/network/networkService';
// import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function TanstackUseQueryScreen() {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  // const { data, error, isError, isLoading } = useQuery({
  //   enabled: !!selectedStatus,
  //   queryKey: ['get-data', selectedStatus],
  //   queryFn: async ({ signal }) =>
  //     await networkService().get(selectedStatus ?? '', {
  //       signal,
  //     }),
  // });

  /**
   * The useQueryCustom hook is a custom hook that wraps the useQuery hook from react-query.
   * It provides additional functionality such as timeout handling and aborting requests.
   * You can replace the useQueryCustom hook with the original useQuery hook if you don't need these features.
   */

  const { data, error, isError, isLoading, isAborted } = useQueryCustom({
    enabled: !!selectedStatus,
    timeOutDuration: 12000,
    queryKey: ['get-data', selectedStatus],
    queryFn: async ({ signal }) =>
      await networkService().get(selectedStatus ?? '', {
        signal,
      }),
  });

  // Handle abort scenario
  if (isAborted) {
    console.log('The request was aborted.');
  }

  if (isError && !isAborted) {
    console.log('An error occurred:', error);
  }

  return (
    <Screen>
      <Button title="get status 200" onPress={() => setSelectedStatus('200')} />
      <Spacer size="md" />
      <Button title="get status 400" onPress={() => setSelectedStatus('400')} />
      <Spacer size="md" />
      <Button title="get status 500" onPress={() => setSelectedStatus('500')} />
      <Spacer size="lg" />
      {isError && <ThemedText variant="bodyText1">Error: {JSON.stringify(error, null, 2)}</ThemedText>}
      {selectedStatus && isLoading && <ThemedText variant="bodyText1">Loading...</ThemedText>}
      {data?.data && (
        <>
          {data?.isSuccess ? (
            <ThemedText>{JSON.stringify(data.data, null, 2)}</ThemedText>
          ) : (
            <>
              <ThemedText variant="defaultSemiBold">Error:</ThemedText>
              <ThemedText>{JSON.stringify(data?.data, null, 2)}</ThemedText>
            </>
          )}
        </>
      )}
    </Screen>
  );
}
