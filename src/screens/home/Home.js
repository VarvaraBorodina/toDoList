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

  const [isVisibleAdd, setIsVisibleAdd] = useState(false);
  const [isVisibleChange, setIsVisibleChange] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos('todos').then(data => {
      setTodos(JSON.parse(data))
    });
  }, [])

  const handlePressAddTaskButton = () => {
    setIsVisibleAdd((isVisible) => true)
  }

  const handlePressChangeTask = () => {
    setIsVisibleChange((isVisible) => true)
  }

  const handlePressDeleteTask = (id) => {
    setTodos((todos) => {
      const newTodos = clone(todos);

      return newTodos.filter((task) => task.id != id);
    })

    storeTodos(todos);
  }

  const handleCancel = () => {
    setIsVisibleAdd((isVisible) => false);
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

    setIsVisibleAdd((isVisible) => false);
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

  const handleChange = (id, value) => {
    setTodos((todos) => {
      const newTodos = clone(todos);

      index = newTodos.findIndex(task => task.id === id);

      newTodos[index].task = value;

      return newTodos;
    })

    storeTodos(todos);
  }

  return (  
    <View style={styles.container}>
      <PopUp isVisible={isVisibleAdd}>
        <HomePopUp  handleCancel={handleCancel} handleOkay={handleAdd} />
      </PopUp>
      <PopUp isVisible={isVisibleChange}>
        <HomePopUp  handleCancel={handleCancel} handleOkay={handleAdd} />
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