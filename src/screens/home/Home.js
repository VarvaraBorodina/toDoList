import React, { useState } from 'react';
import { View, SectionList } from 'react-native';

import homeStyles from './homeStyles';

import HomeButton from '../../components/home/homeButton/homeButton';
import Task from '../../components/home/task/task';
import SectionTitle from '../../components/home/sectionTitle/sectionTitle';
import PopUp from '../../components/popUp/PopUp';


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
      <PopUp isVisible={isVisible} handleCancel={handleCancel} handleAdd={handleAdd}/>      
      <SectionList
      ListHeaderComponent={<HomeButton onPress={handlePressAddTaskButton} />}
      renderSectionHeader={({section: {title}}) => <SectionTitle title={title}/>}
      sections={[{title:'TO DO', data: todos.filter(item => !item.isDone)},{title:'COMPLETED', data: todos.filter(item => item.isDone)}]}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Task handleDone={handleDone} item={item}/>}
      />            
    </View>
  );
}

export default Home;