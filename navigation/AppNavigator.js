import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
//import AddExpenseScreen from '../screens/AddExpenseScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ title: 'Add Expense' }} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
