import React from "react";
import link from "next/link";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//components
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Profile from "./components/profile/Profile";
import BookUser from "./components/bookuser/BookUser";

function App() {
  return (
    <ul>
      <li></li>
    </ul>
    //   <Route path="/" element={<Login />} />
    //   <Route path="/register" element={<Signup />} />
    //   <Route path="/dashboard" element={<Dashboard />} />
    //   <Route path="/profile/:id" element={<Profile />} />
    //   <Route path="/book/:user" element={<BookUser />} />
  );
}

export default App;
