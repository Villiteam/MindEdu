import { createSlice } from '@reduxjs/toolkit'



const examSlice = createSlice({
    name: 'exam',
    initialState: {
        exam: {}
    },
    reducers: {
        addExam(state, action) {
            state.exam = action.payload;
        }
    },
})

export const { addExam } = examSlice.actions
export default examSlice.reducer