import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlicer"
import FakeStore from "./ApiSlicer"
import jsonFetchData from "./JsonDataSlicer"

export const Store = configureStore({
    reducer:{
        countStore : CounterSlice,
        fakeStore : FakeStore,
        jsonFetchData : jsonFetchData,
    }
})


export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;