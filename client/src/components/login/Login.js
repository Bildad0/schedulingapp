import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { handleLogin } from "../../utils/resource";
import "../signup/Signup.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (username.trim() && password.trim()) {
      e.preventDefault();
      console.log({ username, password });
      handleLogin(username, password, navigate);
      setPassword("");
      setUsername("");
    }
  };

  return (
    <main className="login">
      <form className="login_form" onSubmit={handleSubmit}>
        <h2 className="login_title"> Log into your account</h2>
        <div className="form_items">
          <label htmlFor="username" className="label">
            User Name
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="textinput"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="textinput"
          />
        </div>
        <button className="loginButton">LOG IN</button>
        <p
          style={{ textAlign: "center", margibTop: "30px" }}
          className="question"
        >
          Don't have an account?{" "}
          <Link className="link" to="/register">
            Create one
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
