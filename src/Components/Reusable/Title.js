import React from 'react';
import { Text } from 'react-native';
import { stylesReusable } from './stylesReusable.js';

export const Title = (props) => {


  return (
    <Text style={stylesReusable.title}>
      {props.children}
    </Text>
  );

}
