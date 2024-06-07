import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import Header from '../components/Header';
import { ExpenseContext } from '../context/ExpenseContext';

const HomeScreen = ({ toggleTheme, isDarkTheme }) => {
  const { expenses } = useContext(ExpenseContext);


  const renderExpense = ({ item }) => (
    <ExpenseItem>
      <View>
        <ExpenseTitle>{item.description}</ExpenseTitle>
        <ExpenseDate>{item.date}</ExpenseDate>
      </View>
      <ExpenseAmount>{item.amount}</ExpenseAmount>
    </ExpenseItem>
  );

  return (
    <Container>
      <Header title="Expense Tracker" toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Summary>
        <SummaryText>All</SummaryText>
        <SummaryAmount>$2357.08</SummaryAmount>
      </Summary>
      <FlatList
        data={expenses}
        renderItem={renderExpense}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ padding: 16 }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

const Summary = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #7649b3;
`;

const SummaryText = styled.Text`
  font-size: 18px;
  color: white;
`;

const SummaryAmount = styled.Text`
  font-size: 18px;
  color: white;
`;

const ExpenseItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #7e56ba;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

const ExpenseTitle = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;

const ExpenseDate = styled.Text`
  font-size: 14px;
  color: white;
`;

const ExpenseAmount = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
`;

export default HomeScreen;
