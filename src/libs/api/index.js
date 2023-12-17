import axios from 'axios';

const API = axios.create({
  baseURL: 'localhost:8080/api',
  headers: {
    Accept: 'application/json',
  },
});

export default API;
