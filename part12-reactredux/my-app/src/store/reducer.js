import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value += 10;
    },

    decrement: (state) => {
      state.value -= 5;
    },

    incrementByAmount: (state, action) => {

					console.log(action);

      state.value += action.payload;
    },

  },
});

// check where "actions" and "reducer" come from . node reducer.js 
// console.log(counterSlice);

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
