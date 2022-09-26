import "./Cart.css";
import cartImg1 from "../images/cart-img1.png";
import cartImg2 from "../images/cart-img2.png";
import { Link } from "react-router-dom";

const cart1AddItem = () => {
    var itemAmount = document.getElementById("cart1-amount").innerHTML;
    itemAmount *= 1;
    document.getElementById("cart1-amount").innerHTML = itemAmount + 1;
}
const cart1RemoveItem = () => {
    var itemAmount = document.getElementById("cart1-amount").innerHTML;
    if (itemAmount == 0) {
        document.getElementById("cart1-amount").innerHTML = 0;        
    }
    else{
        document.getElementById("cart1-amount").innerHTML = itemAmount - 1;
    }
}

const cart2AddItem = () => {
    var itemAmount = document.getElementById("cart2-amount").innerHTML;
    itemAmount *= 1;
    document.getElementById("cart2-amount").innerHTML = itemAmount + 1;
}

const cart2RemoveItem = () => {
    var itemAmount = document.getElementById("cart2-amount").innerHTML;
    if (itemAmount == 0) {
        document.getElementById("cart2-amount").innerHTML = 0;        
    }
    else{
        document.getElementById("cart2-amount").innerHTML = itemAmount - 1;
    }
}

const Cart = () => {

  return (
    <div id="cart-container">
        <h1 id="cart-title">YOUR BAG</h1>
        <div id="cart-top">
            <Link to="/product-list"><button id="top-btn1" className="top-btn">CONTINUE SHOPPING</button></Link>
            <div id="top-texts">
                <span className="top-text">
                    Shopping Bag(2)
                </span>
                <span className="top-text">
                    Your Wishlet (0)
                </span>
            </div>
            <button id="top-btn2" className="top-btn">CHECKOUT NOW</button>
        </div>
        <div id="cart-bottom" className="row">
            <div id="btm-info" className="col-md-8">
                <div className="product">
                    {/* product details */}
                    <div className="product-details">
                        <img src={cartImg1} alt="" className="img-fluid p-detail-img" />
                        <div className="p-img-details">
                            <span className="product-name"><b>Product : </b> JESSIE THUNDER SHOES</span>
                            <span className="product-id"><b>ID : </b>93813718293</span>
                            <div className="product-color"></div>
                            <span className="product-size"><b>Size : </b>37.5</span>
                        </div>
                    </div>
                    {/* price details */}
                    <div className="prize-deatils">
                        <div className="product-amount-container">
                            <span onClick={cart1RemoveItem} className="p-remove"><i className="bi bi-file-minus-fill"></i></span>
                            <div id="cart1-amount" className="product-amount">2</div>
                            <span onClick={cart1AddItem} className="p-add"><i className="bi bi-file-plus-fill"></i></span>
                        </div>
                        <div className="product-prize">$ 30</div>
                    </div>
                </div>

                <hr />

                {/* product2 */}
                <div className="product">
                    {/* product details */}
                    <div className="product-details">
                        <img src={cartImg2} alt="" className="img-fluid p-detail-img" />
                        <div className="p-img-details">
                            <span className="product-name"><b>Product : </b> HAKURA T-SHIRT </span>
                            <span className="product-id"><b>ID : </b>93813718299</span>
                            <div className="product-color"></div>
                            <span className="product-size"><b>Size : </b>M</span>
                        </div>
                    </div>
                    {/* price details */}
                    <div className="prize-deatils">
                        <div className="product-amount-container">
                            <span onClick={cart2RemoveItem} className="p-remove"><i className="bi bi-file-minus-fill"></i></span>
                            <div id="cart2-amount" className="product-amount">1</div>
                            <span onClick={cart2AddItem} className="p-add"><i className="bi bi-file-plus-fill"></i></span>
                        </div>
                        <div className="product-prize">$ 20</div>
                    </div>
                </div>
            </div>
            <div id="btm-summary" className="col-md-4">
                <h1 id="summary-title">ORDER SUMMARY</h1>
                <div className="summary-item">
                    <span className="summary-item-text">SubTotal </span>    
                    <spn className="summary-item-prize">$ 80</spn>
                </div>
                <div className="summary-item">
                    <span className="summary-item-text">Estimated Shipping </span>    
                    <spn className="summary-item-prize">$ 4.90</spn>
                </div>
                <div className="summary-item">
                    <span className="summary-item-text">Shipping Discount </span>    
                    <spn className="summary-item-prize">$ -4.90</spn>
                </div>
                <div id="summary-item-total">
                    <span className="summary-item-text">Total </span>    
                    <spn className="summary-item-prize">$ 80</spn>
                </div>
                <button id="summary-btn">CHECKOUT NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Cart;