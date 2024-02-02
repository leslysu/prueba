import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Box2 = () => {
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
            //justifyContent:'space-around',
            //alignItems:'center',
            flex:1,
            backgroundColor:'#1F2544',
        },
        boxPurple:{
            //flex:1,
            width:100,
            height:100,
            backgroundColor:'purple',
            borderWidth:5,
            borderColor:'white',
            position:'absolute',
            //justifyContent:'flex-end',
            //alignSelf:'center',
            top:250,
            //bottom:-0,
            left:0,
            //position:'relative'
            //top:700,
            //right:0
        },
        boxOrange:{
            width:100,
            height:100,
            backgroundColor:'#FC6736',
            borderWidth:5,
            borderColor:'white',
            //position:'absolute',
            //bottom:550,
            //left:200,
            //right:0,
            top:350,
            //flexDirection:'row',
           // alignItems:'flex-start',
            // justifyContent:'center'
            //flex:2,
            //bottom:-0,
            //alignSelf:'center'
        },
        boxCeleste:{
           // flex:0,
            width:'100%',
            height:100,
            backgroundColor:'#40A2E3',
            borderWidth:5,
            borderColor:'white',
            //alignSelf:'center',
            //right:-0,
            //bottom:-0,
            position:'absolute',
            flexDirection:'row',
            top:450,
            //right:56,
             //left:0
             //flexDirection:'column',
             //display:'flex'
        },
    
    })
