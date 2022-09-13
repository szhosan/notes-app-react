
import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { IToDo } from '../interfaces/interfaces';

const initialState: IToDo[] = [{
    'id': 'l28wmwom',
    'name': 'Task #1',
    'category': 'task',
    'categoryText': 'Task',
    'content': '12/10/2022 Content of task #1',
    'created': 'September 10, 2022',
    'isArchived': false,
    'dates': ['12/10/2020']
  },
  {
    'id': 'l29wmwom',
    'name': 'Task #2',
    'category': 'task2',
    'categoryText': 'Task',
    'content': '15/10/2022 Content of task #1',
    'created': 'September 10, 2022',
    'isArchived': false,
    'dates': ['12/10/2020']
  },];

const toDos = createSlice({name:'toDoList', initialState, reducers:{
    addItem: {
        reducer: (state: IToDo[], {payload}: PayloadAction<IToDo>)=>[...state, payload],
        prepare: toDoItem=>{
            const id = nanoid();
            return {payload: {id, ...toDoItem}}
        },
    },
    removeItem:(state: IToDo[], {payload}: PayloadAction<string>)=>{
           return state.filter(({id})=>id!==payload);
        },
    editItem:(state: IToDo[], {payload}:PayloadAction<IToDo>)=>{
        const item = state.find(({id})=>id===payload.id);
        if(item)
        {
            item.name = payload.name;
            item.category = payload.category;
            item.categoryText = payload.categoryText;
            item.content = payload.content;
            item.dates = payload.dates?payload.dates:[''];
        }
    },
    toggleArchived: (state: IToDo[], {payload}:PayloadAction<string>)=>{
        const item = state.find(({id})=>id===payload);
        if(item){
            item.isArchived = !item.isArchived;
        }
        
    }
}});


export const {addItem, removeItem, editItem, toggleArchived} = toDos.actions;
export default combineReducers({toDoList: toDos.reducer});
