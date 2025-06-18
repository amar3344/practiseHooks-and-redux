import { View, Text, TouchableOpacity } from 'react-native'
import React, { useReducer } from 'react'

interface IS{
  id: number,
    title: string,
    complete: boolean,
}[]

const initialTodos : IS[]= [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];




export default function ReducerHook() {

  const reducer = (state:IS[],action:{type:string,id:number}) =>{
    switch(action.type){
      case "complete" :
        console.log(state,"<<<<<<")
        const updateTodo:IS[] = state.map((eachItem:IS) => eachItem.id === action.id ? {...eachItem,complete:!eachItem.complete} : eachItem)
        return updateTodo
        default :
        return state
    }
  }
    
    const [todos,dispatch] = useReducer(reducer,initialTodos)

    const handleTodo = (todo:{id:number}) =>{
        dispatch({type:"complete",id:todo.id})
    }
  return (
    <View>
      {todos.map((todo:any) => (
        <TouchableOpacity onPress={()=>handleTodo(todo)}> <Text>{todo.title}</Text></TouchableOpacity>
      ))}
    </View>
  )
}