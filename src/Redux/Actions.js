import axios from 'axios';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';

// Fetch all posts
export const fetchPosts = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:4000/posts');
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

// Fetch a single post by ID
export const fetchPost = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:4000/posts/${id}`);
        dispatch({ type: FETCH_POST_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Error fetching post:', error);
    }
};

// Create a new post
export const createPost = (postData) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:4000/posts', postData);
        dispatch({ type: CREATE_POST_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Error creating post:', error);
    }
};

// Update a post by ID
export const updatePost = (id, postData) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:4000/posts/${id}`, postData);
        dispatch({ type: UPDATE_POST_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Error updating post:', error);
    }
};

// Delete a post by ID
export const deletePost = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:4000/posts/${id}`);
        dispatch({ type: DELETE_POST_SUCCESS, payload: id });
    } catch (error) {
        console.error('Error deleting post:', error);
    }
};
