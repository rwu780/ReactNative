/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import * as React from 'react';
import { View } from 'react-native';
import LittleLemonFooter from './components/LittleLemonFooter';

import LittleLemonHeader from './components/LittleLemonHeader';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import MenuSectionItems from './components/MenuSectionLists';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';

function App(): JSX.Element {
  return (
    <>
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
        <LoginScreen />
      </View>
      <View style={{
        backgroundColor: '#495E57'
      }}>
        <LittleLemonFooter />
      </View>
    </>

  );
}


export default App;
