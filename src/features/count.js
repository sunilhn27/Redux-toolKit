import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 1 },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        }
        ,
        decrement: (state) => {
            state.value = state.value - 1

        },
        addByTen: (state) => {
            state.value = state.value + 10

        },
        adduserValue: (state, action) => {
            state.value += + action.payload

        }

    }
})

export const { increment, decrement, addByTen, adduserValue } = counterSlice.actions;

export default counterSlice.reducer;