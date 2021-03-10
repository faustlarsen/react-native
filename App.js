import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [eneterGoal,setEnteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    console.log(eneterGoal)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInputHandler} 
          value={eneterGoal}
          />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50, 
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderColor: 'red', 
    borderWidth: 1, 
    padding: 10 
  }

});


