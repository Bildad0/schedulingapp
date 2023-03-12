

import { axiosInstance } from "./constants";
import { ApiResponse } from "./types";
export const userSignup = async (payload:any) => {      
  const {data,status} = await axiosInstance.post<ApiResponse>("/auth/register",
    {
      email: payload.email,
      password: payload.password,
      username: payload.username,
      timezone:payload.timezone,
    });
  if (status == 200) {
    return data;
  } else if (status == 500) {
    return { message: "Server error" }; 
  } return status;
   
    } 

export const userLogin = async (payload: any) => { 
  
}