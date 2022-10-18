import { Link } from "react-router-dom";
import "./featuredImages.css";


const FeaturedImages = (props) => {
  return (
    <div className="featured-img-div my-4">
        <img className="featured-images img-fluid" src={props.item.img} alt="" />
        <div id="feature-image-info">
            <Link to={"/product/" + props.item._id}><div><i className="bi bi-cart-plus"></i></div></Link>
            <Link to={"/product/" + props.item._id}><div><i className="bi bi-search"></i></div></Link>
            <div><i className="bi bi-heart"></i></div>
        </div>
    </div>
  )
}

export default FeaturedImages;