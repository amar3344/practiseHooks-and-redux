import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export interface IJ {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
}

interface IS{
    data:IJ[],
    loading:boolean
}

const initialState:IS = {
    data:[],
    loading:false
}

export const jsonDataApiCall = createAsyncThunk(
    "jsonDataApiCall",
    async(_,{getState,fulfillWithValue,rejectWithValue}) =>{
        try{
            const jsonData = await fetch('https://dummyjson.com/users')
            const responseData = await jsonData.json()
            return fulfillWithValue(responseData)
        }catch{
            return rejectWithValue("Something went wrong")
        }
    }
)

export const jsonSearchedNameApiCall = createAsyncThunk(
    "jsonSearchedNameApiCall",
    async ({searchName}:{searchName:string},{getState,fulfillWithValue,rejectWithValue}) =>{
        try{
            const searchedJsonData = await fetch(`https://dummyjson.com/users/search?q=${searchName}`)
            const response = await searchedJsonData.json()
            return fulfillWithValue(response)
        }catch{
            return rejectWithValue("Some thing went wrong")
        }
    }
)

const jsonDataSlicer = createSlice({
    initialState:initialState,
    name:"jsonDataSlicer",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(jsonDataApiCall.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(jsonDataApiCall.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload.users
        })
        builder.addCase(jsonSearchedNameApiCall.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(jsonSearchedNameApiCall.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload.users
        })
    }

})

export default jsonDataSlicer.reducer