import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            // console.log(state);
            // console.log(action);
            
            // we don't need to return the state, immer will return it
            state.value += 1 
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementBy: (state, action) => {
            console.log(action.payload);
            
            state.value += parseInt(action.payload);
        }
    }
});


// actions creators function
export const {increment, decrement, incrementBy} = counterSlice.actions; 
