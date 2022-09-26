import { NavLink } from "react-router-dom";
import Email from "../components/Email";
import Password from "../components/password";
import Submit from "../components/submit";
import loginImg from "../images/login-img.png";
import "./login.css";

const Login = () => {
    return (
        <>
            <div id="login-container" className="container-fluid">
                <div className="row justify-content-center text-center align-items-center">
                    <div className="col-lg-5">
                        <img src={loginImg} alt="login" className="img-fluid" id="login-img" />
                    </div>
                    <div className="col-lg-5 mb-5">
                        <h1 id="login-heading" className="my-5 text-danger">You're Welcome</h1>
                        <form action="" id="login-form" method="">
                            <Email /> <br /> <br />
                            <Password /> <br /> <br />
                            <Submit value="Log in" /> <br/> <br/>
                        </form>                        
                        <p className="login-dont">Dont have account? <NavLink to="/register">Register</NavLink> </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;