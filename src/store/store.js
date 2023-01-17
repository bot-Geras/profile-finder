import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { dataSlice } from "../features/dataSlices";

export const store = configureStore({
  reducer: {
    [dataSlice.reducerPath]: dataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataSlice.middleware),
});

setupListeners(store.dispatch);

// export const AppDispatch = store.dispatch
// export const RootState = store.getState
