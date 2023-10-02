import React,{useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

const DateSelector = ({setDynamicDate}) =>{
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const incrementDate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate()+1);
    setCurrentDate(newDate);
    setDynamicDate(newDate);
  };
  const decrementDate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate()-1);
    setCurrentDate(newDate);
    setDynamicDate(newDate);
  };

  const formattedDate = String(currentDate.getMonth()+1) + "-" + String(currentDate.getDate()) + "-" + String(currentDate.getFullYear());
  return(
  <View>

    <Text style = {styles.header}>Completion Date</Text>
      <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            defaultValue= {formattedDate}
            onChangeText = {setCurrentDate}
          />
    </View>

    {currentDate.getDate() > today.getDate() ?
    <View style = {styles.dateButton}>

    <TouchableOpacity style = {styles.button}
      onPress={() => decrementDate()}
    >
      <Text>-</Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.button}
      onPress={() => incrementDate()}
    >
      <Text>+</Text>
    </TouchableOpacity>
    </View>
    : 
    <View style = {styles.centerButton}>
    <TouchableOpacity style = {styles.button}
      onPress={() => incrementDate()}
    >
      <Text>+</Text>
    </TouchableOpacity>
    </View>
    }

  </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
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
  title:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 10,
    marginBottom: 20,
  },
  header:{
    textAlign: 'left',
    fontSize: 15,
    paddingBottom:10,
  },
  dateButton:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  button:{
    backgroundColor:'#4267B2',
    borderRadius:100,
    width:30,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
  },
  centerButton:{
    alignItems:'center',
  },
});

export default DateSelector;