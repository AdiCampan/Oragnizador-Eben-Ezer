import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cantari from './screens/Cantari';
import Responsabili from './screens/Responsabili';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Cantari}
          options={{title: 'Cantari'}}
        />
        <Stack.Screen name="Responsabili" component={Responsabili} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};