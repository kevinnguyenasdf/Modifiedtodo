import React,{useState} from 'react';
import AppContext from './AppContext';

import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Text,
  Pressable
} from 'react-native';

const Home = ({navigation}) => {
  const context = React.useContext(AppContext);
  const [showValue,setShowValue] = useState(false);
  return (
    <View style={styles.screen}>
      {context.tasks.length>0&&<Text>Tasks</Text>}
      <FlatList
        legacyImplementation ={true}
        data={context.tasks}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('TaskView',{item}) }>
            <View style={styles.listItem} pointerEvents='none'>
            <Text style={styles.taskItem} >{item.value}</Text>
          </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.inputContainer}>
        <Button color = "#4267B2" title={context.getMessage()} onPress={() => {navigation.navigate('Add')}} />
      </View>

      {context.completed.length>0 && 
      <Pressable
      onPress = {()=>{setShowValue(!showValue)}}
      >
      <View style={{alignItems:'center',}}>
      {showValue === false && <Text style = {{color:"#4267B2"}}>Show Completed</Text>}
      </View>
      </Pressable>
      
      }
      {showValue&&<FlatList
        legacyImplementation ={true}
        data={context.completed}
        renderItem={({ item }) => (
            <View style={styles.listItem} pointerEvents='none'>
            <Text style={styles.taskItem} >{item.value}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />}
      <Pressable
      onPress = {()=>{setShowValue(!showValue)}}
      >
      <View style={{alignItems:'center',}}>{showValue ===true && <Text style = {{color:"red",alignItems:'center',justifyContent:'center'}} >Hide</Text>}</View>
      </Pressable>
    </View>
    
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:30,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'grey',
    flex:1,
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 10,
    padding: 10
  },
  taskItem: { 
    color: 'black'

  },
});

export default Home;
