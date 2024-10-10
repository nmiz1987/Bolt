import { Text, Platform, TextStyle } from 'react-native';
import { FontVariantsProps } from '@/theme/fontVariants';
import { useCurrentColorScheme } from '@/hooks/useCurrentColorScheme';
import { useCurrentFontVariants } from '@/hooks/useCurrentFontVariants';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TxKeyPath, isRTL, t } from '@/i18n';
import i18n from 'i18n-js';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  fontSize?: TextStyle['fontSize'];
  fontWeight?: TextStyle['fontWeight'];
  variant?: keyof FontVariantsProps;
  children?: React.ReactNode; // The text to display if not using `tx` or nested components
  tx?: TxKeyPath; //Text which is looked up via i18n.
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: i18n.TranslateOptions;
};

export type ThemedTextProps = ThemeProps & Text['props'];

export function ThemedText(props: ThemedTextProps) {
  const { style, lightColor, darkColor, variant, fontSize, fontWeight, tx, txOptions, children, ...otherProps } = props;
  const colors = useCurrentColorScheme();
  const colorScheme = useColorScheme();
  const baseFontColor = colors['text-primary'];
  const fontVariants = useCurrentFontVariants();
  const baseFontStyle = fontVariants[variant ?? 'bodyText1'];

  const i18nText = tx && t(tx, txOptions);
  const content = i18nText || children;

  const getExternalFontColor = () => {
    if (!lightColor && !darkColor) {
      return null;
    }
    if (lightColor && darkColor) {
      return { color: colorScheme === 'light' ? lightColor : darkColor };
    }
    if (lightColor && !darkColor) {
      return { color: colorScheme === 'light' ? lightColor : colors['text-primary'] };
    }
    if (!lightColor && darkColor) {
      return { color: colorScheme === 'light' ? colors['text-primary'] : darkColor };
    }
    return null;
  };

  /*
    Importance style order:
    1. Basic font style by variant.
    2. Color by current color scheme.
    3. Custom external style.
    4. Custom external font size.
    5. Custom external font weight.
    6. Custom external font color.
  */

  return (
    <Text
      testID="textLabel"
      selectable={Platform.OS === 'web'}
      style={[
        baseFontStyle,
        { color: baseFontColor, writingDirection: isRTL ? 'rtl' : 'ltr' },
        style,
        !!fontSize && { fontSize },
        !!fontWeight && { fontWeight },
        getExternalFontColor(),
      ]}
      {...otherProps}>
      {content}
    </Text>
  );
}
