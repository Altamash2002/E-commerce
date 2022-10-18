import Logo from "../components/logo";
import Submit from "../components/submit";
import "./contact.css";
import "../components/inputs.css";
import Email from "../components/Email";
import { useState } from "react";

const Contact = () => {

    const [contactName,setContactName] = useState('');
    const [contactEmail,setContactEmail] = useState('');
    const [contactPhone,setContactPhone] = useState('');
    const [contactAddress,setContactAddress] = useState('');

    const nameChangeHandler = (e) => {
        setContactName(e.target.value);
    }
    const emailChangeHandler = (e) => {
        setContactEmail(e.target.value);
    }
    const contactChangeHandler = (e) => {
        setContactPhone(e.target.value);
    }
    const addressChangeHandler = (e) => {
        setContactAddress(e.target.value);
    }
    

    const submitHandler = (e) => {
        e.preventDefault();

        setContactName('');
        setContactEmail('');
        setContactPhone('');
        setContactAddress('');
    }

    return (
        <div className="text-center container-fluid">
            <Logo width="300px" />
            <h3 className="mb-5 text-danger">Any Query? Send Message Here</h3>
            <form action="" method="" onSubmit={submitHandler}>
                <input type="text" placeholder="Name" value={contactName} className="input-fields" onChange={nameChangeHandler} /><br/><br/>
                <Email value={contactEmail} onChange={emailChangeHandler} /> <br/> <br/>
                <input type="tel" value={contactPhone} placeholder="Phone No" className="input-fields" onChange={contactChangeHandler} /><br/><br/>
                <textarea value={contactAddress} id="message" placeholder="Enter Your Message Here" className="input-fields" onChange={addressChangeHandler} /><br/><br/>
                <Submit value="Send" /> <br/><br/>
            </form>
        </div>
    );
}

export default Contact;