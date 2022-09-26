import Logo from "../components/logo";
import Submit from "../components/submit";
import "./contact.css";
import "../components/inputs.css";
import Email from "../components/Email";

const Contact = () => {
    return (
        <div className="text-center container-fluid">
            <Logo width="300px" />
            <h3 className="mb-5 text-danger">Any Query? Send Message Here</h3>
            <form action="" method="">
                <input type="text" placeholder="Name" className="input-fields" /><br/><br/>
                <Email /> <br/> <br/>
                <input type="tel" placeholder="Phone No" className="input-fields" /><br/><br/>
                <textarea id="message" placeholder="Enter Your Message Here" className="input-fields" /><br/><br/>
                <Submit value="Send" /> <br/><br/>
            </form>
        </div>
    );
}

export default Contact;