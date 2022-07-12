import React from 'react';
import "./Product.css"
const Product = (props) => {
    console.log(props);
    var priceClass = props.price>=500 ? "green":"blue";
    /* const handleOnAddToCart = () => {
        alert("Handle add to cart clicked for " + props.title +  " for " + props.price);
    } */
    return (
        <div> 
            {/* find css short/auto-complete method for react jsx */}
        <h2>Name: {props.title}</h2>
        <h3 className={priceClass}>Price: {props.price} <button onClick={() => {props.onAddToCart(props.title,props.price)}}>Add to cart</button></h3>
        
        <hr />
        </div>
     );
}
 
export default Product;