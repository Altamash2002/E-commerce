import "./register.css";
import "../components/inputs.css";
import registerImg from "../images/register-img.png";
import Email from "../components/Email";
import Password from "../components/password";
import Submit from "../components/submit";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Register = () => {

    const [registerName,setRegisterName] = useState('');
    const [registerEmail,setRegisterEmail] = useState('');
    const [registerPassword,setRegisterPassword] = useState('');
    const [registerPin,setRegisterPin] = useState('');

    const nameChangeHandler = (e) => {
        setRegisterName(e.target.value);
    }
    const emailChangeHandler = (e) => {
        setRegisterEmail(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setRegisterPassword(e.target.value);
    }
    const pinChangeHandler = (e) => {
        setRegisterPin(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        setRegisterName('');
        setRegisterEmail('');
        setRegisterPassword('');
        setRegisterPin('');
    }

    return (
        <>
            <div id="register-container" className="container-fluid">
                <div className="row justify-content-center text-center align-items-center">
                    <div className="col-lg-5">
                        <img src={registerImg} alt="register" id="register-img" className="img-fluid" />
                    </div>
                    <div className="col-lg-5 mb-5">
                        <h1 id="register-heading" className="my-5 text-danger">Sign Up</h1>
                        <form action="" method="" onSubmit={submitHandler}>
                            <input type="text" className="input-fields" placeholder="Name" value={registerName} onChange={nameChangeHandler} /> <br /> <br />
                            <Email value={registerEmail} onChange={emailChangeHandler} /> <br /> <br />
                            <Password value={registerPassword} onChange={passwordChangeHandler} /> <br /> <br />
                            <input type="pin" value={registerPin} className="input-fields" placeholder="Pin Code" onChange={pinChangeHandler} /> <br/><br/>
                            <Submit value="Register" /> <br /> <br />
                        </form>
                        <p className="login-dont"> Already have account? <NavLink to="/login">Login</NavLink> </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;