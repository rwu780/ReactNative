/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import * as React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LittleLemonFooter from './components/LittleLemonFooter';

import LittleLemonHeader from './components/LittleLemonHeader';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import MenuSectionItems from './components/MenuSectionLists';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import PreferenceScreen from './components/PreferenceScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <View style={{
          backgroundColor: '#495E57'
        }}>
          <LittleLemonHeader />
        </View>

        <View style={{
          flex: 1,
          backgroundColor: '#495E57',
          paddingTop: 30

        }}>
          {/* <WelcomeScreen /> */}
          {/* <MenuItems /> */}
          {/* <MenuSectionItems /> */}
          {/* <FeedbackForm /> */}
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='Menu' component={MenuItems} />
            <Stack.Screen name="Preference" component={PreferenceScreen} />
          </Stack.Navigator>

        </View>

        <View style={{
          backgroundColor: '#495E57'
        }}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>

  );
}


export default App;
