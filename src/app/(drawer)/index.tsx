import { Screen } from '@/components/Screen/Screen';
import { TextInput } from '@/components/TextInput/TextInput';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { Stack } from 'expo-router';
import { Button } from '@/components/Button/Button';
import { i18n, t } from '@/i18n';
import { GlitchText } from '@/hooks/useGlitchText';
import { formatFullDate, getCurrentTimezone, getDateByFormat } from '@/utils/dateFormat';
import { ActiveSheet } from '@/components/ActiveSheet/ActiveSheet';
import { Spacer } from '@/components/Spacer';
import Head from 'expo-router/head';
import { ImpactFeedbackStyle } from 'expo-haptics';
import { useState } from 'react';
import { networkService } from '@/services/network/networkService';

export default function HomeScreen() {
  const [todo, setTodo] = useState<string>('');

  const getToDos = async () => {
    const random = Math.floor(Math.random() * 100);
    const response = await networkService().get(`https://jsonplaceholder.typicode.com/todos/${random}`);
    console.log(response.data.title);
    setTodo(response.data.title);
  };

  return (
    <>
      <Head>
        <title>{t('app.web_title')}</title>
        <meta name="description" content="This is an example for meta tag." />
      </Head>

      <Stack.Screen options={{ title: 'Title from the component' }} />
      <Screen>
        <Spacer size="sm" />
        <Button title="Get ToDos" onPress={getToDos} impact={ImpactFeedbackStyle.Soft} />
        <Spacer size="sm" />
        {todo && <ThemedText fontSize={16}>Todo: {todo}</ThemedText>}
        <Spacer size="sm" />
        <ThemedText>The current language is: {i18n.locale}</ThemedText>
        <ThemedText tx="home.title" />
        <GlitchText variant="h1">GlitchText</GlitchText>
        <ThemedText>{formatFullDate(new Date())}</ThemedText>
        <ThemedText>{getDateByFormat(new Date(), 'MM/dd/yyyy')}</ThemedText>
        <ThemedText>{getCurrentTimezone()}</ThemedText>
        <ThemedText variant="h1" fontSize={50} fontWeight="light" lightColor="green" darkColor="red">
          H1
        </ThemedText>
        <ThemedText variant="h2">H2</ThemedText>
        <ThemedText variant="h3">H3</ThemedText>
        <ThemedText variant="h4">H4</ThemedText>
        <ThemedText variant="h5">H5</ThemedText>
        <ThemedText variant="h6">H6</ThemedText>
        <ThemedText variant="h7">H7</ThemedText>
        <ThemedText variant="bodyText1">BodyText1</ThemedText>
        <ThemedText variant="bodyText2">BodyText2</ThemedText>
        <ThemedText variant="bodyText3">BodyText3</ThemedText>
        <ThemedText variant="bodyText4">BodyText4</ThemedText>
        <ThemedText variant="link">Link</ThemedText>
        <ThemedText variant="bodyTextSmallHighlight">BodyTextSmallHighlight</ThemedText>
        <ThemedText variant="bodyTextSmall">BodyTextSmall</ThemedText>
        <ThemedText variant="h1">Warning!</ThemedText>
        <ThemedText variant="bodyText1">Auto size image with RTL support:</ThemedText>
        <Spacer size="sm" />
        <TextInput />
        <Spacer size="sm" />
        <Button title="Button with Haptics" onPress={() => console.log('print hi')} impact />
        <Spacer size="sm" />
        <ActiveSheet />
      </Screen>
    </>
  );
}
