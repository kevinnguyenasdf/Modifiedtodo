import React, { useState } from 'react';
import AppContext from './AppContext';
import DateSelector from './DateSelector';

import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';

const Edit = ({route,navigation}) => {
    const context = React.useContext(AppContext);
    const [task,setTask]=useState('');
    const {item} = route.params;
    const [dynamicDate, setDynamicDate] = useState(new Date());
    const editText = (task) =>{
        const formattedDate = String(dynamicDate.getMonth()+1) + "-" + String(dynamicDate.getDate()) + "-" + String(dynamicDate.getFullYear());
        item.value = task + "\nStart: " + context.formattedDateToday + " \nEnd: " + formattedDate;
        const updatedTask = [...context.tasks];
        console.log("updating", item.id);
        context.setTasks(updatedTask);
    };

    return(
         <View style={styles.screen}>
             <Text style = {styles.header}>Task</Text>
            <TextInput
            placeholder={"Edit your task"}
            style={styles.input}
            onChangeText={setTask}
            value={task}
            multiline={true}
            editable={true}
            />
            <DateSelector setDynamicDate = {setDynamicDate}/>
            {task.length>0&&<Button title = "Confirm" onPress ={() => {editText(task);navigation.navigate('Home')} }/>}
            <Button color = "red" title = "Cancel" onPress = {()=>{navigation.navigate('Home')}}/>
         </View>
    );
    

};

styles = StyleSheet.create({
    input: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
      },
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

});

export default Edit;