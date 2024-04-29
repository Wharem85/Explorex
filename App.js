import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Store from './src/screens/Store';
import Awards from './src/screens/Awards';
import Ranking from './src/screens/Ranking';
import ResponseQuestions from './src/screens/ResponseQuestions';

const Stack = createStackNavigator();

function MyStack() {
  const [coin, setCoin] = useState('000000');
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" options={{ headerShown: false }}>
        {(props) => <Home {...props} coin={coin} />}
      </Stack.Screen>
      <Stack.Screen name="store" component={Store} options={{ headerShown: false }} />
      <Stack.Screen name="awards" component={Awards} options={{ headerShown: false }} />
      <Stack.Screen name="ranking" component={Ranking} options={{ headerShown: false }} />
      <Stack.Screen name="responseQuestions" options={{ headerShown: false }}>
        {(props) => <ResponseQuestions {...props} setCoin={setCoin} coin={coin} />}
      </Stack.Screen>
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
