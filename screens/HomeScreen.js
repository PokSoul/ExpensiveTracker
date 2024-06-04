import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/Header';

const HomeScreen = ({ toggleTheme, isDarkTheme }) => {
  return (
    <Container>
      <Header title="Expense Tracker" toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      {/* Vous pouvez ajouter d'autres composants ici, comme ExpenseListScreen et AddButton */}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

export default HomeScreen;
