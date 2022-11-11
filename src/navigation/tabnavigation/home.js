import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../../utils";
import { colors } from "../../constants/theme";
import {
  Kebab,
  Home,
  CategoriesScreen,
  Discounts,
  Promotions,
  ServiceScreen,
  UserScreen,
} from "../../screens/tabscreens";
import  IonicIcons  from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, Text } from "react-native";

const Stack = createNativeStackNavigator();

const Tabs = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: isAndroid ? colors.primary : colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto_Bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "Home",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Kebab")}>
              <IonicIcons name="ellipsis-vertical" size={25} color={colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen name="Service" component={ServiceScreen} />
      <Stack.Screen
        name="Discounts"
        component={Discounts}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Promotions"
        component={Promotions}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />

      <Stack.Screen
        name="Kebab"
        component={Kebab}
        options={{ title: "Configuracion de cuenta" }}
      />
       <Stack.Screen
        name="User"
        component={UserScreen}
        options={{ title: "User" }}
      />
    </Stack.Navigator>
  );
};

export default Tabs;
