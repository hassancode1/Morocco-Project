import axios from 'axios';

export const httpClient = axios.create({
  baseURL: "https://morocco-nig.fly.dev/api/v1",
  headers: {
    Accept: "application/json",
  },
});
