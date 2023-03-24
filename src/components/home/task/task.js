import React from 'react';
import { Text, View, Pressable } from 'react-native';

import taskStyles from './taskStyles';
import COLORS from "../../../constants/colors";

import { format } from "date-fns";

const Task = ({item}) => {

  const styles = taskStyles;

  return (
    <View style={{...styles.container, backgroundColor:(item.isDone?COLORS.TASK_BACKGROUND_COLOR_DONE:COLORS.TASK_BACKGROUND_COLOR)}}>
        <View style={styles.task}>
          <Pressable>
          <View style={styles.button}>
            <Text style={{...styles.mark, color:(item.isDone?COLORS.TASK_BUTTON_COLOR_DONE:COLORS.TASK_BUTTON_BACKGROUND_COLOR)}}>&#10003;</Text>
            </View>
          </Pressable>
            <Text style={{...styles.text, color:(item.isDone?COLORS.TASK_TEXT_COLOR_DONE:COLORS.TASK_TEXT_COLOR)}}>{item.task}</Text>
        </View>
        <View>
            <Text style={{...styles.date, color:(item.isDone?COLORS.TASK_DATE_COLOR_DONE:COLORS.TASK_TEXT_COLOR)}}>{format(item.time, "MM.dd.yyyy")}</Text>
        </View>
    </View>
  );
}

export default Task;