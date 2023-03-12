import axios from "axios";

export const AppConstants={
    LOGIN_DATA:"LOGIN_DATA",
    APP_NAME:'Scheduler',
    DATE_FORMAT:"dd MMM, yyyy",
    CURRENT_ROUTE_PATH:"path",
}
  


export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
  headers:{'':''}
});