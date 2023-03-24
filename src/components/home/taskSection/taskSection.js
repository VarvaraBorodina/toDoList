import React from 'react';
import { View, Text } from 'react-native';
import { useState } from 'react';

import TaskContainer from '../taskContainer/taskContainer';
import taskSectionStyles from './taskSectionStyles';

const TaskSection = ({todos, isDone}) => {
    
    const styles = taskSectionStyles;

    return (
    <View style={styles.section}>
        <Text style={styles.title}>{isDone?'COMPLETED':'TO DO'}</Text>
        <TaskContainer todos={todos} isDone={isDone}/>
    </View>
    );
}

export default TaskSection;