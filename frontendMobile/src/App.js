import { useState } from 'react';
import HomeScreen from './Screens/HomeScreen';
import JournalingScreen from './Screens/JournalingScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  // This is the current navigation system we have. This will change in the near future!
  const [currentScreen, setCurrentScreen] = useState("Home")

  const navigateTo = (screenName) => {
    setCurrentScreen(screenName);
  };

  return (
    <NavigationContainer>
      {currentScreen === 'Home' && <HomeScreen navigateTo={navigateTo} />}
      {currentScreen === 'Journaling' && <JournalingScreen navigateTo={navigateTo} />}
    </NavigationContainer>
  );
}
