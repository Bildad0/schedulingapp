import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { handleRegister } from "../../utils/resource";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim() && email.trim()) {
      handleRegister(email, username, password, navigate);
      //console.log(email, username, password);
      setEmail("");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <main className="signup">
      <form className="signup_form" onSubmit={handleSubmit}>
        <div className="form_items">
          <h2 className="signup_title"> Create an Account</h2>
          <label htmlFor="email" className="label">
            {" "}
            Email Address
          </label>
          <input
            id="email"
            name="email"
            className="textinput"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            id="username"
            name="username"
            className="textinput"
            required
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            name="password"
            className="textinput"
            required
            minLength={6}
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="signupButton">REGISTER</button>
        <p
          style={{ textAlign: "center", marginTop: "30px" }}
          className="question"
        >
          Already have an account? {""}
          <Link className="link" to="/">
            Sign in
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Signup;
