import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Button, Dimensions, Modal, Text } from "react-native";


export default function Header(){


    return(
        <View style = {styles.header}>
            <Text style={styles.title}>TO MY LOVELY MOTHER</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:60,
        paddingTop:38,
       
        

      
    },
    title:{
        fontWeight:'bold',
         
        fontSize:20,
    }
})