import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "../../pages/Home";
import Favoris from "../../pages/Favoris";
import Maps from "../../pages/Maps";
import Profil from "../../pages/Profil";
import HeartIcon from "../ui/icons/heartIcon";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen 
          name="Favoris" 
          component={Favoris}
          options={{
            tabBarIcon: ({size, color}) => (<HeartIcon color={color} size={size} />)
          }}
       />
       
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;