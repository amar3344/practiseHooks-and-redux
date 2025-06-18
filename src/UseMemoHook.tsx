import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jsonDataApiCall, IJ, jsonSearchedNameApiCall } from "./redux/JsonDataSlicer"
import { AppDispatch, RootState } from './redux/Store'

const UseMemoHook = () => {
    const [searchInput, setSearchInput] = useState("")
    const dispatch = useDispatch<AppDispatch>()
    const { loading, data } = useSelector((state: RootState) => state.jsonFetchData)
    useEffect(() => {
        dispatch(jsonDataApiCall())
    }, [])

    const highlistText = (username: string) => {
        if (!searchInput) return <Text>{username}</Text>

        const parts = username.toLocaleLowerCase().split(new RegExp(`(${searchInput.toLocaleLowerCase()})`, 'gi'))
        return (
            parts.map((part, index) =>
                part.toLowerCase() === searchInput.toLowerCase() ? (
                    <Text key={index} style={{ color: 'red' }}>{part}</Text>
                ) : (
                    <Text key={index}>{part}</Text>
                )
            )
        )

    }
    const renderEachItem = ({ item, index }: { item: IJ, index: number }) => {
        return (
            <View key={item.id} style={styles.eachItemContainer}>
                <Text style={styles.eachTitle}>Username : {item.username}</Text>
                <Text style={styles.eachTitle}>Name : {highlistText(item.firstName + item.lastName)}</Text>
                <Text style={styles.eachTitle}>Age : {item.age}</Text>
            </View>
        )
    }
    const getSearchedItems = (input: string) => {
        setSearchInput(input)
        dispatch(jsonSearchedNameApiCall({ searchName: input }))
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyles}
                placeholder='search...'
                placeholderTextColor={"#00000050"}
                onChangeText={getSearchedItems}
                value={searchInput}
            />
            <FlatList
                data={data}
                renderItem={renderEachItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default UseMemoHook

const styles = StyleSheet.create({
    eachItemContainer: {
        margin: 3,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#000000",
        padding: 2,
    },
    eachTitle: {
        color: "#000000",
        fontFamily: "Roboto",
        fontSize: 15,
    },
    container: {
        flex: 1,
        padding: 10
    },
    inputStyles: {
        height: 50,
        color: "blue",
        paddingVertical: 5,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 18
    }
})