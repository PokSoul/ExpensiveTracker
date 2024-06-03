import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
// import AddExpenseScreen from '../screens/AddExpenseScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = ({ toggleTheme, isDarkTheme }) => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home">
        {(props) => (
          <HomeScreen
            {...props}
            toggleTheme={toggleTheme}
            isDarkTheme={isDarkTheme}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Screen>
      {/* <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ title: 'Add Expense' }} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
