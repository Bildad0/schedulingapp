import axios from "axios";
import { JSON } from "mysql/lib/protocol/constants/types";
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
      console.log(res);
      toast.success(res);
      navigate("/");
    })
    .catch((err) => {
      console.log("Error received:", err.message);
      toast.error(err.message);
    });
}

//handle login
export async function handleLogin(username, password, navigate) {
  try {
    const request = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = request.json();
    if (data.error_message) {
      toast.error(data.error_message);
    } else {
      toast.success(data.message);
      localStorage.setItem("_id", data.data._id);
      localStorage.setItem("_myEmail", data.data._email);
      navigate("/dashboard");
    }
  } catch (err) {
    toast.error(err);
  }
}
