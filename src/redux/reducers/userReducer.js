import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        aim: []
    },
    reducers: {
        addUser(state, action) {
            state.user = action.payload;
        },
        removeUser(state) {
            state.user = null;
        },
        addAim(state, action) {
            state.aim = action.payload
        },
        removeAim(state, action) {
            state.aim = action.payload
        }
    },
})

export const { addUser, removeUser, addAim, removeAim, editAim } = userSlice.actions
export default userSlice.reducer