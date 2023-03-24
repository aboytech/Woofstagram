import { StyleSheet, Text, View } from 'react-native';
import { Inputs } from './src/Components/Register/Inputs.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Inputs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
