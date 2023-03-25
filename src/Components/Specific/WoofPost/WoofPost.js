import React from 'react';
import { View, Image, Text } from 'react-native';
import { Title } from '../../Reusable/Title.js';
import { woofPostStyles } from './woofPostStyles.js';

export const WoofPost = (props) => (
  <View style={woofPostStyles.layout}>
    <Image source={{ uri: props.image }} style={woofPostStyles.image} />
    <View style={woofPostStyles.content}>
      <Title>{props.title}</Title>
      <Text style={woofPostStyles.description}>{props.description}</Text>
    </View>
  </View>
);