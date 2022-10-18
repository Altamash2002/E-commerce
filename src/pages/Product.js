import "./Product.css";
import { Link, useLocation } from "react-router-dom";
import React , { useState , useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";


const Product = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product , setProduct] = useState({});
    const [quantity , setQuantity] = useState(1);
    const [color , setColor] = useState("");
    const [size , setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/" + id);
                return setProduct(res.data);
            }catch{}
        }
        getProduct();
    } , [id] );

    // handle quantity function
    const handleQuantity = (type) =>{
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1) ;
        }
        else{
            setQuantity(quantity + 1);
        }
    }

    // add to cart handle click function
    const handleClick = () => {
        dispatch(
            addProduct({...product , quantity , color , size})
        )
    };


  return (
    
    <div id="product-container" className="row container-fluid">
        <div id="product-img-container" className="col-md-6">
            <img src={product.img} alt="" className="img-fluid" id="product-img" />
        </div>
        <div id="product-info-container" className="col-md-6">
            <h1 id="product-title">
                {product.title}
            </h1>
            <p id="product-description">
                {product.desc}
            </p>
            <span id="product-price">$ {product.prize}</span>
            <div id="product-filter-container">
                {/* color filter */}                
                <div className="product-filter">
                    <span className="filter-title">Color</span>
                    
                    {
                        product.color?.map((c) => (
                            <div id={c} key={c} className="filter-color" onClick={() => setColor(c)} />
                        ))
                    }

                </div>
                {/* product filter */}
                <div className="product-filter">
                    <span className="filter-title">Size</span>
                    <select id="product-filter-size" onChange = {(e)=>setSize(e.target.value)} >
                        
                        {
                            product.size?.map((s) => (
                                <option className="filter-size" key={s}>{s}</option>
                            ))
                        }                  

                    </select>
                </div>
            </div>

            <div id="add-container">
                <div id="amount-container">
                    <span id="remove" onClick={()=>handleQuantity("dec")}>
                        <i className="bi bi-file-minus-fill"></i>
                    </span>
                    <span id="amount">{quantity}</span>
                    <span id="add" onClick={()=>handleQuantity("inc")}>
                        <i className="bi bi-file-plus-fill"></i>
                    </span>
                </div>
                <button id="add-btn" onClick={handleClick}> Add To Cart </button>
            </div>
        </div>
    </div>
  )
}

export default Product