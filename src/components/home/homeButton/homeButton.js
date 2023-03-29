import React from 'react';
import { Text, Pressable, View } from 'react-native';
import homeButtonStyles from './homeButtonStyles';

const HomeButton = () => {

  const styles = homeButtonStyles;

  const onPressMore = () => {
    console.log("Press");
  }

  return (
    <Pressable onPress={onPressMore}>
      <View style={styles.button}>
        <Text style={styles.text}>ADD TASK</Text>
      </View>
    </Pressable>
  );
}

export default HomeButton;