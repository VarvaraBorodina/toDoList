import React, { useState } from 'react';
import { View } from 'react-native';

import homeStyles from './homeStyles';

import PopUp from '../../components/popUp/PopUp';
import TaskContainer from '../../components/home/taskContainer/taskContainer';
import AddTaskPopUp from '../../components/home/addTaskPopUp/AddTaskPopUp';


const Home = () => {

  const styles = homeStyles;

  const [isVisible, setIsVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  const handlePressAddTaskButton = () => {
    setIsVisible((isVisible) => true)
  }

  const handleCancel = () => {
    setIsVisible((isVisible) => false);
  }

  const handleAdd = (input) => {
    setTodos((todos) => {
      const newTodos = JSON.parse(JSON.stringify(todos));

      const id = newTodos.length?(todos[todos.length - 1].id + 1):0;
      const newTask = {
        id: id,
        task: input,
        time: (new Date()).toString(),
        isDone: false
      };

      newTodos.push(newTask);
      return newTodos;
    })

    

    setIsVisible((isVisible) => false);
  }

  const handleDone = (id) => {

    setTodos((todos) => {
      const newTodos = JSON.parse(JSON.stringify(todos));

      index = newTodos.findIndex(task => task.id === id);

      newTodos[index].isDone = true;

      return newTodos;
    })
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