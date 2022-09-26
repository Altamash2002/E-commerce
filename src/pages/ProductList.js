import FeaturedProducts from "../components/FeaturedProducts";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div id="product-list">
        <h1 id="pro-heading">Dresses</h1>        
        <div id="filter-container">
            <div className="filter">
                <span className="filter-text">Filter Products: </span>  
                <select className="select-container">
                    <option disabled selected>Color</option>    
                    <option>White</option>    
                    <option>Black</option>    
                    <option>Red</option>    
                    <option>Blue</option>    
                    <option>Yellow</option>    
                    <option>Green</option>
                </select>      
                <select className="select-container">
                    <option disabled selected>Size</option>    
                    <option>XS</option>    
                    <option>S</option>    
                    <option>M</option>    
                    <option>L</option>    
                    <option>XL</option>    
                </select>      
            </div>
            <div className="filter">
                <span className="filter-text">Sort Products: </span>
                <select className="select-container">
                    <option selected>Newest</option>
                    <option>Price (asc)</option>
                    <option>Black (desc)</option>
                </select>
            </div>
        </div>

        {/* featured products  */}
        <FeaturedProducts />
    </div>


  )
}

export default ProductList