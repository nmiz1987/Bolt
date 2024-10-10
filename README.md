# Bolt – Lightning-fast React Native Expo template with simplicity and out-of-the-box power.

This project is a template for React Native Expo (CNG) applications. The project is built from [Expo](https://expo.dev/) starter project, [Ignite](https://docs.infinite.red/ignite-cli/) project, personal configurations, recommended projects and packages, and example components with demo code.

## Key Features

1. **React Native Expo (CNG) Template**: A solid foundation for your next project.
2. **Personal Configurations**: Includes a set of pre-configured settings and recommended packages.
3. **Example Components**: Comes with demo components and sample code.
4. **Navigation**: Utilizes Expo Router with tab, stack and drawer navigation.
5. **Internationalization**: Supports multiple languages (Hebrew and English) using i18n-js.
6. **Testing**: Includes Jest, testing-library and react-test-renderer for comprehensive testing.
7. **Debugging**: Configured with [Reactotron](https://docs.infinite.red/reactotron/) (Infinite Red Debugging tool).
8. **Multi-platform**: Compiles for Android, iOS, and Web.
9. **Developer Experience**: Includes recommended DX packages like ESLint and Prettier.
10. **EAS Configuration**: Comes with a pre-configured `eas.json` file.
11. **VSCode Snippets**: 'Out of the box' VSCode snippets for faster development.
12. **GitHub Templates**: Includes 'out of the box' GitHub DISCUSSION_TEMPLATE and ISSUE_TEMPLATE.
13. **GitHub CI**: Preconfigured GitHub Continuous Integration workflows.

## Tech Stack

This template is constructed using a carefully selected technology stack to ensure optimal performance and scalability:

| Library                      | Category                      | Version | Description                                                                                                          |
| ---------------------------- | ----------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| React Navigation             | Navigation                    | v6      | A performant and consistent navigation framework for React Native applications.                                      |
| React Native                 | Mobile Framework              | v0.74   | The leading cross-platform mobile framework for building native apps.                                                |
| React                        | UI Framework                  | v18     | The most widely used UI framework for building user interfaces.                                                      |
| TypeScript                   | Language                      | v5      | A superset of JavaScript that adds static typing for improved development.                                           |
| Expo                         | SDK                           | v51     | An open-source platform for building universal native apps for Android, iOS, and the web using JavaScript and React. |
| Expo Router                  | Navigation                    | v3      | A file-based routing solution for React Native and web applications.                                                 |
| Expo Font                    | Custom Fonts                  | v12     | A library for importing and using custom fonts in your application.                                                  |
| Expo Localization            | Internationalization          | v15     | Provides internationalization support, including right-to-left (RTL) languages.                                      |
| i18n-js                      | Internationalization          | v4      | A library for managing translations and internationalization in JavaScript applications.                             |
| Expo Status Bar              | Status Bar Library            | v1      | A library for managing the status bar in React Native applications.                                                  |
| RN Reanimated                | Animations                    | v3      | A library for creating beautiful and performant animations in React Native.                                          |
| AsyncStorage                 | Persistence                   | v1      | A simple, unencrypted, asynchronous, persistent, key-value storage system.                                           |
| Reactotron RN                | Inspector/Debugger            | v3      | A debugging tool for React Native applications.                                                                      |
| Jest                         | Test Runner                   | v27     | A popular testing framework for JavaScript applications.                                                             |
| testing-library/jest-native  | Test Runner                   | v5      | Custom Jest matchers for testing the state of React Native components.                                               |
| testing-library/react-native | Test Runner                   | v12     | Utilities for testing React Native components.                                                                       |
| date-fns                     | Date library                  | v3      | A modern JavaScript date utility library.                                                                            |
| date-fns-tz                  | Date library                  | v3      | Adds time-zone support to date-fns.                                                                                  |
| bottom-sheet                 | UI component                  | v4      | A cross-platform component for creating bottom sheets in React Native.                                               |
| netinfo                      | Network                       | v11     | A library for accessing network information in React Native.                                                         |
| axios                        | Network                       | v1      | A promise-based HTTP client for making requests in JavaScript.                                                       |
| react-query                  | Asynchronous state management | v5      | A powerful library for managing asynchronous state in React applications.                                            |
| react-native-action-sheet    | Expo Library                  | v4      | A cross-platform component for displaying action sheets in React Native.                                             |
| expo-image                   | Expo Library                  | v6      | A performant image loading library for React Native.                                                                 |
| expo-device                  | Expo Library                  | v6      | Provides information about the user's physical device.                                                               |
| expo-network                 | Expo Library                  | v6      | Provides information about the device's network status.                                                              |
| expo-haptics                 | Expo Library                  | v13     | Access to the system's vibration effects for providing haptic feedback.                                              |
| vector-icons                 | Expo Library                  | v14     | A comprehensive library of popular icon sets for React Native applications.                                          |
| expo-updates                 | Expo Library                  | v6      | Enables over-the-air updates for your React Native applications.                                                     |

## Installation

1. Clone this repository:
   ```
   git clone Bolt
   ```
2. Navigate to the project directory:
   ```
   cd Bolt
   ```
3. Install dependencies using your preferred package manager:
   ```
   npm install
   # or
   yarn install
   # or
   bun install
   ```

## Creating Dev Builds with CNG

### Using EAS

1. For Android:
   ```
   eas build --profile development --platform android --local
   ```
2. For iOS:
   ```
   eas build --profile development --platform ios --local
   ```
3. For iOS Simulator:
   ```
   eas build --profile development-simulator --platform ios --local
   ```

Note: Remove the `--local` flag to build on EAS servers.

### Using CNG Directly

1. For Android:
   ```
   APP_VARIANT=development npx expo run:android --device
   ```
2. For iOS:
   ```
   APP_VARIANT=development npx expo run:ios --device
   ```

Note: The `--device` flag is optional and allows you to select a specific device.

## Running the Project

Start the development server:

```
npx expo start
```

## Structure

This project is divided in two section:

**1. Project's root -** The root contains all the project's configuration files and folders. You only need to modify it in case of modifying/upgrading/installing/uninstalling a library.
**2. 'src' folder -** The 'src' folder contains all the app content.

- **app:** The project is based on folder navigation (Expo Router); the structure of this folder will determine the navigation.
- **assets:** Contains all the public files, e.g., images, icons, sound files, etc.
- **components:** Contains my custom components, ready to use. Please note the following:
  **A. Screen:** This is the wrapper component for every screen. This component provides `KeyboardAvoidingView` ready-to-use configuration that should support scroll-view and non-scroll-view, used as `ScreenWithoutScroll` or `ScreenWithScroll` based on the provided props.
  **B. Box:** Used as `View`, `Pressable`, or `Pressable` based on the provided props.
  **C. ImageRTL:** Custom Expo-Image component to support RTL.
  **D. ThemedText:** In addition to theme support, the component provides RTL supportout of the box.
- **i18n:** This folder contains all the localization and RTL support. The project comes with English and Hebrew support; English is the default and fallback language. If you would like to add/remove a language, this is the place.

## VSCode Snippets

This project comes with pre-configured VSCode snippets to boost your productivity. You can find these snippets in the `.vscode` directory.

## GitHub Templates

I have included templates for GitHub Discussions and Issues to streamline communication and bug reporting. You can find these in the `.github` directory.

## GitHub CI

Continuous Integration is set up out of the box with GitHub Actions. Check the `.github/workflows` directory for the preconfigured workflows.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - Copyright (c) 2024 Netanel Mizrahi
