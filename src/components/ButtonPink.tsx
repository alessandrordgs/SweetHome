import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import fonts from '../styles/fonts';

interface ButtonPinkProps{
neighborhood:string;
}

export function ButtonPink({neighborhood}:ButtonPinkProps){
    return(
        <TouchableOpacity style={styles.buttonPink}>
            <Text style={styles.buttonPinkText}>{neighborhood}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonPink:{
        backgroundColor:'#F66C87',
        width:300,
        height:50,
        borderRadius:14,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    buttonPinkText:{
      color:'#fff',
      fontSize:20,
      fontFamily:fonts.buttontext

    }
})