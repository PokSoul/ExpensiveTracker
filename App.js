import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import CustomSplashScreen from './screens/CustomSplashScreen';
import { lightTheme, darkTheme } from './styles/themes';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    // Hide splash screen after 5 seconds
    const timer = setTimeout(() => setIsSplashVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSplashFinish = () => {
    setIsSplashVisible(false);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      {isSplashVisible ? (
        <CustomSplashScreen onFinish={handleSplashFinish} />
      ) : (
        <NavigationContainer>
          <AppNavigator toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </NavigationContainer>
      )}
    </ThemeProvider>
  );
}
