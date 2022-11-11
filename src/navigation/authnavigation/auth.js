import {
  LogIn1,
  LogIn2,
  LogIn3,
  LogIn4,
  OnBoarding1,
  OnBoarding2,
  OnBoarding3,
  OnBoarding4,
  SignUp1,
} from "../../screens/authscreens";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding1"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
      <Stack.Screen name="OnBoarding4" component={OnBoarding4} />
      <Stack.Screen name="LogIn1" component={LogIn1} />
      <Stack.Screen name="LogIn2" component={LogIn2} />
      <Stack.Screen name="LogIn3" component={LogIn3} />
      <Stack.Screen name="LogIn4" component={LogIn4} />
      <Stack.Screen name='SignUp1' component={SignUp1} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
