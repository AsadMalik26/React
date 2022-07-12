import React from 'react';
import "./Product.css"
const Product = ({title, price, onAddToCart}) => {
    console.log(title,price,onAddToCart);
    var priceClass = price>=500 ? "green":"blue";
    /* const handleOnAddToCart = () => {
        alert("Handle add to cart clicked for " + title +  " for " + price);
    } */
    return (
        <div> 
            {/* find css short/auto-complete method for react jsx */}
        <h2>Name: {title}</h2>
        <h3 className={priceClass}>Price: {price} <button onClick={() => {onAddToCart(title,price)}}>Add to cart</button></h3>
        
        <hr />
        </div>
     );
}
 
export default Product;