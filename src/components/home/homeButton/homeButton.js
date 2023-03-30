import React from 'react';
import { Text, Pressable, View } from 'react-native';
import homeButtonStyles from './homeButtonStyles';

const HomeButton = ({onPress}) => {

  const styles = homeButtonStyles;

  return (
    <Pressable onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>ADD TASK</Text>
      </View>
    </Pressable>
  );
}

export default HomeButton;