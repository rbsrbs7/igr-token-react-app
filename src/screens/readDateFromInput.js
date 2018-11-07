import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ReadDateFromInputScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          The second step is to get the validity date on product packaging.
        </Text>
        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.textInput}
            maxLength={14}
            placeholder="Type date here on format YYYYMM"
            keyboardType='numeric'
            onChangeText={this.checkText}
            value={this.state.date}
          />
        </View>
      </View>
    );
  }

  componentDidMount() {
  };

  checkText = text => {
    this.setState({date: text});
    if(this.state.date.length == 13) {
      this.props.navigation.navigate('HomeScreen');
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewTextInput: {
    justifyContent: 'center',
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  viewButton: {
    flex: 0, 
    margin: 20,
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  text: {
    color: '#000',
    fontSize: 15,
    margin: 10
  },
});

export default ReadDateFromInputScreen;