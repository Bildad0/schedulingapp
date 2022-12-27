import axios from "axios";
import { toast } from "react-toastify";

export const time = [
  { id: "null", t: "Select" },
  { id: "7", t: "7:00am" },
  { id: "8", t: "8:00am" },
  { id: "9", t: "9:00am" },
  { id: "10", t: "10:00am" },
  { id: "11", t: "11:00am" },
  { id: "12", t: "12:00am" },
  { id: "13", t: "13:00pm" },
  { id: "14", t: "14:00pm" },
  { id: "15", t: "15:00pm" },
  { id: "16", t: "16:00pm" },
  { id: "17", t: "17:00pm" },
  { id: "18", t: "18:00pm" },
  { id: "19", t: "19:00pm" },
];

//register new user and store the information in the server.
export async function handleRegister(email, username, password, navigate) {
  axios
    .post(
      "http://localhost:4000/register",
      { email, username, password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      console.log("Response received: ", res);
      console.log(res.data);
      toast.success(res);
      navigate("/dashboard");
    })
    .catch((err) => {
      console.log("Error received:", err.message);
      toast.error(err.message);
    });
}
