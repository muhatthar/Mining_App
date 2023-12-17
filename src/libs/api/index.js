import axios from 'axios';

const API = axios.create({
  baseURL: 'localhost:8000/api',
  headers: {
    Accept: 'application/json',
  },
});

export default API;
