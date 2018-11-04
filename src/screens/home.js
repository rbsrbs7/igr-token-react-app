import React from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  };

  mountScreen() {
    return (
      <View style={style.viewBody}>
        <Text style={style.textIntroduce}>
          This app helps you determine if a certain specific recipe 
          based food include any IGR certified ingredients. To do this the App 
          will ask you for the Barcode (GS1 GTIN-13) on the wrapping and the 
          latest date associoated with the production lot. Usually the date 
          is printed on the wrapper.
        </Text>
        <Button
          onPress={pageParams => {
            this.props.navigation.navigate('readBarcode', pageParams); // (id_page, params)
          }}
          title="Read Barcode"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }

  render() {
    return (
      this.mountScreen()
    );
  }
}

const style = StyleSheet.create({
  viewBody: {
    flex: 1,
  }, 
  textIntroduce: {
    color: '#000',
    fontSize: 15,
    margin: 10
  }
});

export default Home;