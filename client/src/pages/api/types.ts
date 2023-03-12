export interface IUser {
    username: string;
    email: string;
    timezone: [string];
    schedule: [string];
    image: string;
    _id: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
  
export interface GenericResponse{
    status: string;
    message: string;
}

export interface ILoginResponse {
    status: string;
    access_token: string;
  }
  
  export interface IUserResponse {
    status: string;
    data: {
      user: IUser;
    };
  }

  
  export  type ApiResponse ={
    result: object;
    errorMessage: string;
    succeeded: boolean;
  };