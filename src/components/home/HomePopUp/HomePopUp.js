import React, { useState } from 'react';
import { TextInput, View, Pressable, Text } from 'react-native';
import HomePopUpStyles from './HomePopUpStyles';

const HomePopUp = ({handleCancel, handleOkay}) => {

  styles = HomePopUpStyles;

  const [input, setInput] = useState('');

  const handleInputChange = (input) => {
    setInput(input)
  }

  return (  
    <View style={styles.container}>
       <TextInput style={styles.input} onChangeText={handleInputChange}/>          
          <View style={styles.buttons}>
            <Pressable style={styles.button}>
              <Text style={styles.text} onPress={() => handleOkay(input)}>Okay</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.text} onPress={() => handleCancel()}>Cancel</Text>
            </Pressable>
          </View>
    </View>
  );
}

export default HomePopUp;