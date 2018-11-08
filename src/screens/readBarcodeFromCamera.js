import React from 'react';
import axios from 'axios';
import Loading from '../components/Loading'
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

class ReadBarcodeFromCameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      barcode: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style = {styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            this.setState({type: barcodes[0].type});
            this.setState({barcode: barcodes[0].data});
          }}
        />
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={styles.text}>
            type: {this.state.type}
          </Text>
          <Text style={styles.text}>
            barcode: {this.state.barcode}
          </Text>
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
    backgroundColor: 'black'
  },
  preview: {
    flex: 5,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  text: {
    color: '#fff',
    fontSize: 15,
    margin: 10
  }
});

export default ReadBarcodeFromCameraScreen;