import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    items: [],
    enteredSentence: "",
  },
  reducers: {
    DISPLAY(state, action) {
      state.items = action.payload;
    },
    enteredSentenceInput(state, action) {
      state.enteredSentence = action.payload;
    },
  },
});
export const SearchSliceAction = SearchSlice.actions;
export default SearchSlice;
