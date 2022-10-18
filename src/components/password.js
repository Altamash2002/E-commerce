import "./inputs.css";

const Password = (props) => {
    return (
        <input type="password" name="password" id="password" className={props.className + " input-fields"} placeholder="Password" value={props.value} onChange={props.onChange}/>
    );
}

export default Password;