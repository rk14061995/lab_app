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
import Notification from './screens/Notification';
import AppointementDetail from './screens/AppointmentDetail';
import OtpVerification from './screens/OtpVerification';
import ResetPassword from './screens/ResetPassword';
import SliderImage from './screens/Slider';

const Tab = createBottomTabNavigator();
const Home =()=>(
              <Tab.Navigator >
                  <Tab.Screen name="Home" component={Dashboard} options={{
                    headerShown:false,
                            tabBarIcon:()=> <MaterialCommunityIcons name="home" size={25}     />
                        }} />
                  <Tab.Screen name="Track Now" component={Dashboard} options={{
                            tabBarIcon:()=> <AntDesign name="find" size={24} color="black" />
                        }} />
                  <Tab.Screen name="Notification"  component={Notification} options={{
                      tabBarIcon:()=> <EvilIcons name="bell" size={24} color="black" />
                  }} />
                  <Tab.Screen name="Setting" component={Dashboard} options={{
                      tabBarIcon:()=> <AntDesign name="setting" size={24} color="black" />
                  }} />
              </Tab.Navigator>
          )



const Stack =  createStackNavigator();

const StackNavigator = ()=>(
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Splash" component={Splash} header={null}/>
    <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
    <Stack.Screen name="Register" component={Registration} options={{headerShown:false}}/>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
    <Stack.Screen name="AppointmentDetail" component={AppointementDetail}/>
    <Stack.Screen name="OtpVerification" options={{headerShown:false}} component={OtpVerification}/>
    <Stack.Screen name="LabDetails" component={LabDetails}/>
    <Stack.Screen name="SliderImage" component={SliderImage}/>
    <Stack.Screen name="ResetPassword" title="Lab List" options={{headerShown:false}} component={ResetPassword} />
  </Stack.Navigator>  

)


// const 
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
   )
}
export default App;