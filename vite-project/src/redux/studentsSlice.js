import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    students: [],
    subjects: [],
    grades: []
}

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducer: {
        getStudents(state, action) {
            state.students = [...action.payload]
        }
    }
})

export const { getStudents } = studentsSlice.actions;
export default studentsSlice.reducer;