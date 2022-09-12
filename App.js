import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './components/navigation/TabNavigation';
import DetailEvent from './pages/Events/detailEvent';
import DetailHotel from './pages/Hotels/detailHotel';
import DetailResto from './pages/Restos/detailResto';
import DetailProduit from './pages/Restos/detailProduit';

const Stack = createStackNavigator();


export default function App() {
  return (
    <TailwindProvider>

      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="Root" component={TabNavigation} options={{ headerShown: false }} />
          <Stack.Screen name="DetailEvent" component={DetailEvent} options={{ headerShown: false }} />
          <Stack.Screen name="DetailHotel" component={DetailHotel} options={{ headerShown: false }} />
          <Stack.Screen name="DetailResto" component={DetailResto} options={{ headerShown: false }} />
          <Stack.Screen name="DetailProduit" component={DetailProduit} options={{ headerShown: false }} />
        </Stack.Navigator>

      </NavigationContainer>

    </TailwindProvider>
  );
}


