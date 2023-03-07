import { AxiosError } from "axios";
import { instance } from "./types";

export const userSignup = async (payload: any) => {
 let result = await instance.post('auth/register', { email: payload.email, password: payload.password, username: payload.username, timezone: payload.timezone });
    if (result.status == 500) {
        console.error("Server Error");
    } else if (result.status !=200) {
        console.error(result.statusText);
    }
    console.log(result.data);
    } 



