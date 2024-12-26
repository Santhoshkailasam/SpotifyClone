import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaVrjXGExB5keOZD-D_UQFiU5M77TxNHA",
  authDomain: "spotifyapp-468be.firebaseapp.com",
  projectId: "spotifyapp-468be",
  storageBucket: "spotifyapp-468be.appspot.com",
  messagingSenderId: "777702797643",
  appId: "1:777702797643:web:e4dad16db68496fd5eb8ce",
};
let auth;
if (getApps().length === 0) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),  // Correct the usage here
  });
} else {
  auth = getAuth();  // Use the already initialized auth instance
}

export default auth;