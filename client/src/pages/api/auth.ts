
import axios from "axios";

export const userSignup = async (payload:any) => {      
      var config = {
      method: 'post',
      maxBodyLength: 4,
        url: 'http://0.0.0.0:3000/api/auth/register',
          headers: { 
          'Content-Type': 'application/json'
        },
        data :  JSON.stringify({
        "email": payload.email,
        "password": payload.password,
        "username": payload.username,
        "timezone":payload.timezone,
      }),
      };
    
    try {
    await  axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error.message);
    });
     } catch (error) {
        console.error(error);
    }
     

    } 

  

    

