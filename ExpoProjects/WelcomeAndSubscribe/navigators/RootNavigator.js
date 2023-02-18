import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Subscribe" component={SubscribeScreen} />
      {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
    </Stack.Navigator>
  );
};

export default RootNavigator;
