import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

const App = () => {

  const [number, setNewNumber] = useState(0)

  function handleNumber (){
    const newNumber = Math.floor(Math.random() * 100);
    setNewNumber(newNumber);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.number}>{number}</Text>
      <TouchableOpacity onPress={handleNumber} style={style.button}>
        <Text style={style.textDefault}>Gera um numero aleatorio</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  number: {
    color: 'white',
    fontSize: 80,
  },
  textDefault: {
    fontSize: 20,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 50,
    marginVertical: 50,
    paddingHorizontal: 20,
    height: 50,
    justifyContent: 'center',
  }
})

export default App;
