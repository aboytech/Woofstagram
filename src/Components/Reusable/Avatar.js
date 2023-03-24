import React from 'react';
import { Image } from 'react-native';
import { stylesReusable } from './stylesReusable.js';

const Avatar = (props) => {


  return (
    <Image
      style={stylesReusable.avatar}
      source={{ uri: props.url }}
    />
  );

}