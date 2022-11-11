import React from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigation/tabnavigation";
import store from "./src/store";
import {init} from './src/db/index';


init()
.then(() => {
  console.log('Initialized database');
})
.catch(err => {
  console.log('Initializing db failed.');
  console.log(err);
});




export default function App() {
  const [loaded] = useFonts({
    Roboto_Regular: require("./assets/fonts/Roboto-Regular.ttf"),
    Roboto_Medium: require("./assets/fonts/Roboto-Medium.ttf"),
    Roboto_Light: require("./assets/fonts/Roboto-Light.ttf"),
    Roboto_Bold: require("./assets/fonts/Roboto-Bold.ttf"),
    Roboto_Thin: require("./assets/fonts/Roboto-Thin.ttf"),
    Poppins_Regular: require("./assets/fonts/Poppins-Regular.ttf"),
    Poppins_Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins_Light: require("./assets/fonts/Poppins-Light.ttf"),
    Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf"),
    Poppins_Thin: require("./assets/fonts/Poppins-Thin.ttf"),
    Poppins_Extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),

  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
