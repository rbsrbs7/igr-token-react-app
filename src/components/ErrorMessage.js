import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorMessage = props => {
  const {message} = props;
  return (
    <Text style={style.message}>
      {message}
    </Text>
  )
};

const style = StyleSheet.create({
  message: {
    color: '#FF0000',
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
  }
});

export default ErrorMessage;