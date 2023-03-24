import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Display } from './Display.js';

export const Inputs = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirmation, setPassConfirmation] = useState('');
  const [petName, setPetName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [toy, setToy] = useState('');

  const evaluatePasswords = ({nativeEvent: {text}}) => {
    if(text !== password){
      alert('Passwords must match!')
    }
  }

  return(

    <ScrollView>


      <Display 
        label='Email'
        placeholder='example@gmail.com'
        value={email}
        onChangeText={setEmail}
      />

      <Display 
        label='Password'
        placeholder='********'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Display 
        label='Confirm Password'
        placeholder='********'
        value={passConfirmation}
        onChangeText={setPassConfirmation}
        secureTextEntry
        onSubmitEditing={evaluatePasswords}
      />

      <Display 
        label='Pet Name'
        placeholder='Tobias'
        value={petName}
        onChangeText={setPetName}
      />

      <Display 
        label='Pet Birthday'
        placeholder='21 of April 1995'
        value={birthday}
        onChangeText={setBirthday}
      />

      <Display 
        label='Breed'
        placeholder='Dalmatian'
        value={breed}
        onChangeText={setBreed}
      />

      <Display 
        label='Favorite Toy'
        placeholder='Tennis Ball'
        value={toy}
        onChangeText={setToy}
      />


    </ScrollView>

  )

}