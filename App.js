import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , ScrollView, FlatList} from 'react-native';

export default function App() {
  const [eneterGoal,setEnteredGoal] = useState('');
  const [courseGoals,setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {key: Math.random().toString(), value: eneterGoal}
    ]);
  };

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
      <FlatList  
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
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
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10 
  },
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderRightWidth: 1
  }

});


