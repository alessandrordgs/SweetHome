import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonBlue } from '../components/ButtonBlue';
import fonts from '../styles/fonts';

export function Login(){ 
  const navigator = useNavigation();
    function handleNavagition(){
        navigator.navigate('Neighborhood')
    }
  return(
   <SafeAreaView style={styles.flex}>
        <Text style={styles.HeaderText}>So mais um passo...</Text>
        <View>
            <ButtonBlue onPress={handleNavagition} title="Sou novo por aqui"/>
            <ButtonBlue onPress={handleNavagition} title="Login"/>
        </View>
        <View style={styles.buttonSecondary}>
           <ButtonBlue onPress={handleNavagition} title="Continuar sem login"/>
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