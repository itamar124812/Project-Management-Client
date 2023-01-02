import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Utilities/rest";




export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit  = async(e) => {
        e.preventDefault();
        try {
            let res = await login(email,password);
            setEmail("");
            setPassword("");
            if(res.ok){
                localStorage.setItem("token", res.token);
                navigate("/board");
            } else {
                window.alert("could not log in because:" + res.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                {/* <label htmlFor="email">email</label> */}
                <input className= "form-inputs" value={email} type="email" placeholder="Type your email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                {/* <label htmlFor="password">password</label> */}
                <input className= "form-inputs" value={password} type="password" placeholder="Type your password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" className="login-btn">Login</button>
            </form>
            <Link to="/register" className="link-btn">Don't have an account? Register</Link>
            <p className="line"><span className="or-line">or</span></p>
            <a href="https://github.com/login/oauth/authorize?client_id=6643d5d9fdd2d60171ea&scope=user:email&response_type=code">
            <button className="githubLogin">
                <img src="https://github.com/favicon.ico" alt="GitHub logo" width="30" height="30"/>
                Sign up with GitHub
            </button>
            </a> 
        </div>

    )
}