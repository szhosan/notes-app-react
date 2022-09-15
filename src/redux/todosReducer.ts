
import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import flatpickr from 'flatpickr';
import { nanoid } from 'nanoid';
import capitalize from '../helpers/capitalizeCategories';
import ejectDatesFromStr from '../helpers/ejectDatesFromStr';
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
    'category': 'task',
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
            const created = flatpickr.formatDate(new Date(), 'F d, Y');
            const dates = ejectDatesFromStr(toDoItem.content);
            const categoryText = capitalize(toDoItem.category);
            return {payload: {...toDoItem, id, created, dates, categoryText}}
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
            item.categoryText = capitalize(payload.category);
            item.content = payload.content;
            item.dates = ejectDatesFromStr(payload.content);
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
