import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function UseCounterHook(state:number = 0) {
    const [count,setCount] = useState(state)
    const increase = () =>{
        setCount(p => p+1)
    }
  return {count,increase}
}