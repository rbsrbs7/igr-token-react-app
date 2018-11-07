import React from 'react';
import axios from 'axios';
import Loading from '../components/Loading'
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

class CameraGTIN13Reader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barcode: ""
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
            this.setState({barcode: barcodes});
          }}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          <Text style={styles.textBarcode}>
            {this.barcode}
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
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
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
    color: '#000',
    fontSize: 15,
    margin: 10
  }
});

export default CameraGTIN13Reader;