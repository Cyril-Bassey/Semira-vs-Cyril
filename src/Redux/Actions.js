import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from "./ActionTypes";
  
  export const fetchData = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_DATA_REQUEST });
  
      try {
        const response = await fetch("http://localhost:3004/All_Services");
        console.log (response);
        const data = await response.json();
  
        dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
      }
    };
  };