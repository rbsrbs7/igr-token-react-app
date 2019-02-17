import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import timeDifference from '../helper/timeDifference';

const TxInfo = props => {
  const { txInfo, navigateToTxInfoScreen, index } = props;
  const { hash, blockNumber, timestamp, from, to, value  } = txInfo;
  const age = timeDifference(timestamp);

  return (
    <TouchableOpacity onPress={() => navigateToTxInfoScreen({ txInfo })}>
      <View style={styles.viewContainer}>
        <View style={styles.viewTxInfo}>
          <View style={styles.viewData}>
            <Text style={styles.textLabel}>
              <Icon name="hashtag" size={20}/> TxHash: 
            </Text>
            <Text style={styles.textValue}>
              {hash.trunc(20)} 
            </Text>
          </View>
          <View style={styles.viewData}>
            <Text style={styles.textLabel}>
              <Icon name="calculator" size={20}/> Block: 
            </Text>
            <Text style={styles.textValue}>
              {blockNumber} 
            </Text>
          </View>
          <View style={styles.viewData}>
            <Text style={styles.textLabel}>
              <Icon name="clock-o" size={20}/> Age: 
            </Text>
            <Text style={styles.textValue}>
              {age} 
            </Text>
          </View>
          <View style={styles.viewData}>
            <Text style={styles.textLabel}>
              <Icon name="sign-in" size={20}/> from: 
            </Text>
            <Text style={styles.textValue}>
              {from.trunc(20)} 
            </Text>
          </View>
          <View style={styles.viewData}>
            <Text style={styles.textLabel}>
              <Icon name="sign-out" size={20}/> to:
            </Text>
            <Text style={styles.textValue}>
              {to.trunc(20)} 
            </Text>
          </View>
          <View style={styles.viewData}>
            <Text style={styles.textLabel}>
              <Icon name="usd" size={20}/> value: 
            </Text>
            <Text style={styles.textValue}>
              {value} Ether 
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

String.prototype.trunc = String.prototype.trunc || function(n) {
  return (this.length > n) ? this.substr(0, n-1) + '...' : this;
};

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
    paddingLeft: 15,
  },
});

export default TxInfo;