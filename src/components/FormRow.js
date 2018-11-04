import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormRow = props => {
  const { children, first, last } = props;
  return (
    <View style={[
        style.container, 
        first ? style.first: null,
        last ? style.last: null
      ]}>
      { children }
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 5,
    elevation: 1,
  },
  first: {
    marginTop: 10,
  },
  last: {
    marginBottom: 10
  }
});

export default FormRow;