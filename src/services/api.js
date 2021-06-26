import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://stage.api.tempook.com',
});

// export const fetchUserList = userId => axios.create({ baseURL: `https://api.github.com });
// export const fetchUser = userId => axios.create({ baseURL: `https://api.github.com/users/${userId}` });

export default api;
