import React from 'react';
import { Text, Pressable } from 'react-native';
import homeButtonStyles from './homeButtonStyles';

const HomeButton = () => {

  const styles = homeButtonStyles;

  const onPressMore = () => {
    console.log("Press");
  }

  return (
    <Pressable onPress={onPressMore} title="Add task" styles={styles.button}>
          <Text style={styles.button}>Add task</Text>
      </Pressable>
  );
}

export default HomeButton;