import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../pages/Home";
import Favoris from "../../pages/Favoris";
import Maps from "../../pages/Maps";
import Profil from "../../pages/Profil";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

export const MainStackNavigator = () => {

  return (

    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Maps" component={Maps} />
      <Stack.Screen name="Favoris" component={Favoris} />
      <Stack.Screen name="Profil" component={Profil} />
    </Stack.Navigator>

  );

}


