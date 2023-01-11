import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Toast from 'react-native-toast-message';
import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './components/navigation/TabNavigation';
import DetailEvent from './pages/Events/detailEvent';
import DetailHotel from './pages/Hotels/detailHotel';
import DetailResto from './pages/Restos/detailResto';
import DetailProduit from './pages/Restos/detailProduit';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DetailPlace from './pages/Places/detailPlace';
import Panier from './pages/Profil/Panier';

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: 'https://tour-brown.vercel.app/',
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
})

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <TailwindProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={TabNavigation} options={{ headerShown: false }} />
              <Stack.Screen name="DetailEvent" component={DetailEvent} options={{ headerShown: false }} />
              <Stack.Screen name="DetailPlace" component={DetailPlace} options={{ headerShown: false }} />
              <Stack.Screen name="DetailHotel" component={DetailHotel} options={{ headerShown: false }} />
              <Stack.Screen name="DetailResto" component={DetailResto} options={{ headerShown: false }} />
              <Stack.Screen name="DetailProduit" component={DetailProduit} options={{ headerShown: false }} />
              <Stack.Screen name="Panier" component={Panier} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </TailwindProvider>
      </ApolloProvider>
      <Toast />
    </>

  );
}


