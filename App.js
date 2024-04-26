import * as React from 'react';
import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Store from './src/screens/Store';
import Awards from './src/screens/Awards';
import Ranking from './src/screens/Ranking';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="store" component={Store} options={{ headerShown: false }} />
      <Stack.Screen name="awards" component={Awards} options={{ headerShown: false }} />
      <Stack.Screen name="ranking" component={Ranking} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (

      <NavigationContainer>
        <MyStack />
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Opcional, dependiendo de cómo quieras que se vea la imagen de fondo
  },
  backgroundTabs: {
    backgroundColor: '#083454',
    height: 100,
    borderTopEndRadius: 190,
    borderTopStartRadius: 190
  }
});
