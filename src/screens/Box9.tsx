import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Box9 = () => {
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
            width:100,
            height:100,
            backgroundColor:'purple',
            borderWidth:5,
            borderColor:'white',
            position:'absolute',
            //bottom:-0,
            //left:56,
            //position:'relative'
            top:250,
            alignSelf:'center',
            //right:-50
        },
        boxOrange:{
            width:100,
            height:100,
            backgroundColor:'#FC6736',
            borderWidth:5,
            borderColor:'white',
            position:'relative',
            alignSelf:'center',
            //flex:3,
            //right:-22,
            //bottom:-0
            top:350,
            right:-96,
            //alignContent:'center'
        },
        boxCeleste:{
            width:100,
            height:100,
            backgroundColor:'#40A2E3',
            borderWidth:5,
            borderColor:'white',
            top:450,
            // right:-0,
            //bottom:-0,
            position:'absolute',
            alignSelf:'center',
            //top:,
            //right:56,
            // left:0
        },
    
    })
