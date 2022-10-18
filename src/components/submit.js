import "./submit.css"

const Submit = (props) => {
    return (
            <input type="submit" disabled={props.disabled} id="submit-btn" value={props.value} />
    );
};

export default Submit;