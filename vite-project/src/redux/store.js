import { configureStore } from '@reduxjs/toolkit'
import studentsReducer from './studentsSlice.js'
export const store = configureStore({
    reducer: studentsReducer
})