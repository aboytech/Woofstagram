import React from 'react';
import { View } from 'react-native';
import { Avatar } from '../../Reusable/Avatar';
import { Title } from '../../Reusable/Title';
import { woofCardStyles } from './woofCardStyles.js';

export const WoofCard = (props) => (
  <View style={woofCardStyles.card}>
    <Avatar url={props.avatar}/>
    <View style={woofCardStyles.title}>
      <Title>{props.name}</Title>
    </View>
  </View>
);