import "./FeaturedProducts.css";
import { featureImages } from "../data";
import FeaturedImages from "./featuredImages";

const FeaturedProducts = () => {
  return (
    
    <div id="featured-images" className="text-center container-fluid">
        <h2 className="mt-5 pt-2">Featured Products</h2>
        <p>The Purpose of Lorem ipsum</p>

        <div className="row justify-content-center ">
            {
                featureImages.map(item => (
                        <FeaturedImages item = {item} />
                    )
                )
            }
        </div>
    </div>
  )
}

export default FeaturedProducts;