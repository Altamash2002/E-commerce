import { Link } from "react-router-dom";
import "./featuredImages.css";


const FeaturedImages = (props) => {
  return (
    <div className="featured-img-div my-4">
        <img className="featured-images img-fluid" src={props.item.url} alt="" />
        <div id="feature-image-info">
            <Link to="/product"><div><i className="bi bi-cart-plus"></i></div></Link>
            <div><i className="bi bi-search"></i></div>
            <div><i className="bi bi-heart"></i></div>
        </div>
    </div>
  )
}

export default FeaturedImages;