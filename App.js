import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/dashboard';
import Splash from './screens/splash'
import Register from './screens/registraion';
import Login from './screens/login';




const Stack =  createStackNavigator();
const StackNavigator = ()=>(
  <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register}/>
  
  </Stack.Navigator>
)
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}
export default App;