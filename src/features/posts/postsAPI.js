import axios from 'axios';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchAllPosts = async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
};

export const fetchPostById = async (postId) => {
  const response = await axios.get(`${POSTS_URL}/${postId}`);
  return response.data;
};