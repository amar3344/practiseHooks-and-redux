import { createSlice } from "@reduxjs/toolkit"
const state = {
    value:0
}
const CounterSlice = createSlice({
    initialState:state,
    name:"count",
    reducers:{
        increaseFunction:(state)=>{
            state.value = state.value + 1
        },
        decreaseFunction : (state) =>{
            state.value = state.value - 1
        }
    }
}
)

export const {increaseFunction,decreaseFunction} = CounterSlice.actions
export default CounterSlice.reducer