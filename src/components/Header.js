import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = props => (
  <View style={style.container}>
    <Text style={style.title}>{props.title}</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#f1c232ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 50,
    color: '#000'
  }
});

export default Header;