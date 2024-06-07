import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ExpenseContext } from '../context/ExpenseContext';

const AddExpenseScreen = ({ navigation, toggleTheme, isDarkTheme }) => {
  const { addExpense } = useContext(ExpenseContext);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddExpense = () => {
    console.log('Test');
    const newExpense = { amount, date: date.toISOString().split('T')[0], description };
    addExpense(newExpense);
    navigation.goBack();
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Container>
        <Header title="Expense Tracker" toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Content>
          <Title>Your Expense</Title>
          <InputContainer>
            <Input
              placeholder="Amount"
              placeholderTextColor={(props) => props.theme.placeholder}
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Input
                placeholder="Date"
                placeholderTextColor={(props) => props.theme.placeholder}
                value={date.toISOString().split('T')[0]}
                editable={false}
                pointerEvents="none"
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker value={date} mode="date" display="default" onChange={onChange} />
            )}
            <DescriptionInput
              placeholder="Description"
              placeholderTextColor={(props) => props.theme.placeholder}
              value={description}
              onChangeText={setDescription}
              multiline
            />
          </InputContainer>
          <ButtonContainer>
            <CancelButton onPress={() => navigation.goBack()}>
              <CancelText>Cancel</CancelText>
            </CancelButton>
            <AddButton
              onPress={() => {
                handleAddExpense;
              }}
            >
              <AddText>Add</AddText>
            </AddButton>
          </ButtonContainer>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${(props) => props.theme.primary};
  margin-bottom: 20px;
`;

const InputContainer = styled.View`
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  background-color: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.text};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const DescriptionInput = styled(Input)`
  height: 80px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const CancelButton = styled.TouchableOpacity`
  flex: 1;
  margin-right: 10px;
  background-color: ${(props) => props.theme.cancelButtonBackground};
  padding: 10px;
  border-radius: 5px;
`;

const AddButton = styled.TouchableOpacity`
  flex: 1;
  margin-left: 10px;
  background-color: ${(props) => props.theme.addButtonBackground};
  padding: 10px;
  border-radius: 5px;
`;

const CancelText = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.buttonText};
  font-weight: bold;
`;

const AddText = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.buttonText};
  font-weight: bold;
`;

export default AddExpenseScreen;
