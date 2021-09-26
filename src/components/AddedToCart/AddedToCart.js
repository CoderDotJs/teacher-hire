import React from 'react';
import './AddedToCart.css';

function AddedToCart(props) {
    const {name, image} =props.clickedData;

  console.log(props)
    return(
        <div>
          <div className="overview">
          <img className="imgStyle" src={image} alt="" className="cart-img"/>
          <h4 className="nameStyle">{name}</h4>
          </div>
        </div>
    )
}

export default AddedToCart;