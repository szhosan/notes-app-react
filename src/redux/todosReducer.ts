import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import flatpickr from 'flatpickr';
import { nanoid } from 'nanoid';
import ejectDatesFromStr from '../helpers/ejectDatesFromStr';
import { ISettingsState, IToDo } from '../interfaces/interfaces';

const initialState: IToDo[] = [
  {
    id: 'l28wmwom',
    name: 'Task #1',
    category: 'task',
    content: '12/10/2022 Content of task #1',
    created: 'September 10, 2022',
    isArchived: false,
    dates: ['12/10/2022'],
  },
  {
    id: 'l29wmwom',
    name: 'Task #2',
    category: 'task',
    content: '15/10/2022 Content of task #1',
    created: 'September 10, 2022',
    isArchived: false,
    dates: ['15/10/2022'],
  },
  {
    id: 'l30wmwom',
    name: 'Thought #77',
    category: 'thought',
    content: '15/10/2022 Content of task #77',
    created: 'September 15, 2022',
    isArchived: false,
    dates: ['15/10/2022'],
  },
  {
    id: 'SFbfaCz902UALwjssQW9M',
    name: 'Next idea',
    category: 'idea',
    content: 'Too many ideas',
    isArchived: false,
    created: 'September 15, 2022',
    dates: [],
  },
  {
    id: 'SghfaCz902UALwjssQW9M',
    name: 'Ready for new ideas',
    category: 'idea',
    content: 'Content of ideas',
    isArchived: true,
    created: 'September 14, 2022',
    dates: [],
  },
  {
    id: 'ubR2KOIfE5kfNro9kNJXn',
    name: 'Complete all Radency Tasks',
    category: 'idea',
    content: 'Complete all tasks before 20/09/22',
    isArchived: false,
    created: 'September 15, 2022',
    dates: ['20/09/22'],
  },
  {
    id: 'ubR2KOIfE5fghfghNro9kNJXn',
    name: 'New thoughts',
    category: 'thought',
    content: 'Complete all tasks from 10/09/22 to 20/09/22',
    isArchived: false,
    created: 'September 16, 2022',
    dates: ['10/09/22', '20/09/22'],
  },
];

const toDos = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addItem: {
      reducer: (state: IToDo[], { payload }: PayloadAction<IToDo>) => [...state, payload],
      prepare: (toDoItem) => {
        const id = nanoid();
        const created = flatpickr.formatDate(new Date(), 'F d, Y');
        const dates = ejectDatesFromStr(toDoItem.content);
        return { payload: { ...toDoItem, id, created, dates } };
      },
    },
    removeItem: (state: IToDo[], { payload }: PayloadAction<string>) => {
      return state.filter(({ id }) => id !== payload);
    },
    removeAllItems: () => {
      return [];
    },
    editItem: (state: IToDo[], { payload }: PayloadAction<IToDo>) => {
      const item = state.find(({ id }) => id === payload.id);
      if (item) {
        item.name = payload.name;
        item.category = payload.category;
        item.content = payload.content;
        item.dates = ejectDatesFromStr(payload.content);
      }
    },
    toggleArchived: (state: IToDo[], { payload }: PayloadAction<string>) => {
      const item = state.find(({ id }) => id === payload);
      if (item) {
        item.isArchived = !item.isArchived;
      }
    },
  },
});

const settingState: ISettingsState = {
  showArchivedItems: false,
  showModal: false,
  toDoIdToEdit: null,
};

const showArchived = createSlice({
  name: 'settings',
  initialState: settingState,
  reducers: {
    toggleShowArchived: (state: ISettingsState) => {
      return { ...state, showArchivedItems: !state.showArchivedItems };
    },
    setShowModal: (state: ISettingsState, { payload }: PayloadAction<boolean>) => {
      return { ...state, showModal: payload };
    },
    setToDoIdToEdit: (state: ISettingsState, { payload }: PayloadAction<string | null>) => {
      return { ...state, toDoIdToEdit: payload };
    },
  },
});

export const { toggleShowArchived, setShowModal, setToDoIdToEdit } = showArchived.actions;
export const { addItem, removeItem, editItem, toggleArchived, removeAllItems } = toDos.actions;
export default combineReducers({
  toDoList: toDos.reducer,
  settings: showArchived.reducer,
});
