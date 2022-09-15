import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import todosReducer from './todosReducer'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'toDoItems',
  storage,
  blacklist: ['showArchivedItems'],
}

const rootReducer = todosReducer

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
]

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store)
const toDoStore = { store, persistor }
export default toDoStore
