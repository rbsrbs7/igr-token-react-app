import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const timeDifference = previous => {
  var current = Date.now();
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;
  var elapsed = current - previous * 1000;

  if (elapsed < msPerMinute) {
     return Math.round(elapsed/1000) + ' seconds ago';   
  } else if (elapsed < msPerHour) {
     return Math.round(elapsed/msPerMinute) + ' minutes ago';   
  } else if (elapsed < msPerDay ) {
     return Math.round(elapsed/msPerHour ) + ' hours ago';   
  } else if (elapsed < msPerMonth) {
    return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';   
  } else if (elapsed < msPerYear) {
    return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';   
  } else {
    return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';   
  }
}

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