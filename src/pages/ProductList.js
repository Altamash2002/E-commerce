import { useState } from "react";
import { useLocation } from "react-router-dom";
import FeaturedProducts from "../components/FeaturedProducts";
import "./ProductList.css";

const ProductList = () => {    
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters , setFilters] = useState({});
    const [sort , setSort] = useState('newest');

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name] : value
        })
    }
    
    // console.log(filters);



  return (
    <div id="product-list">
        <h1 id="pro-heading">{cat}</h1>        
        <div id="filter-container" className="row container-fluid">
            <div className="filter col-md-6">
                <span className="filter-text">Filter Products: </span>  
                <select className="select-container" name="color" onChange={handleFilters}>
                    <option disabled>Color</option>    
                    <option>white</option>    
                    <option>black</option>    
                    <option>red</option>    
                    <option>blue</option>    
                    <option>yellow</option>    
                    <option>green</option>
                </select>      
                <select className="select-container" name="size" onChange={handleFilters}>
                    <option disabled>Size</option>    
                    <option>XS</option>    
                    <option>S</option>    
                    <option>M</option>    
                    <option>L</option>    
                    <option>XL</option>    
                </select>      
            </div>
            <div className="filter col-md-6">
                <span className="filter-text">Sort Products: </span>
                <select className="select-container" onChange={(e) => setSort(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="asc">Prize(Asc)</option>
                    <option value="desc">Prize(Desc)</option>
                </select>
            </div>
        </div>

        {/* featured products  */}
        <FeaturedProducts cat={cat} filters={filters} sort={sort} />
    </div>


  )
}

export default ProductList