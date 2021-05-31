import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ButtonBlue } from '../components/ButtonBlue';
import { ButtonPink } from '../components/ButtonPink';
import fonts from '../styles/fonts';
import neighborhood from '../../neighborhood.json'

export function Neighborhood(){
    return(
       <SafeAreaView style={styles.flex}>
            <View style={styles.container}>
                <Text style={styles.containerText}>Eu quero alugar no</Text>
               <FlatList 
                 data={neighborhood}
                 renderItem ={({item}) => {
                    return(
                        <ButtonPink neighborhood={item.neighborhood}  />
                    )
                 }}
               />
                <View style={styles.containerInput}>
                    <Text>Por</Text>
                    <TextInput style={styles.input}/>
                    <Text>até</Text>
                    <TextInput style={styles.input}/>
                </View>
                <ButtonBlue title="Buscar"/>
            </View>
       </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    flex:{
      flex:1,
      alignItems: 'center',
      justifyContent:"center",
    },
     container:{
         alignItems:'center',
         marginTop:40,
         marginBottom:40,
         justifyContent:"center"
    },
    containerText:{
        fontFamily:fonts.heading,
        fontSize:20,
        color:'#00ACEE'
    },
    input:{
        borderBottomColor:"#F66C87",
        borderBottomWidth: 1,
        width:60
      },
      containerInput:{
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:20
      }
  })