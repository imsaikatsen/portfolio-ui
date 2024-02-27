import axios from "axios";
const API_BASE_URL = "http://localhost:5030/api";

export const registerUser = (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};

export const loginUser = (userData) => {
  return axios.post(`${API_BASE_URL}/login`, userData);
};

export const getUsers = (userData) => {
  return axios.get(`${API_BASE_URL}/get-users`, userData);
};
export const getBlogs = (data) => {
  return axios.get(`${API_BASE_URL}/blog/get-all-blogs`, data);
};
export const createBlog = (data) => {
  return axios.post(`${API_BASE_URL}/blog/add-blog`, data);
};
export const updateBlog = async (id, updatedData) => {
  return axios.put(`${API_BASE_URL}/blog/${id}`, JSON.stringify(updatedData), {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const deleteBlog = (id) => {
  return axios.delete(`${API_BASE_URL}/blog/${id}`);
};
