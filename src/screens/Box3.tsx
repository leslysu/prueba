import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Box3 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxPurple}></View>
            <View style={styles.boxOrange}></View>
            <View style={styles.boxCeleste}></View>
        </View>
      )
    }
    const styles=StyleSheet.create({
        container:{
            //  width:300,
            // height:300,
            // justifyContent:'center',
            // alignItems:'center'
            flex:1,
            backgroundColor:'#1F2544',
        },
        boxPurple:{
            flex:0,
            width:100,
            height:100,
            backgroundColor:'purple',
            borderWidth:5,
            borderColor:'white',
            position:'absolute',
            top:200,
            //bottom:-0,
            //left:0
            //position:'relative'
            //top:700,
            right:0
        },
        boxOrange:{
            width:100,
            height:100,
            backgroundColor:'#FC6736',
            borderWidth:5,
            borderColor:'white',
            position:'absolute',
            flex:3,
            //right:0,
            bottom:-0,
            top:300,
            //alignSelf:'center'
        },
        boxCeleste:{
            flex:0,
            width:100,
            height:100,
            backgroundColor:'#40A2E3',
            borderWidth:5,
            borderColor:'white',
            alignSelf:'center',
            // right:-0,
            //bottom:0,
            //position:'absolute',
             top:400,
            //right:0,
            // left:0
        },
    
    })