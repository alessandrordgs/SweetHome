import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import fonts from '../styles/fonts';

interface ButtonPros extends TouchableOpacityProps{
    title:string;
}
export function ButtonBlue({title, ...rest}:ButtonPros){
    return(
          <TouchableOpacity   style={styles.button} {...rest} >
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