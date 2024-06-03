import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import AppNavigator from './navigation/AppNavigator';
import { lightTheme, darkTheme } from './styles/themes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <NavigationContainer>
        <AppNavigator toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </NavigationContainer>
    </ThemeProvider>
  );
}
