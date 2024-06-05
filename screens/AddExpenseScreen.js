import React, { useState } from 'react';
import { TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';
import { Feather } from '@expo/vector-icons';

const AddExpenseScreen = ({ navigation, toggleTheme, isDarkTheme }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

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
            <Input
              placeholder="Date"
              placeholderTextColor={(props) => props.theme.placeholder}
              value={date}
              onChangeText={setDate}
            />
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
                /* Handle add expense */
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
  color: ${(props) => props.theme.cancelButtonText};
  font-weight: bold;
`;

const AddText = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.addButtonText};
  font-weight: bold;
`;

export default AddExpenseScreen;
