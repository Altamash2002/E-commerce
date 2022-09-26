import "./register.css";
import "../components/inputs.css";
import registerImg from "../images/register-img.png";
import Email from "../components/Email";
import Password from "../components/password";
import Submit from "../components/submit";
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div id="register-container" className="container-fluid">
                <div className="row justify-content-center text-center align-items-center">
                    <div className="col-lg-5">
                        <img src={registerImg} alt="register" id="register-img" className="img-fluid" />
                    </div>
                    <div className="col-lg-5 mb-5">
                        <h1 id="register-heading" className="my-5 text-danger">Sign Up</h1>
                        <form>
                            <input type="text" className="input-fields" placeholder="Name" /> <br /> <br />
                            <Email /> <br /> <br />
                            <Password /> <br /> <br />
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