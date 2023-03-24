import { StyleSheet, Text, View } from 'react-native';
import { Inputs } from './src/Components/Register/Inputs.js';
import { Homescreen } from './src/Components/Homescreen/Homescreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Inputs />
      <Homescreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9FA',
  },
});
