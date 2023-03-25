import { StyleSheet, View, Text } from 'react-native';
import { Inputs } from './src/Components/Register/Inputs.js';
import { HomeScreen } from './src/Components/Homescreen/Homescreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9FA'
  }
})