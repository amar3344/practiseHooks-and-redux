import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'



class ClassBasedComponent extends Component {
    render() {
        return (
            <View>
                <Text>count = {}</Text>
                <TouchableOpacity>
                    <Text>Increase</Text>
                </TouchableOpacity>
            </View>
        )
    }
}



export default ClassBasedComponent
