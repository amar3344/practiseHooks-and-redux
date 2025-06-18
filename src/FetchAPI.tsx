import { useState, useEffect, useReducer } from "react"
import {fetchApiCall} from "./redux/ApiSlicer"
import { ActivityIndicator, Alert, FlatList, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "@reduxjs/toolkit"
import { AppDispatch,RootState } from "./redux/Store"

const FetchAPI = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch<AppDispatch>()
    const apiData = useSelector((state:RootState)=>state.fakeStore.apiResponseData)
    // useEffect(() => {
    //     dispatch(fetchApiCall({page:currentPage}))
    // }, [currentPage])
    const renderEachItem = ({ item, index }: { item: any, index: any }) => {
        return (
            <View style={{ backgroundColor: "grey", marginVertical: 3 }} key={item.id}>
                <Text>{item.brand}</Text>
                <Text>{item.price}</Text>
                <Text style={{ color: "blue" }}>{item.title}</Text>
            </View>
        )
    }
    const getExtraData = () => {
        setCurrentPage(pre => pre + 1)
    }
    const renderListFooterComponent = () => {
        return (
            <ActivityIndicator size={"large"} color={"red"} />
        )
    }
    return (
        <View style={{ backgroundColor: "#FFFFFF" }}>
            <Text>FetchAPI</Text>
            <FlatList
                data={apiData}
                renderItem={renderEachItem}
                keyExtractor={(item) => item.title}
                onEndReached={getExtraData}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderListFooterComponent}
            />
        </View>
    )
}

export default FetchAPI