import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { Text, View } from '../components/Themed';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import DrawerNavigator from './DrawerNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const MyTheme = {

  dark: true,
  colors: {
    primary: '#1177d1',
    background: '#1177d1',
    card: '#272c33',
    text: '#fff',
    border: '#1177d1',
    notification: 'rgb(255, 69, 58)',
  },
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const screenOption = {
  headerShown: false,
  headerTintColor: '#ffffff',
  style: {
    backgroundColor: '#e0dee6',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 3,
  },headerTitleStyle: {
    fontSize: 18,
  },

}
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOption}>
      <Stack.Screen name="Root" component={DrawerNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!', cardStyle:{backgroundColor:'#e0dee6'}}} />
      
    </Stack.Navigator>
  );
}
