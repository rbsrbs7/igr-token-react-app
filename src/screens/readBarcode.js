import React from 'react';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CameraGTIN13Reader from '../components/CameraGTIN13Reader';
import KeyboardGTIN13Reader from '../components/KeyboardGTIN13Reader';

class ReadBarcodeScreen extends React.Component<*, State> {
  
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'cameraBarcode', title: 'By Camera' },
        { key: 'keyboardBarcode', title: 'By Keyboard' },
      ],
    };
    console.log("[ReadBarcodeScreen|navigation]");
    console.log(this.props.navigation);
  }

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }

  componentDidMount() {
  };

  mountCameraBarcodeScreen = () => (
    <CameraGTIN13Reader />
  );

  mountKeyboardBarcodeScreen = () => (
    <KeyboardGTIN13Reader navigation={this.props.navigation} />
  );

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  _renderScene = SceneMap({
    cameraBarcode: this.mountCameraBarcodeScreen,
    keyboardBarcode: this.mountKeyboardBarcodeScreen
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default ReadBarcodeScreen;