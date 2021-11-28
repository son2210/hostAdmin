import axios from 'axios';

const requestInterceptor = (req) => {
  const { accessToken } = JSON.parse(localStorage.getItem('persist:auth'));
  const token = accessToken.replace(/"/g, '');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
};

const responseInterceptor = (res) => {
  return res;
};

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(responseInterceptor);

export default api;
