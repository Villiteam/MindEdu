import { createSlice } from '@reduxjs/toolkit'



const examSlice = createSlice({
    name: 'exam',
    initialState: {
        exam: {},
        score: 0
    },
    reducers: {
        addExam(state, action) {
            state.exam = action.payload;
        },
        addScore(state, action) {
            state.score = action.payload
        }
    },
})

export const { addExam, addScore } = examSlice.actions
export default examSlice.reducer