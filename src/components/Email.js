import "./inputs.css";

const Email = (props) => {
    return (
        <input type="email" name="email" id="email" className={props.className + " input-fields"} placeholder="Email" />
    );
}

export default Email;