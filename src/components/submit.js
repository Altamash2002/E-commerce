import "./submit.css"

const Submit = (props) => {
    return (
            <input type="submit" id="submit-btn" value={props.value} />
    );
};

export default Submit;