import React from 'react';
import { View } from 'react-native';

import homeStyles from './homeStyles';
import HomeButton from '../../components/home/homeButton/homeButton';
import TaskContainer from '../../components/home/taskContainer/taskContainer';

const todos = [
  { id: 1,
    task: "1234567890",
    time: new Date('2023-02-17T03:12:35'),
    isDone: false,
    priority: 0,
  },
  {
    id: 2,
    task: "Qwerty uiop",
    time: new Date('2023-01-23T03:22:38'),
    isDone: false,
    priority: 1,
  },
  {
    id: 3,
    task: "Asdfgh jklzx",
    time: new Date('2023-03-07T03:01:23'),
    isDone: false,
    priority: 2,
  },
]

const Home = () => {

  const styles = homeStyles;

  return (
    <View style={styles.container}>
      <HomeButton/>
      <TaskContainer todos={todos}/>
    </View>
  );
}

export default Home;
