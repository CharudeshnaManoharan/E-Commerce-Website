import { configureStore } from "@reduxjs/toolkit";

import orderReducer from "../Slice/orderSlice";

const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});

export default store;
