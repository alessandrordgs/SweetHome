import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeIcon from "../assets/home.png"
import {Feather} from '@expo/vector-icons'
export function Home(){
    return(
        <SafeAreaView style={styles.flex}>
            <View style={styles.container}>
                <Text style={styles.header}>
                    Sweet Home
                </Text>
                <Image source={HomeIcon} resizeMode='contain' />
                <Text>
                    Encontre o seu lar {'\n'}
                    Casa ou aparmento.  {'\n'}
                    Venha buscar um lugar
                </Text>

                <TouchableOpacity style={styles.button}>
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
       fontSize:28
    },
    button:{
        backgroundColor:"#00ACEE",
        width:180,
        height:50,
        borderRadius:14,
        alignItems:"center",
        justifyContent:"center"
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