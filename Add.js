import React,{useState} from 'react';
import AppContext from './AppContext';
import DateSelector from './DateSelector';

import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text
} from 'react-native';

const Add = ({navigation}) => {
  const context = React.useContext(AppContext);
  const [task,setTask] = useState('');
  const [dynamicDate, setDynamicDate] = useState(new Date());
  
  return (
    <View style={styles.screen}>
      <Text style = {styles.header}>Task</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={context.getMessage()}
          style={styles.input}
          onChangeText={setTask}
          value={task}
          multiline={true}
          editable={true}
        />
      </View>
      <DateSelector setDynamicDate={setDynamicDate}/>
      {task.length > 0 && <Button color= "#4267B2" title="Add" onPress={() => { context.addTask(task,dynamicDate); navigation.goBack() } } />}
      <Button color = "red" title="Cancel" onPress={() => navigation.goBack() } />
    </View>
  );

}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  label: { 
    color: 'black',
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
  header:{
    textAlign: 'left',
    fontSize: 15,
    paddingBottom:10,
  },
});


export default Add;
