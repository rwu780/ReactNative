# Navigations

React Native does not have inbuilt navigation. All React Native developers must pick a navigation librar to implement moving between the screens and the app.

React Navigation is the most popular navigation library for React Native app today. It provides a Native Stack navigator that can transition between screens and manage the navigation history. A big difference between how routing or navigation works in web browsers versus React Navigation for mobile is that React Navigation provides the gestures and animations that you would expect on iOS and Android devices.

Some of the navigators don't directly use the native navigation APIs on iOS and Android. This means that if you want the user's navigation experience to match the native iOS or Android experience, then you will have to stick with the native stack navigator and not use the other navigators that come with React Navigation.

https://reactnavigation.org/docs/getting-started

## NavigationContainer

The entire app is wrapped within the `NavigationContainer` component

```
# Install
npm install @react-navigation/native

npm install react-native-screens react-native-safe-area-context

npx pod-install ios

# Setup Navigation Container

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

## Stack Navigation
Stack navigator provides a way for your app to transition between screens where each new screen is palced on top of the stack

```
# Install
npm install @react-navigation/stack

# Instantiate stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      initialRouteName="Menu"
      screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}
      >
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

```

## Tab Navigation

A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized, their screen components are not mounted until they are first focused.

https://reactnavigation.org/docs/bottom-tab-navigator

```
# Install
npm install @react-navigation/bottom-tabs

# Imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={ ({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Welcome') {
              iconName = focused ? 'png1' : 'png2'
            } else if (route.name == 'Menu') {
              iconName = 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray'.
        })}
        initialRouteName="Welcome"
        >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




```

## Drawer

```
# Install
npm install @react-navigation/drawer

# Import
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
	    useLegacyImplementation
        screenOptions={{ drawerPosition: “right” }}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Menu" component={MenuScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

```