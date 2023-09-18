import React from 'react';
import {View,Button,StyleSheet} from 'react-native';

const FirstPage = ({nav}) => {
    return(
        <View style ={styles.style}>
            <Button
                title = "Go to second Page"
                onPress ={() => nav.navigate('Second', {someParam:"someValue"})}
            />

            <Button title = "Add Task" onPress={nav.params.addTask("foo")}/>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        style:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }
    }
);
export default FirstPage;