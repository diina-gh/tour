import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigation from './components/navigation/TabNavigation';

export default function App() {
  return (
    <TailwindProvider>

      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>

    </TailwindProvider>
  );
}


