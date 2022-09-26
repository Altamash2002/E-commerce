import logo from "../images/logo.png";

const Logo = (props) => {
  return (
    <img src={logo} alt="" width={props.width} />
  )
}

export default Logo;