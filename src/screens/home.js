import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log("[HomeScreen|navigation]");
    console.log(this.props.navigate);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          This app helps you determine if a certain specific recipe 
          based food include any IGR certified ingredients. To do this the App 
          will ask you for the Barcode (GS1 GTIN-13) on the wrapping and the 
          latest date associoated with the production lot. Usually the date 
          is printed on the wrapper.
        </Text>
        <View style={styles.viewButton}>
          <TouchableOpacity
            onPress={pageParams => {
              this.props.navigation.navigate('ReadBarcodeFromInputScreen', pageParams);
            }}
            style={styles.button}>
            <Text style={styles.textButton}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  componentDidMount() {
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  textButton: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 45,
    alignItems: 'center',
    padding: 10
  }
});

export default HomeScreen;