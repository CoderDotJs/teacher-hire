import React from 'react';
import './AddedToCart.css';

function AddedToCart(props) {
    const {name, image} =props.clickedData;

    //Add to cart and show the picture and the name

    return(
        <div>
          <div className="overview">
          <img className="imgStyle cart-img" src={image} alt="" />
          <h4 className="nameStyle">{name}</h4>
          </div>
        </div>
    )
}

export default AddedToCart;