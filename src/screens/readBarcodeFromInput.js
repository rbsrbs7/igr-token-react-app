import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import checkDigit from '../helper/checkDigit';
import ErrorMessage from '../components/ErrorMessage';

class ReadBarcodeFromInputScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      session: this.props.navigation.getParam("session"),
      errorMessage: "",
      barcode: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          The first step to verify your food is to get the GTIN-13 code on product packaging. 
          You can type the code or use the camera to read it.
        </Text>
        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.textInput}
            maxLength={13}
            placeholder="Type GTIN-13 code here"
            keyboardType='numeric'
            onChangeText={this.checkText}
            value={this.state.barcode}
          />
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity
            onPress={pageParams => {
              this.props.navigation.navigate('ReadBarcodeFromCameraScreen', pageParams); // id_page, pageParams
            }}
            style={styles.button}>
            <Text style={styles.textButton}>
              Use the Camera <Icon name="camera" size={20}/>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <ErrorMessage message={this.state.errorMessage} />
        </View>
      </View>
    );
  }

  componentDidMount() {
  }

  checkText = text => {
    this.setState({barcode: text, errorMessage: ""}, () => {
      if(this.state.barcode.length == 13) {
        if(checkDigit(this.state.barcode)) {
          let session = {...this.state.session};
          session.barcode = text;
          this.setState({session: session}, () => {
            this.props.navigation.navigate('ReadDateFromInputScreen', { session: this.state.session } );
          });
        } else {
          let errorMessage = "This is not a valid GTIN-13 code";
          this.setState({errorMessage:errorMessage});
        }
      }
    });
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

export default ReadBarcodeFromInputScreen;