# Basics

You'll find two options while setting up the development environment page.

- [Basics](#basics)
  - [Environment Setup](#environment-setup)
    - [Expo Go](#expo-go)
    - [React Native CLI](#react-native-cli)

## Environment Setup
[React Native Setup](https://reactnative.dev/docs/environment-setup)

### Expo Go
Expo is an open-source platform that is used for making cross platform native apps using React Native. Expo adds a layer of abstraction on top of React Native apps. It provides tools built for React Native, which gets you setup within a few minutes without must hassle.

Regardless of whether you use React Native CLI or Expo CLI, you are still writing React Native code to build cross platform native apps using JavaScript and React. With Expo, however, you will never touch any native iOS or native android code like Swift, Java or Kotlin. This is because Expo automatically makes native code compatible with React Native code, and it is not available to the developers who are using it.

With Expo, a cool feature is Over The Air, OTA updates. Since all of the code will be in Javascipr, you can push updates to your app anytime over the air. You would not need app store approvals to push updates. 

Expo also comes with a lot of native APIs built in for both iOS and Android. Native APIs for Camera, file systems, location services, push notification, etc, are already part of the Expo ecosystem. However, 
- Expo does not have all the iOS and Android APIs. Expo has support from many device APIs, but not all of them.
- If you are looking to keep the size of your app extremely lean, then Expo may not be the best choice since it comes with several packages and APIs that you may not use.
- Not optimized for custom modules

At the end of the day, you can always eject from an Expo ecosystem.


Quick setup process, you only need `node` and an `IDE`

```
# Create a new project
npx create-expo-app <ProjectName>

npm start // Start the project

```

After you starts the project, one of the first things you'll notice is a QR code for accessing the Expo Metro Bundler. This translates JavaScript code and bundles that into a single file, and is a convenient option for running the app if you don't have an emulator


### React Native CLI
There are several dependencies
- Android Studio
- XCode
- react-native dependencies

```
# Create a new application
npx react-native init <ProjectName>

# Start Metro
npx react-native start
yarn start
yarn react-native start // if you use the Yarn package manager, you can use yarn instead of npx

## iOS setup
cd ios
bundle install
bundle exec pod install

# Start application
# run it on a separate terminal
npx react-native run-android
npx react-native run-ios

yarn start ios
yarn start android

```

- Metro : the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and return a single JavaScript file that includes all your code and its dependencies"





