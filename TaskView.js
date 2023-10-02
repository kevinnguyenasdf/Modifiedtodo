import React, { useState } from 'react';
import AppContext from './AppContext';


import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';

const TaskView = ({route,navigation}) => {
    const context = React.useContext(AppContext);
    const {item}= route.params;

    const displayTask = (item)=>{
        return <Text>{item.value}</Text>;
    }
    return(
        <View style = {styles.screen}>
            {displayTask(item)}
            <Button color = "#4267B2" title = "Mark Completed" onPress={()=>{context.addCompletedTask(item);navigation.navigate('Home')}}/>
            <Button color = "#4267B2" title = "Edit" onPress={()=>{navigation.navigate('Edit',{item})}}/>
            <Button color = "red" title="Remove" onPress={() => {context.removeTask(item.id);navigation.goBack()}} />
        </View>
    );
};

const styles = StyleSheet.create(
{
    screen: {
        padding: 50
        },
}

);
export default TaskView;