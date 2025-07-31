import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.layout}>Sylvester Nyangulu</Text>
      <Text style={styles.layout1}>Mobile App Scripting</Text>
      <Text style={styles.layout2}>(MAST5112 ICE TASK 1)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
layout: {
  fontSize: 25,
  alignItems: 'center',
  textShadowColor: '#000000',
},
layout1: {
  fontSize: 20,
  alignItems: 'center',
  textShadowColor: '#000000',
},
layout2: {
  fontSize: 15,
  alignItems: 'center',
  textShadowColor: '#555',
},
});
