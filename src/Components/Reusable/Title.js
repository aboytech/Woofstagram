import React from 'react';
import { Text } from 'react-native';
import { stylesReusable } from './stylesReusable.js';

const Title = (props) => {


  return (
    <Text style={stylesReusable.title}>
      {props.children}
    </Text>
  );

}
