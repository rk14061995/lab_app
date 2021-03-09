import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/dashboard';
// import Splash from './screens/splash';




const Stack =  createStackNavigator();
const StackNavigator = ()=>(
  <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
)
const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}
export default BottomNavigation;