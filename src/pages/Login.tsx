import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ButtonBlue } from '../components/ButtonBlue';
import fonts from '../styles/fonts';

export function Login(){ 
  return(
   <SafeAreaView style={styles.flex}>
        <Text style={styles.HeaderText}>So mais um passo...</Text>
        <View>
            <ButtonBlue title="Sou novo por aqui"/>
            <ButtonBlue title="Login"/>
        </View>
        <View style={styles.buttonSecondary}>
           <ButtonBlue title="Continuar sem login"/>
        </View>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    flex:{
      flex:1,
      alignItems: 'center',
      justifyContent:"center",
      paddingHorizontal: 20
    },
    HeaderText:{
        fontFamily:fonts.heading,
        color:"#F66C87",
        fontSize:18
    },
    buttonSecondary:{
        marginTop:30
    }
  })