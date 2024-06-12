import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    DISPLAY(state, action) {
      state.items = action.payload;
      state.totalAmount = action.payload.reduce(
        (total, item) => total + item.Amount * item.Price,
        0
      );
    },
  },
});
export const CartSliceActions = CartSlice.actions;
export default CartSlice;
