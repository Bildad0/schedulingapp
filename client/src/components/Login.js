import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Signup from "./Signup";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (username.trim() && password.trim()) {
            e.preventDefault();
            console.log({ username, password });
            setPassword("");
            setUsername("");
        }
    };

    return (
        <main className='login'>
            <form className="login_form" onSubmit={handleSubmit}>
                <h2 className="login_title"> Log into your account</h2>
                <label htmlFor="username">User Name</label>
                <input
                    id="username"
                    name="username"
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='username'
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="password"
                />
                <button className="loginButton">LOG IN</button>
                <p style={{ textAlign: "center", margibTop: '30px' }}>
                    Don't have an account? {" "}
                    <Link className='link' to="/register">
                        Create one
                    </Link>

                </p>

            </form>

        </main>

    )
}

export default Signup;