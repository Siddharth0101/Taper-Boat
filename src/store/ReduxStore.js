import { configureStore } from "@reduxjs/toolkit";
import TokenSlice from "./TokenSlice";
import DataSlice from "./DataSlice";
import CartSlice from "./CartSlice";
import SearchSlice from "./SearchSlice";

const ReduxStore = configureStore({
  reducer: {
    LoginStore: TokenSlice.reducer,
    Data: DataSlice.reducer,
    CartData: CartSlice.reducer,
    SearchData: SearchSlice.reducer,
  },
});
export default ReduxStore;
