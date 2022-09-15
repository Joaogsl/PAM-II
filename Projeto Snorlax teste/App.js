import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, Text, View, ScrollView, TextInput } from 'react-native';


const Pokemon = () => {
  return(
    <ScrollView>
      <View>
        <Text
        style={{
          fontSize:45,
          alignSelf: "Center",
          color :"green",
        }}> 
          Snorlax Berrie
        </Text>
        <Image
          source={{
            uri:"https://pbs.twimg.com/media/E4sYypaVgAQ1Cv9.png",
          }}
          style={{ width:200, height: 210, alignSelf: "center"}}
        />
      </View>
      <TextInput
        style={{
          height:50,
          width: 250,
          marginTop:3,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
          alignSelf: "center"
        }}>

      </TextInput>
    </ScrollView>
  )
}
export default Pokemon;
