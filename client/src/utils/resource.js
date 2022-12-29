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

const headers = {
  "content-Type": "application/json",
  Accept: "application/json",
};

//register new user.
export async function handleRegister(email, username, password, navigate) {
  try {
    const result = await axios({
      method: "post",
      timeout: 8000,
      url: "http://localhost:4000/register",
      data: { email, username, password },
      headers: headers,
    });
    const data = result.json();
    if (data.error_message) {
      toast.error(data.error_message);
    } else {
      toast.success(data.message);
      navigate("/");
    }
  } catch (err) {
    console.log("Error received:", err.message);
    toast.error(err);
  }
}

//login user
export async function handleLogin(username, password, navigate) {
  try {
    const result = await axios.post(
      "http://localhost:4000/login",
      { username, password },
      {
        headers: headers,
      },
      {
        timeout: 8000,
      }
    );
    const data = result.json();
    if (data.error_message) {
      toast.error(data.error_message);
    } else {
      toast.success(data.message);
      localStorage.setItem("_id", data.data._id);
      localStorage.setItem("_myEmail", data.data._email);
      navigate("/dashboard");
    }
  } catch (err) {
    console.log("Error received:", err.message);
    toast.error(err.message);
  }
}

//create schedules
export async function createSchedule(selectedTimezone, schedule, navigate) {
  try {
    await axios.post(
      "http://localhost:4000/schedule/create",
      {
        userId: localStorage.getItem("_id"),
        timezone: selectedTimezone,
        schedule,
      },
      {
        headers: headers,
      },
      {
        timeout: 8000,
      }
    );
    navigate(`/profile/${localStorage.getItem("_id")}`);
  } catch (err) {
    console.log("Error Received:", err.message);
    toast.error(err.message);
  }
}
