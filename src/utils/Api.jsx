import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const registerUser = (userData) => {
  return axios.post(`${API_BASE_URL}/api/register`, userData);
};

export const loginUser = (userData) => {
  return axios.post(`${API_BASE_URL}/api/login`, userData);
};

export const getUsers = (userData) => {
  return axios.get(`${API_BASE_URL}/api/get-users`, userData);
};
export const getBlogs = (data) => {
  return axios.get(`${API_BASE_URL}/api/blog/get-all-blogs`, data);
};
export const createBlog = (data) => {
  return axios.post(`${API_BASE_URL}/api/blog/add-blog`, data);
};
export const updateBlog = async (id, updatedData) => {
  return axios.put(
    `${API_BASE_URL}/api/blog/${id}`,
    JSON.stringify(updatedData),
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export const deleteBlog = (id) => {
  return axios.delete(`${API_BASE_URL}/api/blog/${id}`);
};

export const getProjects = (data) => {
  return axios.get(`${API_BASE_URL}/api/projects/list_projects`, data);
};

export const createProject = (formData) => {
  return axios.post(`${API_BASE_URL}/api/projects/add-project`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateProject = async (id, updatedData) => {
  const formData = new FormData();
  formData.append("projectTitle", updatedData.title);
  formData.append("projectDescription", updatedData.description);
  formData.append("projectTools", updatedData.tools);
  formData.append("projectGithubLink", updatedData.link);
  formData.append("date", updatedData.date);
  if (updatedData.image) {
    formData.append("projectImage", updatedData.image);
  }

  return axios.put(`${API_BASE_URL}/api/projects/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteProject = (id) => {
  return axios.delete(`${API_BASE_URL}/api/projects/${id}`);
};
