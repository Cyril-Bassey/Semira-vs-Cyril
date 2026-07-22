import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import servicesdataReducer from "./Reducer";

const rootReducer = combineReducers({
  data: servicesdataReducer,
  // other reducers can be added here
});

const store = configureStore({
  reducer: rootReducer,
  // getDefaultMiddleware() already includes redux-thunk
  devTools: composeWithDevTools(),
});

export default store;