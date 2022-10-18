import "./inputs.css";

const Email = (props) => {
    return (
        <input type="text" value={props.value} name="username" id="username" className={props.className + " input-fields"} placeholder="Email" onChange={props.onChange} /> 
    );
}

export default Email;