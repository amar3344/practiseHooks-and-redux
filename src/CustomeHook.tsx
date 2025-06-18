import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import useCounterHook from './UseCounterHook'

export default function CustomeHook() {
   const {count,increase} = useCounterHook(0)

  return (
    <View>
      <Text>count : <Text style={{color:"red",fontSize:15}}>{count}</Text></Text>
      <TouchableOpacity onPress={increase}><Text>Increase</Text></TouchableOpacity>
    </View>
  )
}