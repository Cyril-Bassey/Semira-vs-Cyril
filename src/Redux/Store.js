import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import servicesdataReducer from "./Reducer";

const rootReducer = combineReducers({
  data: servicesdataReducer,
  // other reducers can be added here
});

const store = configureStore({
    reducer: rootReducer,  // <-- Corrected the usage
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Optional: Add thunk if not included by default
    devTools: composeWithDevTools(),  // Optional: Include devTools if needed
  });

  export default store;