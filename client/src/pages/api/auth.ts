import axios, { Axios } from "axios";

export const userSignup = async (payload: any) => {
    const { data, status } = await instance.post('auth/register',
        { email: payload.email, password: payload.password, username: payload.username, timezone: payload.timezone, });
    return data;

}

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'application/json'}
  });