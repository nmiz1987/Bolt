import { Box } from '@/components/Box/Box';
import { Collapsible } from '@/components/Collapsible';
import { HelloWave } from '@/components/HelloWave';
import { ImageRTL } from '@/components/ImageRTL';
import { ParallaxScrollView } from '@/components/ParallaxScrollView';
import { Spacer } from '@/components/Spacer';
import { ThemedText } from '@/components/Themed/ThemedText/ThemedText';
import { isRTL } from '@/i18n';
import { StyleSheet } from 'react-native';

export default function AnimationAndParallaxScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<ImageRTL source={require('@/assets/images/partial-react-logo.png')} style={[styles.reactLogo, styles.rtlLogo]} />}>
      <Box>
        <Box style={styles.titleContainer}>
          <ThemedText variant="h1">Hi</ThemedText>
          <HelloWave />
        </Box>
        <Spacer size="lg" />
        {Array.from({ length: 20 }).map((_, index) => (
          <Box key={index}>
            <Collapsible title={`Title ${index + 1}`}>
              <ThemedText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita hic ipsam, praesentium aperiam architecto quod repellat repudiandae
                iusto explicabo fuga provident amet at ex quae. Mollitia, at! Obcaecati, expedita similique!
              </ThemedText>
            </Collapsible>
            <Spacer />
          </Box>
        ))}
      </Box>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  rtlLogo: isRTL ? { transform: [{ scaleX: -1 }] } : {},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
