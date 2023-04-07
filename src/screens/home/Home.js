import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import {clone} from 'lodash';

import homeStyles from './homeStyles';

import PopUp from '../../components/popUp/PopUp';
import TaskContainer from '../../components/home/taskContainer/taskContainer';
import HomePopUp from '../../components/home/HomePopUp/HomePopUp';

import { getTodos, storeTodos } from '../../store/store';


const Home = () => {

  const styles = homeStyles;

  const [isVisibleAdd, setIsVisible] = useState(false);
  const [changeTaskId, setChangeTaskId] = useState(null);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos('todos').then(data => {
      setTodos(JSON.parse(data))
    });
  }, [])

  const handlePressAddTaskButton = () => {
    setIsVisible(true);
  }

  const handlePressChangeTask = (id) => {
    setIsVisible(true);
    setChangeTaskId(id);
  }

  const handlePressDeleteTask = (id) => {
    setTodos((todos) => {
      const newTodos = clone(todos);

      const updatedTodos = newTodos.filter((task) => task.id != id);
      storeTodos(updatedTodos);
      return updatedTodos;
    });
  }

  const handleCancel = () => {
    setIsVisible(false);
    setChangeTaskId(null);
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

    storeTodos(todos);
    setIsVisible(false);
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

  const handleChange = (value) => {
    setTodos((todos) => {
      const newTodos = clone(todos);

      index = newTodos.findIndex(task => task.id === changeTaskId);

      newTodos[index].task = value;

      return newTodos;
    })

    storeTodos(todos);
    setIsVisible(false);
    setChangeTaskId(null);
  }

  return (  
    <View style={styles.container}>
      <PopUp isVisible={isVisibleAdd}>
        <HomePopUp  handleCancel={handleCancel} handleOkay={changeTaskId? handleChange : handleAdd} taskValue={changeTaskId?todos.find(task => task.id === changeTaskId).task:""}/>
      </PopUp>
      <TaskContainer 
      handleDone={handleDone} 
      todos={todos} 
      handlePressAddTaskButton={handlePressAddTaskButton} 
      handlePressChangeTask={handlePressChangeTask} 
      handlePressDeleteTask={handlePressDeleteTask}/>             
    </View>
  );
}

export default Home;