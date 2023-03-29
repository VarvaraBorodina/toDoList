import React, { useState } from 'react';
import { View, SectionList } from 'react-native';

import homeStyles from './homeStyles';
import HomeButton from '../../components/home/homeButton/homeButton';
import Task from '../../components/home/task/task';
import SectionTitle from '../../components/home/sectionTitle/sectionTitle';

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
    isDone: true,
    priority: 1,
  },
  {
    id: 3,
    task: "Asdfgh jklzx",
    time: new Date('2023-03-07T03:01:23'),
    isDone: false,
    priority: 2,
  },
  { id: 4,
    task: "1234567890",
    time: new Date('2023-02-17T03:12:35'),
    isDone: false,
    priority: 0,
  },
  {
    id: 5,
    task: "Qwerty uiop",
    time: new Date('2023-01-23T03:22:38'),
    isDone: false,
    priority: 1,
  },
  {
    id: 6,
    task: "Asdfgh jklzx",
    time: new Date('2023-03-07T03:01:23'),
    isDone: false,
    priority: 2,
  },
  { id: 7,
    task: "1234567890",
    time: new Date('2023-02-17T03:12:35'),
    isDone: false,
    priority: 0,
  },
  {
    id: 8,
    task: "Qwerty uiop",
    time: new Date('2023-01-23T03:22:38'),
    isDone: true,
    priority: 1,
  },
  {
    id: 9,
    task: "Asdfgh jklzx",
    time: new Date('2023-03-07T03:01:23'),
    isDone: false,
    priority: 2,
  },
  { id: 10,
    task: "1234567890",
    time: new Date('2023-02-17T03:12:35'),
    isDone: false,
    priority: 0,
  },
  {
    id: 11,
    task: "Qwerty uiop",
    time: new Date('2023-01-23T03:22:38'),
    isDone: false,
    priority: 1,
  },
  {
    id: 12,
    task: "Tghjk gytj",
    time: new Date('2023-03-07T03:01:23'),
    isDone: false,
    priority: 2,
  },
  {
    id: 13,
    task: "677 hjgkjuh t65",
    time: new Date('2023-03-07T03:01:23'),
    isDone: false,
    priority: 2,
  },
  {
    id: 14,
    task: "Finish",
    time: new Date('2023-03-07T03:01:23'),
    isDone: false,
    priority: 2,
  },
]

const Home = () => {

  const styles = homeStyles;

  return (
    
    <View style={styles.container}>      
      <SectionList
      sections={[{title:'TO DO', data: todos.filter(item => !item.isDone)},{title:'COMPLETED', data: todos.filter(item => item.isDone)}]}
      keyExtractor={(item) => item.id}
      renderItem={Task}
      renderSectionHeader={({section: {title}}) => <SectionTitle title={title}/>}
      ListHeaderComponent={HomeButton}/>      
    </View>
  );
}

export default Home;
