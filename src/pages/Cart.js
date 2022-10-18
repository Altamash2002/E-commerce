import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import logo from "../images/logo.png";
import { useEffect, useState } from "react";
import {userRequest} from "../requestMethods"

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {

    const cart = useSelector((state)=> state.cart);

    const [stripeToken , setStripeToken] = useState(null);
    const navigate = useNavigate();
    

    const onToken = (token) => {
        setStripeToken(token);
    }
    useEffect(()=>{
        const makeRequest = async () => {
            try{
                const res = await userRequest.post("/checkout/payments" , {
                    tokenId : stripeToken.id,
                    amount : cart.total * 100,
                })
                navigate('/success' , {stripeData:res.data , products : cart});
            }catch{}
        };
        stripeToken && makeRequest();
    } , [stripeToken , cart.total , navigate]); 

    var quantity;

    cart.products.map(product => {
        quantity = product.quantity;
    } );

    // var totalCart = cart.total;

    // var totalPrize;
    // totalPrize += totalCart;
    

    const [productQuantity , setProductQuantity] = useState(quantity);
    
    // console.log(productQuantity);


    // handle quantity function
    const handleCartQuantity = (type) =>{
        if (type === "dec") {
            productQuantity > 1 && setProductQuantity(productQuantity - 1);
        }
        else if(type === "inc"){
            setProductQuantity(productQuantity + 1);
            console.log(productQuantity)
        }
    }

  return (
    <div id="cart-container">
        <h1 id="cart-title" className="text-danger">YOUR BAG</h1>
        <div id="cart-top" className="row container-fluid justify-content-between align-items-center text-center">
            <Link className="col-xxl-3 my-3" to="/products"><button id="top-btn1" className="top-btn">CONTINUE SHOPPING</button></Link>

        </div>
        <div id="cart-bottom" className="row">
            <div id="btm-info" className="col-xxl-8">
                {cart.products.map(product => (
                    <div className="product row justify-content-between text-center my-3">
                        <div id="remove-cart" className="text-left" onClick={handleRemoveCart}><i class="bi bi-x-circle"></i></div>
                        {/* product details */}
                        <div className="product-details col-xxl-6">
                            <img src={product.img} alt="" className="img-fluid p-img my-1" />
                            <div className="p-img-details">
                                <span className="product-name my-2"><b>Product : </b> {product.title}</span>
                                <span className="product-id my-2"><b>ID : </b>{product._id}</span>
                                <div className="product-color my-2" id={product.color}></div>
                                <span className="product-size my-2"><b>Size : </b>{product.size}</span>
                            </div>
                        </div>
                        {/* price details */}
                        <div className="prize-deatils col-xxl-6">
                            <div className="product-amount-container">
                                <span className="p-remove" onClick={()=>handleCartQuantity("dec")} ><i className="bi bi-file-minus-fill"></i></span>
                                <div id="cart1-amount" className="product-amount">{productQuantity}</div>
                                <span className="p-add" onClick={()=>handleCartQuantity("inc")} ><i className="bi bi-file-plus-fill"></i></span>
                            </div>
                            <div className="product-prize">$ {product.prize*productQuantity}</div>
                        </div>                       

                        <hr />
                    </div>
                ))}

            </div>
            <div id="btm-summary" className="col-xxl-4">
                <h1 id="summary-title">ORDER SUMMARY</h1>
                <div className="summary-item">
                    <span className="summary-item-text">SubTotal </span>    
                    <spn className="summary-item-prize">$ {cart.total}</spn>
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
                    <spn className="summary-item-prize">$ {cart.total}</spn>
                </div>
                <StripeCheckout 
            name='Altamash Shop' 
            image={logo}
            billingAddress
            shippingAddress
            description={`Your Total is $ ${cart.total}`} 
            amount={cart.total*100}
            token={onToken}
            stripeKey={KEY}
            >
            <button id="summary-btn">
                Checkout Now
            </button>
        </StripeCheckout>
            </div>
        </div>
    </div>
  )
}

export default Cart;