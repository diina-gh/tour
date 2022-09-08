import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../../utils/colors';

import Home from '../../pages/Home';
import Favoris from '../../pages/Favoris';
import Maps from '../../pages/Maps';
import Profil from '../../pages/Profil';
import Hotels from '../../pages/Hotels';
import Events from '../../pages/Events';
import Restos from '../../pages/Restos';

import HeartIcon from "../ui/icons/heartIcon";
import HomeIcon from '../ui/icons/homeIcon';
import HomeBoldIcon from '../ui/icons/homeBoldIcon';
import BuildingIcon from '../ui/icons/buildingIcon';
import BuildingBoldIcon from '../ui/icons/buildingBoldIcon';
import SodaIcon from '../ui/icons/sodaIcon';
import SodaBoldIcon from '../ui/icons/sodaBoldIcon';
import UserIcon from '../ui/icons/userIcon';
import UserBoldIcon from '../ui/icons/userBoldIcon';
import CameraIcon from '../ui/icons/cameraIcon';
import CameraBoldIcon from '../ui/icons/cameraBoldIcon';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    shifting={true}
    labeled={false}
    sceneAnimationEnabled={true}
    activeColor="#00aea2"
    inactiveColor="#95a5a6"
    barStyle={{ backgroundColor: '#fefbf6', elevation: 10 }}
    screenOptions={({ route }) => ({
      
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === 'Home') {
          if(focused) return <HomeBoldIcon size={size} color={color} />;
          else return <HomeIcon size={size} color={color} />;
        } 
        else if (route.name === 'Hotels') {
          if(focused) return <BuildingBoldIcon size={size} color={color} />;
          else return <BuildingIcon size={size} color={color} />;
        } 
        else if (route.name === 'Events') {
          if(focused) return <CameraBoldIcon size={size} color={color} />;
          else return <CameraIcon size={size} color={color} />;
        } 
        else if (route.name === 'Favoris') {
          if(focused) return <HeartIcon size={size} color={color} />;
          else return <HeartIcon size={size} color={color} />;
        } 
        else if (route.name === 'Profil') {
          if(focused) return <UserBoldIcon size={size} color={color} />;
          else return <UserIcon size={size} color={color} />;
        } 

      },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      // tabBarLabel: false,

      
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Events" component={Events} />
    <Tab.Screen name="Hotels" component={Hotels} />
    {/* <Tab.Screen name="Favoris" component={Favoris} /> */}
    <Tab.Screen name="Profil" component={Profil} />
  </Tab.Navigator>
  );
}


