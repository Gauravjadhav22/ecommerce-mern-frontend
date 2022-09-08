import { createSlice } from "@reduxjs/toolkit";

const searchedPrSlice = createSlice({
  name: "searchedProducts",
  initialState: {
    products: [],
    
  },
  reducers: {
    addsearchedProduct: (state, action) => {
      state.products=(action.payload);
    },
    removeSearch: (state, action) => {
      state.products=[];
    },
  },
});

export const { addsearchedProduct,removeSearch } = searchedPrSlice.actions;
export default searchedPrSlice.reducer;
