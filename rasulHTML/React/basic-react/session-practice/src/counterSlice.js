import { createSlice } from "@reduxjs/toolkit";

const initialCounterValue = 0;
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: initialCounterValue,
    username: "Rasul",
    companyName: "Just Compile",
    products: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    haveCustomValue: (state, action) => {
      state.value = action.payload;
    },
    changeCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    changeProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  haveCustomValue,
  changeCompanyName,
  changeProducts,
} = counterSlice.actions;

export default counterSlice.reducer;
