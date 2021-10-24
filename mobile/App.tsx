import React from 'react';
import { Home } from './src/screens/home';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { AuthProvider } from './src/context/auth';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontLoaded) {
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <StatusBar
        style="light"
        translucent
        backgroundColor="transparent"
      />
      <Home />
    </AuthProvider>
  );
}
