import {
  FETCH_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  CREATE_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
  DELETE_POST_SUCCESS
} from './Actions';

const initialState = {
  posts: [],
  post: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_POSTS_SUCCESS:
          return { ...state, posts: action.payload };
      case FETCH_POST_SUCCESS:
          return { ...state, post: action.payload };
      case CREATE_POST_SUCCESS:
          return { ...state, posts: [...state.posts, action.payload] };
      case UPDATE_POST_SUCCESS:
          return {
              ...state,
              posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post),
          };
      case DELETE_POST_SUCCESS:
          return { ...state, posts: state.posts.filter(post => post.id !== action.payload) };
      default:
          return state;
  }
};

export default postReducer;
