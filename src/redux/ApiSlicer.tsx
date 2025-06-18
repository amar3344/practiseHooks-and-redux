import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

interface IS{
    apiResponseData:[],
    loading:boolean,
}

const initialState:IS = {
    apiResponseData:[],
    loading:false
}

export const fetchApiCall = createAsyncThunk(
    "fetchApiCall",
    async({page}:{page:number},{getState,fulfillWithValue,rejectWithValue})=>{
        try{
            const apiresponse = await fetch(`https://fakestoreapi.in/api/products?page=${page}&limit=5`)
            const data = await apiresponse.json()
            return fulfillWithValue(data.products)
        }catch{
            console.log("ERRRO")
            return  rejectWithValue("Some thing error")
        }
    }
)

const fetchApiCallSlicer = createSlice({
    initialState:initialState,
    name:"fetchApiCallSlicer",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchApiCall.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchApiCall.fulfilled,(state,action)=>{
            state.loading = false
        state.apiResponseData = action.payload.length > 0 ? [...state.apiResponseData,...action.payload] : action.payload
        })
        builder.addCase(fetchApiCall.rejected,(state,action)=>{
            state.loading = false
        })
    }
})

export default fetchApiCallSlicer.reducer
