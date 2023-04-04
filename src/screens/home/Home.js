import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import {clone} from 'lodash';

import homeStyles from './homeStyles';

import PopUp from '../../components/popUp/PopUp';
import TaskContainer from '../../components/home/taskContainer/taskContainer';
import AddTaskPopUp from '../../components/home/addTaskPopUp/AddTaskPopUp';

import { getTodos, storeTodos } from '../../store/store';


const Home = () => {

  const styles = homeStyles;

  const [isVisible, setIsVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    storeTodos([]);
    getTodos('todos').then(data => {
      setTodos(JSON.parse(data))
    });
  }, [])

  const handlePressAddTaskButton = () => {
    setIsVisible((isVisible) => true)
  }

  const handleCancel = () => {
    setIsVisible((isVisible) => false);
  }

  const handleAdd = (input) => {
    setTodos((todos) => {
      const newTodos = clone(todos);
      const currentDate = new Date();

      const newTask = {
        id: currentDate.getTime(),
        task: input,
        time: currentDate.toString(),
        isDone: false
      };
      newTodos.unshift(newTask);
      
      return newTodos;
    })

    setIsVisible((isVisible) => false);
  }

  const handleDone = (id) => {

    setTodos((todos) => {
      const newTodos = clone(todos);

      index = newTodos.findIndex(task => task.id === id);

      newTodos[index].isDone = true;

      return newTodos;
    })

    storeTodos(todos);
  }

  return (  
    <View style={styles.container}>
      <PopUp isVisible={isVisible} handleCancel={handleCancel} handleAdd={handleAdd}>
        <AddTaskPopUp  handleCancel={handleCancel} handleAdd={handleAdd} />
      </PopUp>
      <TaskContainer handleDone={handleDone} todos={todos} handlePressAddTaskButton={handlePressAddTaskButton} />             
    </View>
  );
}

export default Home;