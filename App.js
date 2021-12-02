import React from 'react';
import { LogBox } from 'react-native';
import Navigation from './app/navigations/Navigation';




LogBox.ignoreLogs(['Warning: ...']);

export default function App() {
  


  return <Navigation/>
}


