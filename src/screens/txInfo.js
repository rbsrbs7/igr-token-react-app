import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StringDecoder } from 'string_decoder';
import hex2ascii from 'hex2ascii';

export default class TxInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txInfo: this.props.navigation.state.params.txInfo
    }
  }

  render() {
    const { hash, blockNumber, from, to, value, input } = this.state.txInfo;
    return (
      <ScrollView>
        <View style={styles.viewTxInfo}>
          <View style={styles.viewData}>
            <Text style={styles.textLabel}>
              <Icon name="hashtag" size={20}/> TxHash: 
              <Text style={styles.textValue}>
                {hash} 
              </Text>
            </Text>
          </View>
          <View style={styles.viewData}>
            <Text style={styles.textLabel}>
              <Icon name="calculator" size={20}/> Block:  
              <Text style={styles.textValue}>
                {blockNumber} 
              </Text>
            </Text>
          </View>
          <View style={styles.viewData}>
            <Text style={styles.textLabel}>
              <Icon name="sign-in" size={20}/> from: 
              <Text style={styles.textValue}>
                {from} 
              </Text>
            </Text>
          </View>
          <View style={styles.viewData}>
            <Text style={styles.textLabel}>
              <Icon name="sign-out" size={20}/> to: 
              <Text style={styles.textValue}>
                {to} 
              </Text>
            </Text>
          </View>
          <View style={styles.viewData}>
            <Text style={styles.textLabel}>
              <Icon name="usd" size={20}/> value:  
              <Text style={styles.textValue}>
                {value} Ether 
              </Text>
            </Text>
          </View>
          <View style={styles.viewData}>
            <Text style={styles.textLabel}>
              <Icon name="file-text-o" size={20}/> input:  
              <Text style={styles.textValue}>
                {this.hexToAscii(input)} 
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }

  componentDidMount() {
  }

  hexToAscii(string) {
    var asciiString = hex2ascii(string);
    return asciiString;
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  viewTxInfo: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#bbb",
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  viewData: {
    flex: 1,
    flexDirection: 'row',
  },
  textLabel: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 15,
  },
  textValue: {
    fontSize: 20,
    fontWeight: "normal"
  }
});