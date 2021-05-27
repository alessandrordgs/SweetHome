import React from 'react';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';
import fonts from '../styles/fonts';

interface ButtonPros{
    title:string;
}
export function ButtonBlue({title}:ButtonPros){
    return(
          <TouchableOpacity style={styles.button} >
           <Text style={styles.ButtonText}>{title}</Text>
          </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#00ACEE",
        width:270,
        height:50,
        borderRadius:14,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
    },
    ButtonText:{
        color:'#fff',
        fontFamily:fonts.buttontext,
        fontSize:20
    }
})