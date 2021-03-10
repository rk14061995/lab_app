import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './screens/splash';
import Registration from './screens/Registration';
import Dashboard from './screens/dashboard'
import Login from './screens/login';
import { MaterialCommunityIcons, AntDesign, EvilIcons} from '@expo/vector-icons'
import LabDetails from './screens/LabDetails'
import OtpVerification from './screens/OtpVerification'
import AppointementDetail from './screens/AppointementDetail'
import ResetPassword from './screens/ResetPassword';
// import Dashboard from './screens/dashboard';


const Tab = createBottomTabNavigator();
const Home = () => (
  <Tab.Navigator tabBarOption={{
    activeBackgroundColor: 'tomato',
    activeTintColor: 'white',
    inactiveBackgroundColor: '#eee',
    inactiveTintColor: 'black'
  }}>
    <Tab.Screen name="Home" component={Dashboard} options={{
      tabBarIcon: () => <MaterialCommunityIcons name="home" size={25} />
    }} />
    <Tab.Screen name="Track Now" component={Dashboard} options={{
      tabBarIcon: () => <AntDesign name="find" size={24} color="black" />
    }} />
    <Tab.Screen name="Notification" component={LabDetails} options={{
      tabBarIcon: () => <EvilIcons name="bell" size={24} color="black" />
    }} />
    <Tab.Screen name="Setting" component={Dashboard} options={{
      tabBarIcon: () => <AntDesign name="setting" size={24} color="black" />
    }} />
  </Tab.Navigator>
)

const LabTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOption={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: 'black'
    }}>
      <Tab.Screen name="Home" component={Dashboard} options={{
        tabBarIcon: () => <MaterialCommunityIcons name="home" size={25} />
      }} />
      <Tab.Screen name="Track Now" component={Dashboard} options={{
        tabBarIcon: () => <AntDesign name="find" size={24} color="black" />
      }} />
      <Tab.Screen name="Notification" component={LabDetails} options={{
        tabBarIcon: () => <EvilIcons name="bell" size={24} color="black" />
      }} />
      <Tab.Screen name="Setting" component={Dashboard} options={{
        tabBarIcon: () => <AntDesign name="setting" size={24} color="black" />
      }} />
    </Tab.Navigator>
  );
}
const LabStackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="LabDetails" title="Lab List" component={LabTabNavigator} />
  </Stack.Navigator>
);


const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Splash" component={Splash} header={null} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Registration} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="LabDetails" title="Lab List" component={LabDetails} />
  </Stack.Navigator>

)
const App = () => {
  return (
    // <NavigationContainer>
    //   <StackNavigator/>
    // </NavigationContainer>
    <View>
      <ResetPassword/>
    </View>
  )
}

export default App