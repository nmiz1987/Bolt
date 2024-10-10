import { Button } from '@/components/Button/Button';
import { Screen } from '@/components/Screen/Screen';
import { Spacer } from '@/components/Spacer';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { networkService } from '@/services/network/networkService';
import { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';

export default function SimpleAxiosScreen() {
  const [res, setRes] = useState<AxiosResponse<any, any> | null>(null);

  const getData = useCallback(async (status: string) => {
    const apiResponse = await networkService().get(status);
    setRes(apiResponse);
  }, []);

  return (
    <Screen>
      <Button title="get status 200" onPress={() => getData('200')} />
      <Spacer size="md" />
      <Button title="get status 400" onPress={() => getData('400')} />
      <Spacer size="md" />
      <Button title="get status 500" onPress={() => getData('500')} />
      <Spacer size="lg" />
      {res?.data && (
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
