import AuthNavigation from "../authnavigation/auth";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import TabNavigator from "./tabs";
import { useSelector } from "react-redux";

const AppNavigator = () => {
  const userId = useSelector((state) => state.auth.userId);
 
  return (
    <NavigationContainer>
      {userId ? <TabNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigator;
