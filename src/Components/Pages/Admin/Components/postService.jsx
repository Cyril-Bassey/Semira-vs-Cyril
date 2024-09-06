import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/deleteposts/${id}`);
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};

export const updatePost = async (id, updatedPost) => {
  try {
    await axios.put(`${API_BASE_URL}/updateposts/${id}`, updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
  }
};
