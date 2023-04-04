import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeTodos = async (todos) => {
    await AsyncStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodos = async () => {
    let todos = await AsyncStorage.getItem("todos");
    if(!todos){
        await AsyncStorage.setItem("todos", JSON.stringify([]));
        todos = [];
    }
    return todos;
};