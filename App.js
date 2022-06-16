import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from  '@expo/vector-icons/Ionicons';
import Home from './pages/Home';
import Maps from './pages/Maps';
import Favoris from './pages/Favoris';
import Profil from './pages/Profil';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TailwindProvider>
          <NavigationContainer>
            <Tab.Navigator 
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if (route.name === 'Maps') {
                    iconName = focused ? 'map' : 'map-outline';
                  } else if (route.name === 'Favoris') {
                    iconName = focused ? 'ios-heart' : 'ios-heart-outline';
                  }
                  else if (route.name === 'Profil') {
                    iconName = focused ? 'person' : 'person-outline';
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
            >

              <Tab.Screen name="Home" component={Home}  options={{ tabBarLabel: 'Home' }}  />
              <Tab.Screen name="Maps" component={Maps} options={{ tabBarLabel: 'Maps' }} />
              <Tab.Screen name="Favoris" component={Favoris} options={{ tabBarLabel: 'Favoris' }} />
              <Tab.Screen name="Profil" component={Profil} options={{ tabBarLabel: 'Profil' }} />

          </Tab.Navigator>
          </NavigationContainer>
    </TailwindProvider>
  );
}