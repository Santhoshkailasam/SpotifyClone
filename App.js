import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Source/Login';
import Searchscreen from './Source/searchscreen';
import Homescreen from './Source/Homescreens';
import LibraryScreen from './Source/Libraryscreen';
import RegisterScreen from './Source/Registerpage';
import Loginscreen from './Source/EnterLoginpage';
import { createStackNavigator } from '@react-navigation/stack';  // Correct import
import AlbumViewscreen from './Source/albumViewscreen';

const Stack = createStackNavigator();  // Create stack navigator

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Signup" component={Loginscreen}/>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Search" component={Searchscreen} />
        <Stack.Screen name="Library" component={LibraryScreen} />
        <Stack.Screen name="Album" component={AlbumViewscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
