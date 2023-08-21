import React from 'react'
import { View } from 'react-native'
import { StyleSheet, Text, } from 'react-native'

const Card = () => {
  return (
    <>
    <View style={styles.card}>
      <Text style={styles.título}>Hello World!</Text>
      <Text> Eu sou a Rafa Leite</Text>
      <Text style ={styles.peq}>Sim, Leite!</Text>
      <Text>Atriz, influencer e modelo</Text>
      <StatusBar style="auto" />
    </View>
    </>
  )
}

export default Card
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {  
      margin: 20,  
      backgroundColor: 'pink',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'pink',},
    
    título: {
  
      padding: 20,
      color: 'purple',
      fontsize: 30,
      marginBottom: 30,
      borderBottomColor: 'pink',
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      TextAlign:'center',
      backgroundColor:'violet'},
  
    peq: {
      fontSize: 10,
    }
  });