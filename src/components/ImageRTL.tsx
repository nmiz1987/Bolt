import { isRTL } from '@/i18n';
import { Image as ExpoImage, ImageProps as ExpoImageProps } from 'expo-image';
import { StyleSheet } from 'react-native';

interface ImageProps extends ExpoImageProps {}

export function ImageRTL(Image: ImageProps) {
  return <ExpoImage style={[styles.image, isRTL ? { transform: [{ scaleX: -1 }] } : {}]} {...Image} />;
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
});
