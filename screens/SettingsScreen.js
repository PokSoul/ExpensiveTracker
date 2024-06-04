import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const SettingsScreen = () => {
  return (
    <Container>
      <Text>Settings Screen</Text>
      {/* Ajoutez les options de paramètres ici */}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

export default SettingsScreen;
