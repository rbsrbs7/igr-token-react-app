import React from 'react';
import Autolink from 'react-native-autolink';
import hex2ascii from 'hex2ascii';

const hexToAscii = hexString => {
  var asciiString = hex2ascii(hexString);
  return (
    <Autolink
      text={asciiString}
    />
  );
}

export default hexToAscii;