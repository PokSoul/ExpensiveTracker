import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
// import ExpenseListScreen from './ExpenseListScreen';
// import AddButton from '../components/AddButton';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Header title="Expense Tracker" />
      {/* <ExpenseListScreen />
      <AddButton /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default HomeScreen;
