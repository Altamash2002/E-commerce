import "./Product.css";
import product1 from "../images/featured1.png"
import { Link } from "react-router-dom";

const addItem = () => {
    var itemAmount = document.getElementById("amount").innerHTML;
    itemAmount *= 1;
    document.getElementById("amount").innerHTML = itemAmount + 1;
}

const removeItem = () => {
    var itemAmount = document.getElementById("amount").innerHTML;
    if (itemAmount == 0) {
        document.getElementById("amount").innerHTML = 0;        
    }
    else{
        document.getElementById("amount").innerHTML = itemAmount - 1;
    }
}

const Product = () => {
  return (
    <div id="product-container" className="row container-fluid">
        <div id="product-img-container" className="col-md-6">
            <img src={product1} alt="" className="img-fluid" id="product-img" />
        </div>
        <div id="product-info-container" className="col-md-6">
            <h1 id="product-title">
                Denim Jumpsuit
            </h1>
            <p id="product-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate incidunt autem architecto dicta, nesciunt quidem nostrum aliquam totam. Nihil quisquam veniam, aut earum in voluptate quia nemo illum rerum, ipsam repudiandae. Error ipsum minima officiis consequatur est cumque? Omnis earum ipsam, delectus nemo laborum amet aliquam similique. Id, error!
            </p>
            <span id="product-price">$ 20</span>
            <div id="product-filter-container">
                {/* color filter */}                
                <div className="product-filter">
                    <span className="filter-title">Color</span>
                    <div id="fc-1" className="filter-color"></div>
                    <div id="fc-2" className="filter-color"></div>
                    <div id="fc-3" className="filter-color"></div>
                </div>
                {/* product filter */}
                <div className="product-filter">
                    <span className="filter-title">Size</span>
                    <select id="product-filter-size">
                        <option className="filter-size">XS</option>
                        <option className="filter-size">S</option>
                        <option className="filter-size">M</option>
                        <option className="filter-size">L</option>
                        <option className="filter-size">XL</option>
                    </select>
                </div>
            </div>

            <div id="add-container">
                <div id="amount-container">
                    <span onClick={removeItem} id="remove">
                        <i className="bi bi-file-minus-fill"></i>
                    </span>
                    <span id="amount">1</span>
                    <span onClick={addItem} id="add">
                        <i className="bi bi-file-plus-fill"></i>
                    </span>
                </div>
                <Link to="/cart"><button id="add-btn"> Add To Cart </button></Link>
            </div>
        </div>
    </div>
  )
}

export default Product