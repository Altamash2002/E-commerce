import "./FeaturedProducts.css";
import { featureImages } from "../data";
import FeaturedImages from "./featuredImages";
import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedProducts = (props) => {
  
  const [products , setProducts] = useState([]);
  const [filteredProducts , setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () => {
      try{
        const res = await axios.get(props.cat ? `http://localhost:5000/api/products?category=${props.cat}` : "http://localhost:5000/api/products" );
        setProducts(res.data)
      }catch(err){

      }
    };
    getProducts();
  } , [props.cat]);

  useEffect(()=>{
    props.cat && setFilteredProducts(
      products.filter(item => Object.entries(props.filters).every(([key , value])=>
        item[key].includes(value)
      )) 
    )
  } , [props.cat , props.filters , products]);

  useEffect(()=>{
    if (props.sort === "newest") {
      setFilteredProducts(prev=>
          [...prev].sort((a,b)=>a.createdAt - b.createdAt)
        )      
    }else if (props.sort === "asc") {
      setFilteredProducts(prev=>
          [...prev].sort((a,b)=>a.prize - b.prize)
        )      
    }else {
      setFilteredProducts(prev=>
          [...prev].sort((a,b)=>b.prize - a.prize)
        )      
    }
  } , [props.sort])

  return (
    
    <div id="featured-images" className="text-center container-fluid">
        <h2 className="mt-5 pt-2">Featured Products</h2>
        <p>The Purpose of Lorem ipsum</p>

        <div className="row justify-content-center ">
            {
                props.cat ? filteredProducts.map(item => (
                        <FeaturedImages item={item} key={item.id} /> 
                    )
                ) : featureImages.slice(0,8).map(item => (
                  <FeaturedImages item={item} key={item.id} /> 
                    )
                )
            }
        </div>
    </div>
  )
}

export default FeaturedProducts;