import React, { useEffect } from 'react';
import styled from 'styled-components/native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2000); // Splash screen dure 2 secondes

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Container>
      <Logo source={require('../assets/logo.png')} />
      <AppName>ExpenseTracker</AppName>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #6200ea;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const AppName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export default SplashScreen;
