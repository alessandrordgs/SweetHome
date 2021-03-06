import React from 'react';
import {useFonts,Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold, Poppins_400Regular} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';
import Routes from './src/routes'


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }
  return ( 
   <Routes/>
  );
}

 


