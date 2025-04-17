// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomNavigation';
import LoginScreen from './screens/Login';
import ProfileScreen from './screens/Profile';
import NotificationScreen from './screens/Notification'
import BookingScreen from './screens/Booking';

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTabs} options={{title: 'Welcome'}} />
      <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login'}} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Profile'}} />
      <Stack.Screen name="Notifications" component={NotificationScreen} options={{title: 'Notifications'}} />
      <Stack.Screen name="Booking" component={BookingScreen} options={{title: 'Booking'}} />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
            <NavigationContainer>
                <RootStack/>
            </NavigationContainer>
  );
}
