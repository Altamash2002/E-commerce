import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

import Email from "../components/Email";
import Password from "../components/password";
import Submit from "../components/submit";
import loginImg from "../images/login-img.png";
import { login } from '../redux/apiCalls';
import "./login.css";

const Login = () => {
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();

    const { isFetching , error } = useSelector((state) => state.user);
    
    const emailChangeHandler = (e) => {
        setUsername(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    async function submitHandler(e){
        e.preventDefault();
        setUsername('');
        setPassword('');

        login(dispatch , {username , password});

    }

    const errorMsg = {
        color : "red"
    }

    return (
        <>
            <div id="login-container" className="container-fluid">
                <div className="row justify-content-center text-center align-items-center">
                    <div className="col-lg-5">
                        <img src={loginImg} alt="login" className="img-fluid" id="login-img" />
                    </div>
                    <div className="col-lg-5 mb-5">
                        <h1 id="login-heading" className="my-5 text-danger">You're Welcome</h1>
                        <form action="" id="login-form" method="" onSubmit={submitHandler}>
                            <Email value={username} onChange={emailChangeHandler} /> <br /> <br />
                            <Password value={password} onChange={passwordChangeHandler} /> <br /> <br />
                            <Submit value="Log in" disabled={isFetching}/> <br/> <br/>
                            { error && <span style={errorMsg}> something went wrong...</span>}
                        </form>                        
                        <p className="login-dont">Dont have account? <NavLink to="/register">Register</NavLink> </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;