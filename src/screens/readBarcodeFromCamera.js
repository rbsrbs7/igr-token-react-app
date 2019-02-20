import React from 'react';
import axios from 'axios';
import Loading from '../components/Loading'
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import checkDigit from '../helper/checkDigit';
import ErrorMessage from '../components/ErrorMessage';

class ReadBarcodeFromCameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: this.props.navigation.getParam("session"),
      type: "",
      barcode: "",
      errorMessage: "",
      wait: false
    };
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.viewCamera}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.viewCapture}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              if(!this.state.wait) {
                this.setState({type: barcodes[0].type, barcode: barcodes[0].data, errorMessage: "", wait: true}, () => {
                  this.checkBarcode();
                });
              }
            }}
          />
        </View>
        <View style={styles.viewResponse}>
          <Text style={styles.text}>
            <Icon name="info" size={20}/> type: {this.state.type}
          </Text>
          <Text style={styles.text}>
            <Icon name="barcode" size={20}/> barcode: {this.state.barcode}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <ErrorMessage message={this.state.errorMessage} />
        </View>
      </View>
    );
  }

  componentDidMount() {
  }

  checkBarcode() {
    if(this.state.type.includes("EAN_13")) {
      if(checkDigit(this.state.barcode)) {
        let session = {...this.state.session};
        session.barcode = this.state.barcode;
        this.setState({session: session, errorMessage: ""}, () => {
          this.props.navigation.navigate('ReadDateFromInputScreen', { session: this.state.session });
          setTimeout(() => { // wait 5 seconds to allow new camera reads
            this.setState({wait: false});
          }, 5000);
        });
      }
    } else {
      let errorMessage = "This is not a valid GTIN-13 code";
      this.setState({errorMessage:errorMessage, wait: false});
    }
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 6,
    backgroundColor: '#000',
  },
  viewCamera: {
    flex: 4,
    backgroundColor: '#000',
    alignItems: 'center'
  },
  viewCapture: {
    flex: 1,
    backgroundColor: '#000',
    padding: 2,
    alignSelf: 'center',
  },
  viewResponse: {
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    margin: 10
  }
});

export default ReadBarcodeFromCameraScreen;