import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loading = props => {
  return (
    <ActivityIndicator size={'large'} color={'#FF0000'} />
  );
}

export default Loading;