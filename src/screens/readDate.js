import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ReadDateScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      barcode: ""
    };
    console.log("[ReadDateScreen|constructor]");
    console.log(this.props.navigation);
  }
  
  static navigationOptions = {
    header: () => null,  //this will hide the Stack navigator's header (TabA_StackNavigator)
    tabBarVisible: false //this will hide the TabBar navigator's header (LoggedIn_TabNavigator)
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.textInput}
            maxLength={14}
            keyboardType='numeric'
            onChangeText={this.checkText}
            value={this.state.barcode}
          />
        </View>
        <View style={styles.viewTextInput}>
          <Text style={styles.text}>
            barcode: {this.state.barcode}
          </Text>
        </View>
      </View>
    );
  }

  componentDidMount() {
  };

  checkText = text => {
    this.setState({barcode: text});
    if(this.state.barcode.length == 13) {
      this.props.navigation.navigate('Home');
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  viewTextInput: {
    flex: 1, 
    margin: 20,
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  textInput: {
    width: 300,
    height: 45, 
    borderWidth: 0,
  }
});

export default ReadDateScreen;