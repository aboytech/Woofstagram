import React from 'react';
import { Text } from 'react-native';
import { stylesReusable } from './stylesReusable.js';

const Heading = (props) => {


  return (
    <Text style={stylesReusable.heading}>
      {props.children}
    </Text>
  );

}