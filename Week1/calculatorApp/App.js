import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function App() {

  const [number1, setNumber1] = React.useState("");
  const [number2, setNumber2] = React.useState("");
  const [result, setResult] = React.useState("")

  const plusNumbers = () => {
    const n1 = Number(number1)
    const n2 = Number(number2)
    let sum = n1 + n2;
    setResult(sum)
  }

  const minusNumbers = () => {
    const n1 = Number(number1)
    const n2 = Number(number2)
    let diff = n1 - n2;
    setResult(diff)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Result: {result}</Text>
        <TextInput
          value={number1}
          keyboardType='numeric'
          onChangeText={setNumber1}
          placeholder='Enter number 1'
        />
        <TextInput 
          value={number2}
          keyboardType='numeric' 
          onChangeText={setNumber2}
          placeholder='Enter number 2'
        />
      </View>
      <View style= {{flexDirection: 'row'}}>
        <Button onPress={plusNumbers} title='+'></Button>
        <Button onPress={minusNumbers} title='-'></Button>
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
