import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({label = "", content = ""}) => {
  return (
    <View style={style.view_line}>
      <Text style={[
        style.text,
        style.text_label,
        label.length > 12 ? style.text_long_label : null,
      ]}>
        { label }
      </Text>
      <Text style={[style.text, style.text_content]}>
        { content }
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  view_line: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    paddingLeft: 15,
  },
  text_label: {
    fontWeight: "bold",
    flex: 2,
  }, 
  text_long_label: {
    fontSize: 15,
  },
  text_content: {
    flex: 5,
  },
});

export default Line;