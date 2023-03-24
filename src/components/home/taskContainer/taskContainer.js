import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useState } from 'react';

import Task from '../task/task';

const TaskContainer = ({todos, isDone}) => {

  const [selectedId, setSelectedId] = useState();

  return (
    <View>
      <FlatList
        data={todos.filter(todo => todo.isDone === isDone)}
        renderItem={Task}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
}

export default TaskContainer;