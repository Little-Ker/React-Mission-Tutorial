import {
  configureStore 
} from '@reduxjs/toolkit'
import todoReducer from './redux/todoSlice'
import todoAxios from './redux/todoAxiosSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    todoAxios: todoAxios,
  },
})