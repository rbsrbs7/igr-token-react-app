import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import TxInfo from './TxInfo';

const TxInfos = props => {
  const { txInfos, onPressTxInfo } = props;
  return (
    <FlatList
      data={ txInfos }
      renderItem={({ item, index }) => (
        <TxInfo 
          txInfo={item} 
          navigateToTxInfoScreen={onPressTxInfo}
          index={index}
        />
      )}
      keyExtractor={item => item.hash} 
    />
  );
}

const style = StyleSheet.create({
  txInfos: {
    backgroundColor: "#fff"
  }
});

export default TxInfos;