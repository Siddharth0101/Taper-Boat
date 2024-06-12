import { configureStore } from "@reduxjs/toolkit";
import TokenSlice from "./TokenSlice";
import DataSlice from "./DataSlice";
import CartSlice from "./CartSlice";

const ReduxStore = configureStore({
  reducer: {
    LoginStore: TokenSlice.reducer,
    Data: DataSlice.reducer,
    CartData: CartSlice.reducer,
  },
});
export default ReduxStore;
