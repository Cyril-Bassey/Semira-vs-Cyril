import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { combineReducers, applyMiddleware } from 'redux';
import postReducer from './Reducer';
import { composeWithDevTools } from '@redux-devtools/extension';


const rootReducer = combineReducers({
    post: postReducer,
});

const store = configureStore({
  reducer: rootReducer, 
  post: postReducer,  
  applyMiddleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), 
  devTools: composeWithDevTools(),
});

export default store;
