import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';  // Correct import

const Splash = () => {
  useEffect(() => {
    // Prevent the splash screen from hiding automatically
    SplashScreen.preventAutoHideAsync();

    setTimeout(() => {
      // Hide the splash screen after 3 seconds
      SplashScreen.hideAsync();
    }, 1000);
  }, []);

  return (
    <View style={{ backgroundColor: 'black', paddingTop: 350, flex: 1, paddingLeft: 100 }}>
      <Image source={require('../assets/Logo.png')} style={{ width: 150, height: 150 }} />
    </View>
  );
};

export default Splash;
