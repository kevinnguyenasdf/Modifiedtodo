import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppContext from './AppContext';
import Home from './Home';
import Add from './Add';
import TaskView from './TaskView';
import Edit from './Edit'
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Button,
  Text
} from 'react-native';
const Stack = createNativeStackNavigator();

const App = () => { 
  const [tasks, setTasks] = useState([]);
  const [completed,setCompleted] = useState([]);
  const today = new Date();
  const [formattedDateToday,setFormattedDateToday] = useState(String(today.getMonth()+1) + "-" + String(today.getDate()) + "-" + String(today.getFullYear()));

  const getMessage = () => {
    return tasks.length > 0 ? "Add another task" : "Add your first task";
  }

  const addTask = (task,dynamicDate) => {
    const formattedDate = String(dynamicDate.getMonth()+1) + "-" + String(dynamicDate.getDate()) + "-" + String(dynamicDate.getFullYear());
    setTasks([...tasks, { id: Date.now().toString(), value: task + "\nStart: " + formattedDateToday + " \nEnd: " + formattedDate }]);
    console.log("adding", task);
  };

  const addCompletedTask = (task) => {
    setCompleted([...completed, { id: task.id, value: task.value}]);
    console.log("completing", task.value);
    removeTask(task.id)
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
    console.log("removing ",taskId);
  };

  const contextValue = {
    tasks,
    addTask,
    removeTask,
    today,
    completed,
    setCompleted,
    formattedDateToday,
    getMessage,
    setTasks,
    addCompletedTask

  };

  return (
    <AppContext.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen 
          name="Home" 
          component={Home} 
          />

          <Stack.Screen 
          name="Add" 
          component={Add}
          />

          <Stack.Screen
          name = "TaskView"
          component = {TaskView}
          options = {{title:'Task'}}
          />

          <Stack.Screen
          name = "Edit"
          component = {Edit}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
 }

  export default App;
