import { configureStore } from "@reduxjs/toolkit";
import TokenSlice from "./TokenSlice";

const ReduxStore = configureStore({
  reducer: { LoginStore: TokenSlice.reducer },
});
export default ReduxStore;
