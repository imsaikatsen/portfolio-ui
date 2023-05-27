import axios from 'axios';
const API_BASE_URL = 'http://localhost:5000/api';


export const registerUser = (userData) => {

    return axios.post(`${API_BASE_URL}/register`, userData) 
}

export const loginUser = (userData) => {

    return axios.post(`${API_BASE_URL}/login`, userData) 
}

