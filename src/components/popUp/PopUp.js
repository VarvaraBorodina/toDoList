import React, { useState } from 'react';
import { TextInput, Modal, View, Pressable, Text } from 'react-native';
import PopUpStyles from './PopUpStyles';

const PopUp = ({isVisible, handleCancel, handleAdd}) => {

  styles = PopUpStyles;

  const [input, setInput] = useState('');

  const handleInputChange = (input) => {
    setInput(input)
  }

  return (  
    <Modal
    transparent={true}
    visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.modal}>
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
      </View>
    </Modal>
  );
}

export default PopUp;