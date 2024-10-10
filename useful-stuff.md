# Useful Stuff

In this file, I'll list all of my recommended packages and links that I collected over time. Check it out! If you have suggestions for additional packages/links, DM me or open an issue.

## Table of Contents

1. [React Native Templates](#react-native-templates)
   - [Expo](#expo)
   - [Ignite](#ignite)
   - [Create-t3-turbo](#create-t3-turbo)
2. [Components And Libraries](#ui-components)
   - [Lucide React Native](#lucide-react-native)
   - [@expo/html-elements](#expohtml-elements)
   - [FlashList](#flashlist)
   - [Expo Anim Scroll Indicator](#expo-anim-scroll-indicator)
   - [Expo Reaction Menu](#expo-reaction-menu)
   - [Zeego](#zeego)
   - [React Native Directory](#react-native-directory)
   - [React Native 50 Days](#react-native-50-days)
3. [Testing](#testing)
   - [Jest Cheat-Sheet](#jest-cheat-sheet)
   - [Vitest Cheat-Sheet](#vitest-cheat-sheet)
4. [Development Tools](#development-tools)
   - [Reactotron](#reactotron)
   - [Expo Dev-Client](#expo-dev-client)
   - [React Native Vision Camera](#react-native-vision-camera)
   - [Bacons/MDX](#baconsmdx)
   - [React Native CI CLI](#react-native-ci-cli)
5. [Web Development](#web-development)
   - [Autoprefixer](#autoprefixer)
   - [React Native Web Hooks](#react-native-web-hooks)
6. [Data Visualization](#data-visualization)
   - [XYFlow/React](#xyflowreact)
7. [News and Updates](#news-and-updates)
   - [Expo Blog](#expo-blog)
   - [React Native News](#react-native-news)
8. [Guides](#guides)
   - [React Native Advanced Guide](#react-native-advanced-guide)
9. [Utils](#utils)
   - [Free For Dev](#free-for-dev)

---

## React Native Templates

### Expo

- **Link:** [https://docs.expo.dev/more/create-expo/]()
- **Description:** Expo boilerplate for React Native applications.

### Ignite

- **Link:** [https://docs.infinite.red/ignite-cli/]()
- **Description:** Infinite Red boilerplate for React Native applications.

### Create-t3-turbo

- **Link:** [https://github.com/t3-oss/create-t3-turbo]()
- **Description:** T3 boilerplate for creating full-stack applications.

## UI Components

### Lucide React Native

- **Link:** [https://www.npmjs.com/package/lucide-react-native]()
- **Description:** A comprehensive library of beautifully crafted, customizable SVG icons for React Native projects. Easy to use and highly customizable.
- **Tags:** #icons #svg #ui #reactnative #customization

### @expo/html-elements

- **Link:** [https://www.npmjs.com/package/@expo/html-elements]()
- **Description:** A package that provides semantic HTML elements for Expo and React Native projects. Improves SEO and accessibility when converting React Native apps to web applications.
- **Tags:** #accessibility #seo #web #expo #reactnative #htmlelements
- **Example:**

```tsx
import { H1 } from '@expo/html-elements';
export default () => <H1>Example</H1>;
```

### FlashList

- **Link:** [https://shopify.github.io/flash-list/]()
- **Description:** A high-performance, drop-in replacement for FlatList in React Native. Offers superior rendering speed and memory efficiency for large lists.
- **Tags:** #performance #list #optimization #reactnative #virtualization
- **Example:**

```tsx
<FlashList renderItem={({ item }) => <TweetCell item={item} />} estimatedItemSize={50} data={tweets} />
```

### Expo Anim Scroll Indicator

- **Link:** [https://github.com/arunabhverma/expo-anim-scroll-indicator]()
- **Description:** This project showcases a custom scroll indicator inspired by the Samsung Gallery scroll indicator, designed for both Android and iOS. Built using Expo, react-native-reanimated, and react-native-gesture-handler, this example highlights how to create an interactive scroll indicator.
- **Tags:** #reactnative #virtualization #scrollbar

### Expo Reaction Menu

- **Link:** [https://github.com/arunabhverma/expo-reaction-menu]()
- **Description:** This project demonstrates a reaction menu for Android and iOS, inspired by the reaction feature in the Signal app. Built using Expo and react-native-reanimated, this example project showcases how to implement smooth, interactive animations for a reaction menu that can be used in messaging apps.

### Zeego

- **Link:** [https://zeego.dev/]()
- **Description:** Beautiful, native menus for React Native + Web, inspired by Radix UI.
- **Tags:** #reactnative #dropdownmenu #web #crossbrowser

### React Native Directory

- **Link:** [https://reactnative.directory/]()
- **Description:** Everything you need for React Native.
- **Tags:** #reactnative #libraries

### React Native 50 Days

- **Link:** [https://github.com/hewad-mubariz/reactnative-50-days/]()
- **Description:** This repository contains a lot of implementations of the React Native 50 Days UI Challenge. In this challenge, the creator created 50 different UI designs using React Native.
- **Tags:** #reactnative #libraries #ui

## Testing

### Jest Cheat-Sheet

- **Link:** [https://github.com/sapegin/jest-cheat-sheet/]()
- **Description:** Write better testing with Jest.
- **Tags:** #reactnative #test #jest

### Vitest Cheat-Sheet

- **Link:** [https://github.com/sapegin/vitest-cheat-sheet/]()
- **Description:** Write better testing with Vitest.
- **Tags:** #reactnative #test #vitest

## Development Tools

### Reactotron

- **Link:** [https://docs.infinite.red/reactotron/]()
- **Description:** Reactotron is a powerful debugger for React and React Native applications. It provides an easy-to-use interface for developers to monitor their application's state, network requests, and performance metrics and can be used for any size of project, from small personal apps to large-scale enterprise applications.
- **Tags:** #debugging #development #customization #nativecode #infinite

### Expo Dev-Client

- **Link:** [https://docs.expo.dev/versions/latest/sdk/dev-client/]()
- **Description:** An essential tool for Expo developers that enables custom native code integration while preserving the benefits of the Expo workflow. Provides a customizable development build with debugging tools.
- **Tags:** #expo #debugging #development #customization #nativecode

### React Native Vision Camera

- **Link:** [https://react-native-vision-camera.com/]()
- **Description:** A feature-rich, high-performance camera library for React Native. Supports barcode scanning, face detection, and other advanced camera features with excellent documentation.
- **Tags:** #camera #media #machinelearning #reactnative #computervision

### Bacons/MDX

- **Link:** [https://www.npmjs.com/package/@bacons/mdx]()
- **Description:** A powerful package that brings MDX support to React Native projects. Enables the use of JSX in Markdown documents, allowing for dynamic and interactive content creation.
- **Tags:** #mdx #markdown #content #reactnative #documentation

### React Native CI CLI

- **Link:** [https://github.com/software-mansion/setup-ci]()
- **Description:** Software Mansion created a tool that bootstraps CI with the most used features, which are ready for customization in the future. Running npx setup-ci generates GitHub workflows for the most popular CI tasks.

## Web Development

### Autoprefixer

- **Links:** [https://www.npmjs.com/package/autoprefixer](), [https://www.npmjs.com/package/postcss-scss]()
- **Description:** A PostCSS plugin that automatically adds vendor prefixes to CSS rules. Essential for ensuring cross-browser compatibility when developing websites using React Native for Web. Useful with [NativeWindUi](https://nativewindui.com/) and [TailwindCSS](https://tailwindcss.com/).
- **Tags:** #css #compatibility #web #postcss #crossbrowser #style
- **Example:**

Before parsing:

```css
::placeholder {
  color: gray;
}

.image {
  background-image: url(image@1x.png);
}
@media (min-resolution: 2dppx) {
  .image {
    background-image: url(image@2x.png);
  }
}
```

After parsing:

```css
::-moz-placeholder {
  color: gray;
}
::placeholder {
  color: gray;
}

.image {
  background-image: url(image@1x.png);
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  .image {
    background-image: url(image@2x.png);
  }
}
```

### React Native Web Hooks

- **Link:** [https://www.npmjs.com/package/react-native-web-hooks]()
- **Description:** A collection of useful hooks specifically designed for React Native Web applications. Enhances web interactions and provides better control over component states in web environments.
- **Tags:** #hooks #web #reactnative #userinterface #statemanagement
- **Example:**

```tsx
import { useRef } from 'react';
import { StyleSheet, Linking, Text, Platform } from 'react-native';
import { useHover, useFocus, useActive } from 'react-native-web-hooks';

function Link
```

## News and Updates

### Expo Blog

- **Link:** [https://expo.dev/blog]()
- **Description:** All the latest news and articles by Expo.
- **Tags:** #reactnative #news #newsletter #expo

### React Native News

- **Link:** [https://github.com/anisurrahman072/React-Native-News-2024]()
- **Description:** The best place to keep track of all the latest news in React Native.
- **Tags:** #reactnative #news #newsletter

## Guides

### React Native Advanced Guide

- **Link:** [https://github.com/anisurrahman072/React-Native-Advanced-Guide]()
- **Description:** The best place to keep track of all the latest news in React Native.
- **Tags:** #reactnative #news #newsletter

## Utils

### Free For Dev

- **Link:** [https://free-for.dev/]()
- **Description:** List of software (SaaS, PaaS, IaaS, etc.) and other offerings with free developer tiers.
- **Tags:** #utils #free #developer
