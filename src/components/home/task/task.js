import React from 'react';
import { Text, View, Pressable } from 'react-native';

import taskStyles from './taskStyles';
import COLORS from "../../../constants/colors";

import { format } from "date-fns";

const Task = ({item}) => {

  const styles = taskStyles;

  return (
    <View style={{...styles.container, backgroundColor: COLORS.TASK_PRIORITY[item.priority]}}>
        <View>
            <Text style={styles.task}>{item.task}</Text>
            <Text>{format(item.time, "MM.dd.yyyy")}</Text>
        </View>
        <View style={styles.buttons}>
            <View style={styles.button}><Text>X</Text></View>
            <View style={styles.button}><Text>D</Text></View>
        </View>
    </View>
  );
}

export default Task;