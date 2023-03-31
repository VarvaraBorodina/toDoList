import { SectionList } from 'react-native';

import HomeButton from '../homeButton/homeButton'
import Task from '../task/task';
import SectionTitle from '../sectionTitle/sectionTitle';

const TaskContainer = ({todos, handleDone, handlePressAddTaskButton}) => {
    return(
    <SectionList
      ListHeaderComponent={<HomeButton onPress={handlePressAddTaskButton} />}
      renderSectionHeader={({section: {title}}) => <SectionTitle title={title}/>}
      sections={[{title:'TO DO', data: todos.filter(item => !item.isDone)},{title:'COMPLETED', data: todos.filter(item => item.isDone)}]}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Task handleDone={handleDone} item={item}/>}
      />   
    )
}

export default TaskContainer;