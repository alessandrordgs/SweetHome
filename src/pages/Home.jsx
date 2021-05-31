import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeIcon from "../assets/home.png"
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';
import fonts from '../styles/fonts';
export function Home(){
    const navigator = useNavigation();
    function handleNavagition(){
        navigator.navigate('Login')
    }
    return(
        <SafeAreaView style={styles.flex}>
            <View style={styles.container}>
                <Text style={styles.header}>
                    Sweet Home
                </Text>
                <Image source={HomeIcon} resizeMode='contain' />
                <Text style={styles.text}>
                    Encontre o seu lar {'\n'}
                    Casa ou aparmento.  {'\n'}
                    Venha buscar um lugar
                </Text>

                <TouchableOpacity onPress={handleNavagition} style={styles.button}>
                  <Text style={styles.buttonText}>VAMOS LÁ <Feather name="chevron-right" style={styles.buttonIcon}/> </Text>  
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    flex:{
      flex:1
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    header:{
       color:'#F66C87',
       fontSize:30,
       fontFamily:fonts.heading
    },
    text:{
        fontFamily:fonts.text,
        fontSize:16,
        marginLeft:10
    },
    button:{
        backgroundColor:"#00ACEE",
        width:180,
        height:50,
        borderRadius:14,
        alignItems:"center",
        justifyContent:"center",
        fontFamily:fonts.buttontext
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        justifyContent:"center"
    },
    buttonIcon:{
        fontSize:22,
        justifyContent:"center"
    }
  
 
  })