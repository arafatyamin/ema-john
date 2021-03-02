import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./product.css";

const Product = (props) => {
    // console.log(props)
    const {img, name, seller, price, stock}=props.product;
    return (
        <div className='product'>
            <div>
                <img src={props.product.img} alt="" srcset=""/>
            </div>
            <div>
            <h1 className='product-name'>{props.product.name}</h1>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <p><small>only {stock} left in stok - Order soon</small></p>
            <button className='main-button'
            onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;