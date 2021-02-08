import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'HomeScreen',
            headerTitle: 'Home'
          }}>
        </Stack.Screen>
        <Stack.Screen
          name='Second'
          component={SecondScreen}
          options={{
            title: 'SecondScreen',
            headerTitle: 'Second'
          }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

