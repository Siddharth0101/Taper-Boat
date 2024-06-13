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
    ADD(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.Id === newItem.Id
      );
      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].Amount += newItem.Amount;
      } else {
        state.items.push(newItem);
      }
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.Amount * item.Price,
        0
      );
    },
    EDIT(state, action) {
      const { id, Amount } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.Id === id);
      if (itemIndex !== -1) {
        state.items[itemIndex].Amount = Amount;
      }
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.Amount * item.Price,
        0
      );
    },
    Remove(state, action) {
      state.items = state.items.filter((item) => item.Id !== action.payload);
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.Amount * item.Price,
        0
      );
    },
  },
});

export const CartSliceActions = CartSlice.actions;
export default CartSlice;
