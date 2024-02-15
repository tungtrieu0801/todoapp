import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import homescreen from './src/home/homescreen'
import HomeScreen from './src/home/homescreen';
const App = () => {
  return (
    <>
      <StatusBar translucent
      barStyle={'light-content'}
      backgroundColor={"transparent"} 
      />
      <HomeScreen />
    </>

  );
};

export default App