import React from 'react';
import { View, FlatList } from 'react-native';
import { useState } from 'react';

import Task from '../task/task';

const TaskContainer = ({todos}) => {

  const [selectedId, setSelectedId] = useState();

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={Task}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
}

export default TaskContainer;