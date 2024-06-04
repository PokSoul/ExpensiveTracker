import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

const Tab = createBottomTabNavigator();

const AppNavigator = ({ toggleTheme, isDarkTheme }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'AddExpense') {
            iconName = 'plus-circle';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: isDarkTheme ? '#bb86fc' : '#6200ea',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: isDarkTheme ? '#121212' : '#ffffff',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
      >
        {(props) => <HomeScreen {...props} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
      </Tab.Screen>
      <Tab.Screen
        name="AddExpense"
        options={{
          headerShown: false,
        }}
      >
        {(props) => <AddExpenseScreen {...props} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
      </Tab.Screen>
      <Tab.Screen
        name="Settings"
        options={{
          headerShown: false,
        }}
      >
        {(props) => <HomeScreen {...props} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const ToggleButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
`;

export default AppNavigator;
