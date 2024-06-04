import React, { useEffect } from 'react';
import styled, { useTheme } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const CustomSplashScreen = ({ onFinish }) => {
  const theme = useTheme();

  useEffect(() => {
    const prepare = async () => {
      // Simulate a delay for the splash screen
      await new Promise(resolve => setTimeout(resolve, 2000));
      SplashScreen.hideAsync();
      if (onFinish) {
        onFinish();
      }
    };

    prepare();
  }, []);

  return (
    <Container style={{ backgroundColor: theme.background }}>
      <Logo source={require('../assets/logo.png')} />
      <AppName style={{ color: theme.primary }}>Expense Tracker</AppName>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

const AppName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

export default CustomSplashScreen;
