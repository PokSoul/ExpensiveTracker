import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/Header';
// import ExpenseListScreen from './ExpenseListScreen';
// import AddButton from '../components/AddButton';

const HomeScreen = ({ toggleTheme, isDarkTheme }) => {
  return (
    <Container>
      <Header title="Expense Tracker" toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      {/* <ExpenseListScreen />
      <AddButton /> */}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

export default HomeScreen;
