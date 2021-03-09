import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/splash';
import Registration from './screens/Registration';
import Login from './screens/login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {materialCommunityIcons} from '@expo/vector-icons'; 
import {MaterialCommunityIcons, AntDesign,EvilIcons} from '@expo/vector-icons'; 
import Dashboard from './screens/dashboard';
import LabDetails from './screens/LabDetails';


const Tab = createBottomTabNavigator();
const Home =()=>(
  <Tab.Navigator tabBarOption={{
      activeBackgroundColor:'tomato',
      activeTintColor:'white',
      inactiveBackgroundColor:'#eee',
      inactiveTintColor:'black'
  }}>
  <Tab.Screen name="Home" component={Dashboard} options={{
            tabBarIcon:()=> <MaterialCommunityIcons name="home" size={25}     />
        }} />
  <Tab.Screen name="Track Now" component={Dashboard} options={{
            tabBarIcon:()=> <AntDesign name="find" size={24} color="black" />
        }} />
  <Tab.Screen name="Notification" component={Dashboard} options={{
      tabBarIcon:()=> <EvilIcons name="bell" size={24} color="black" />
  }} />
  <Tab.Screen name="Setting" component={Dashboard} options={{
      tabBarIcon:()=> <AntDesign name="setting" size={24} color="black" />
  }} />
  {/* <Tab.Screen name="Login" component={Login} /> */}
</Tab.Navigator>
)
// const Home() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Dashboard" component={Dashboard} />
//       <Tab.Screen name="Login" component={Login} />
//     </Tab.Navigator>
//   );
// }




const Stack =  createStackNavigator();
const StackNavigator = ()=>(
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Registration}/>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Lab Details" component={LabDetails} />
  
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