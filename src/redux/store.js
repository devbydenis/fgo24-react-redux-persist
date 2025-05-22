import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers"
import { persistStore }  from "redux-persist";


export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],

      }
    });
  }
});

export const persistor = persistStore(store);