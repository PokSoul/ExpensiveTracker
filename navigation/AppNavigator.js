import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
//import AddExpenseScreen from '../screens/AddExpenseScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ title: 'Add Expense' }} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
