import { configureStore } from "@reduxjs/toolkit";
import TokenSlice from "./TokenSlice";
import DataSlice from "./DataSlice";

const ReduxStore = configureStore({
  reducer: { LoginStore: TokenSlice.reducer, Data: DataSlice.reducer },
});
export default ReduxStore;
