import React, { useState } from 'react';
import { TextInput, View, Pressable, Text } from 'react-native';
import AddTaskPopUpStyles from './AddTaskPopUpStyles';

const AddTaskPopUp = ({handleCancel, handleAdd}) => {

  styles = AddTaskPopUpStyles;

  const [input, setInput] = useState('');

  const handleInputChange = (input) => {
    setInput(input)
  }

  return (  
    <View style={styles.container}>
       <TextInput style={styles.input} onChangeText={handleInputChange}/>          
          <View style={styles.buttons}>
            <Pressable style={styles.button}>
              <Text style={styles.text} onPress={() => handleAdd(input)}>Okay</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleCancel}>
              <Text style={styles.text}>Cancel</Text>
            </Pressable>
          </View>
    </View>
  );
}

export default AddTaskPopUp;