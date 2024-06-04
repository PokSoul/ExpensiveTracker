import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/Header';

const AddExpenseScreen = ({ toggleTheme, isDarkTheme }) => {
  return (
    <Container>
      <Header title="Expense Tracker" toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      {/* Ajoutez le formulaire pour ajouter des dépenses ici */}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

export default AddExpenseScreen;
