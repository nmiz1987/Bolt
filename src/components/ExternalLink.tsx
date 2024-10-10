import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Linking, Platform } from 'react-native';

type ExternalLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & { href: string; openInAppBrowser?: boolean };

export function ExternalLink(props: ExternalLinkProps) {
  const { openInAppBrowser, children, href, ...otherProps } = props;

  return (
    <Link
      target="_blank"
      {...otherProps}
      // @ts-ignore
      href={href}
      onPress={async e => {
        if (openInAppBrowser) {
          e.preventDefault();
          Linking.openURL(href as string);
        } else {
          if (Platform.OS !== 'web') {
            // Prevent the default behavior of linking to the default browser on native.
            e.preventDefault();
            // Open the link in an in-app browser.
            WebBrowser.openBrowserAsync(props.href as string);
          }
        }
      }}
    />
  );
}
