import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput>Enter number 1</TextInput>
        <TextInput>Enter number 2</TextInput>
        <Text>Here we want the result!</Text>
        <Text>Again making changes</Text>
      </View>
      <View style= {{flexDirection: 'row'}}>
        <Button title='+'></Button>
        <Button title='-'></Button>
      </View>
      <StatusBar style="auto" />
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
