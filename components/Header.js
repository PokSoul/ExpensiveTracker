import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

const Header = ({ title, toggleTheme, isDarkTheme }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ToggleButton onPress={toggleTheme}>
        <Icon
          name={isDarkTheme ? 'sun' : 'moon'}
          size={24}
          color={isDarkTheme ? '#ffd700' : '#ffffff'}
        />
      </ToggleButton>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 80px;
  padding-top: 36px;
  background-color: ${(props) => props.theme.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const ToggleButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
`;

export default Header;
