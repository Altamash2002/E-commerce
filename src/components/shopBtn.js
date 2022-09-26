import { Link } from "react-router-dom";
import "./shopBtn.css";

const ShopBtn = () => {
  return (
    <Link to="/product-list"><button id="btn1">Shop Now</button></Link>
  )
}

export default ShopBtn;