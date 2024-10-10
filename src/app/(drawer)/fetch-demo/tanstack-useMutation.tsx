import { Button } from '@/components/Button/Button';
import { Screen } from '@/components/Screen/Screen';
import { Spacer } from '@/components/Spacer';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { networkService } from '@/services/network/networkService';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useState } from 'react';

export default function TanstackUseMutationScreen() {
  const [res, setRes] = useState<AxiosResponse<any, any> | null>(null);

  const {
    mutateAsync: getData,
    error,
    isError,
    isPending,
  } = useMutation({
    mutationFn: async ({ signal, status }: { signal: AbortSignal; status: string }) => {
      const apiResponse = await networkService().get(status ?? '', {
        signal,
      });
      setRes(apiResponse);
    },
  });

  return (
    <Screen>
      <Button title="get status 200" onPress={() => getData({ signal: new AbortController().signal, status: '200' })} />
      <Spacer size="md" />
      <Button title="get status 400" onPress={() => getData({ signal: new AbortController().signal, status: '400' })} />
      <Spacer size="md" />
      <Button title="get status 500" onPress={() => getData({ signal: new AbortController().signal, status: '500' })} />
      <Spacer size="lg" />

      {isError && <ThemedText variant="bodyText1">Error: {JSON.stringify(error, null, 2)}</ThemedText>}
      {isPending && <ThemedText variant="bodyText1">Loading...</ThemedText>}
      {!isPending && res?.data && (
        <>
          {res?.isSuccess ? (
            <ThemedText>{JSON.stringify(res.data, null, 2)}</ThemedText>
          ) : (
            <>
              <ThemedText variant="defaultSemiBold">Error:</ThemedText>
              <ThemedText>{JSON.stringify(res?.data, null, 2)}</ThemedText>
            </>
          )}
        </>
      )}
    </Screen>
  );
}
