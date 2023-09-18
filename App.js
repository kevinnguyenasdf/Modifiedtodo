import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppContext from './AppContext';
import Home from './Home';
import Add from './Add';
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
  const today = new Date();
  const formattedDateToday = String(today.getMonth()+1) + "-" + String(today.getDate()) + "-" + String(today.getFullYear());
  const addTask = (task,dynamicDate) => {
    const formattedDate = String(dynamicDate.getMonth()+1) + "-" + String(dynamicDate.getDate()) + "-" + String(dynamicDate.getFullYear());
    setTasks([...tasks, { id: Date.now().toString(), value: task + "\nStart: " + formattedDateToday + " \nEnd: " + formattedDate }]);
    console.log("adding", task)
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

        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
 }

  export default App;
