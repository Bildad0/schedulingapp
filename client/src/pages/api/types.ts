import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 8000,
    headers: {
        'Content-Type': 'application/json'
    }
});