import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './screens/RootStackParams';
import HomeScreen from './screens/Home';
import ViewDetailsScreen from './screens/ViewDetails';
import React from 'react';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ViewDetails" component={ViewDetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
