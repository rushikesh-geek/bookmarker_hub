import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getBookmarks = () => axios.get(`${API_URL}/bookmarks`);
export const createBookmark = (bookmark) => axios.post(`${API_URL}/bookmarks`, bookmark);
export const updateBookmark = (id, bookmark) => axios.put(`${API_URL}/bookmarks/${id}`, bookmark);
export const deleteBookmark = (id) => axios.delete(`${API_URL}/bookmarks/${id}`);