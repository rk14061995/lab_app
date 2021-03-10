import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/splash';
import Registration from './screens/Registration';
import Login from './screens/login';
import LabDetails from './screens/LabDetails'
import AppointementDetail from './screens/AppointementDetail'
// import Dashboard from './screens/dashboard';



const Stack =  createStackNavigator();

const StackNavigator = ()=> (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Registration}/>
  </Stack.Navigator>
)
const App = () => {
  return (
    // <NavigationContainer>
    //   <StackNavigator/>
    // </NavigationContainer>
    <View>
      <Login/>
    </View>
  )
}
export default App;