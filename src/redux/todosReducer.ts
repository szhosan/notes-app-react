
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { IToDo } from "../interfaces/interfaces";



const toDos = createSlice({name:"items", initialState:[], reducers:{
    add: {
        reducer: (state: IToDo[], {payload}: PayloadAction<IToDo>  )=>{state.push(payload)},
        prepare: toDoItem=>{
            const id = nanoid();
            return {payload: {id, ...toDoItem}}
        },
    },
    delete: {
        reducer:(state: IToDo[], {payload}: PayloadAction<string>)=>{
            return state.filter(item=>item.id!==payload);
        },
    },
}});


export const {add} = toDos.actions;
export default toDos.reducer;