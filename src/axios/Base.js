import axios from 'axios';

export const url = 'https://it8.onrender.com/api/v1';

export const baseUrl = axios.create({
    baseURL: `${url}/auth`,
  });

  