import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState ,} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseFunction ,decreaseFunction} from './redux/CounterSlicer'

export default function CounterApp() {

    const count = useSelector((state:any)=>state.countStore.value)
    const dispatch = useDispatch()
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30
        }}>
            <Text>COUNT =  {count}</Text>
            <TouchableOpacity onPress={()=>dispatch(increaseFunction())}>
                <Text>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatch(decreaseFunction())}
            >
                <Text>Decrease</Text>
            </TouchableOpacity>
        </View>
    )
}