import React from 'react';
import { View, Text, TextInput } from 'react-native';

export const Display = (props) => {

  const {label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing} = props;

  return(
    <View style={{padding: 16}}>
      <Text style={{padding: 8, fontSize: 18}}>{label}</Text>
      <TextInput 
        placeholder={placeholder} 
        value={value} 
        onChange={onChangeText} 
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        style={{padding:8, fontSize: 18}} 
      />
    </View>
)


}